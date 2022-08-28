

import { CardElement, useStripe, useElements, IdealBankElement } from '@stripe/react-stripe-js';
import { StripeCardElement, StripeIdealBankElement,PaymentIntent  } from '@stripe/stripe-js';

import Button, {BUTTON_TYPES} from '../button/button.component';
import { PaymentFormContainer, FormContainer, PaymentButton} from './payment-form.styles';
import { useState, FormEvent, MouseEventHandler} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentuser } from '../../store/user/user.selector';
import { clearCartAction } from '../../store/cart/cart.action';
 
import { cartTotalPriceSelector } from '../../store/cart/cart.selector'
// import fetchSecretClient from '../../utils/stripe/stripe-fetch-clientSecret';
import PAYMENT_METHODS from '../../utils/stripe/payment-methods';



// export default fetchSecretClient;

const ifValidCard = (card: StripeCardElement | null): card is StripeCardElement => card !== null
// const ifValidIdea = (idea: StripeCardElement)

const PaymentForm = () => {
    // console.log(CardElement)
    const stripe = useStripe();
    const elements = useElements();
    const amount = useSelector(cartTotalPriceSelector);
    const currentUser = useSelector(selectCurrentuser);
    const [isPaying, setIsPaying] = useState(false);
    const dispatch = useDispatch();
    // const payMethod = paymentMethod || PAYMENT_METHODS.CARD;
    const paymentResultFn = async ({
        client_secret, 
    }: {client_secret: string})=> {
        return await stripe!.confirmCardPayment(client_secret, {
            payment_method: {
                card: elements!.getElement(CardElement)!,
                billing_details: {
                    name: currentUser? currentUser.displayname : 'Guest'
                },
            }
        });
    };


    const paymentHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!stripe || !elements) return;
        // setIsPaying(true);

        setIsPaying(true);
        //fetch 
        // const response = await fetchSecretClient({
        //     currency: 'eur',
        //     amount:  amount
        // });

        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amount: amount * 100 }),
          }).then((res) => res.json());
      
          //get the client_secret
        const {paymentIntent: {client_secret}} = response;

        const paymentResult = await paymentResultFn({client_secret});
      
        setIsPaying(false);
        if(paymentResult!.error) {
            alert(paymentResult!.error);
        } else {
            if (paymentResult!.paymentIntent!.status === 'succeeded') {
                dispatch(clearCartAction());
                alert('payment successful');
            }
        }
        // onSubmit={ paymentHandler }
        // console.log(response);
    }

    return (
        <PaymentFormContainer>
            <FormContainer onSubmit={paymentHandler}>
                {/* {
                    payMethod === PAYMENT_METHODS.CARD? <CardElement />:<CardElement />
                } */}
                <CardElement />
                <PaymentButton type = "submit" buttonType={BUTTON_TYPES.inverted} isLoading = {isPaying} name = {PAYMENT_METHODS.CARD}>Pay with card</PaymentButton>
            </FormContainer>         
        </PaymentFormContainer>
    )
}

export default PaymentForm;


// import { useState, FormEvent } from 'react';
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// import { StripeCardElement } from '@stripe/stripe-js';
// import { useSelector } from 'react-redux';
// import { selectCurrentuser } from '../../store/user/user.selector';
// import { cartTotalPriceSelector } from '../../store/cart/cart.selector';
// import Button, {BUTTON_TYPES} from '../button/button.component';
// // import { selectCartTotal } from '../../store/cart/cart.selector';
// // import { selectCurrentUser } from '../../store/user/user.selector';

// // import { BUTTON_TYPE_CLASSES } from '../button/button.component';

// import {
//   PaymentFormContainer,
//   FormContainer,
//   PaymentButton,
// } from './payment-form.styles';

// const ifValidCardElement = (
//   card: StripeCardElement | null
// ): card is StripeCardElement => card !== null;

// const PaymentForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const amount = useSelector(cartTotalPriceSelector);
//   const currentUser = useSelector(selectCurrentuser);
//   const [isProcessingPayment, setIsProcessingPayment] = useState(false);

//   const paymentHandler = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (!stripe || !elements) {
//       return;
//     }

//     setIsProcessingPayment(true);

//     const response = await fetch('/.netlify/functions/create-payment-intent', {
//       method: 'post',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ amount: amount * 100 }),
//     }).then((res) => res.json());

//     const {
//       paymentIntent: { client_secret },
//     } = response;

//     const cardDetails = elements.getElement(CardElement);

//     if (!ifValidCardElement(cardDetails)) return;

//     const paymentResult = await stripe.confirmCardPayment(client_secret, {
//       payment_method: {
//         card: cardDetails,
//         billing_details: {
//           name: currentUser ? currentUser!.displayname : 'Guest',
//         },
//       },
//     });

//     setIsProcessingPayment(false);

//     if (paymentResult.error) {
//       alert(paymentResult.error);
//     } else {
//       if (paymentResult.paymentIntent.status === 'succeeded') {
//         alert('Payment Successful');
//       }
//     }
//   };

//   return (
//     <PaymentFormContainer>
//       <FormContainer onSubmit={paymentHandler}>
//         <h2>Credit Card Payment: </h2>
//         <CardElement />
//         <PaymentButton
//           isLoading={isProcessingPayment}
//           buttonType={BUTTON_TYPES.inverted}
//         >
//           Pay now
//         </PaymentButton>
//       </FormContainer>
//     </PaymentFormContainer>
//   );
// };

// export default PaymentForm;