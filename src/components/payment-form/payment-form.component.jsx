// import { CardElement, useStripe, useElements, IdealBankElement} from '@stripe/react-stripe-js';

// import Button, {BUTTON_TYPES} from '../button/button.component';
// import { PaymenntFormContainer, FormContainer, PaymentButton} from './payment-form.style';
// import { useState  } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { selectCurrentuser } from '../../store/user/user.selector';
// import { clearCartAction } from '../../store/cart/cart.action';
 
// import { cartTotalPriceSelector } from '../../store/cart/cart.selector'

// import fetchSecretClient from '../../utils/stripe/stripe-fetch-clientSecret';
// import PAYMENT_METHODS from '../../utils/stripe/payment-methods';

// const PaymentForm = ({payMethod}) => {
//     // console.log(CardElement)
//     const stripe = useStripe();
//     const elements = useElements();
//     const amount = useSelector(cartTotalPriceSelector);
//     const currentUser = useSelector(selectCurrentuser);
//     const [isPaying, setIsPaying] = useState(false);
//     const dispatch = useDispatch();
//     const paymentMethod = payMethod || PAYMENT_METHODS.CARD;

//     const paymentHandler = async (e) => {
//         e.preventDefault();
//         if(!stripe || !elements) return;


//         setIsPaying(true);
//         //fetch 
//         const response = await fetch('/.netlify/functions/create-payment-intent', {
//             method: 'post',
//             headers: {
//               'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ amount: amount * 100}), //multiple
//           }).then((res) => {
//             return res.json();
//           });

//         //   console.log(response)
//         // const response = await fetchSecretClient({
//         //     paymentMethod,
//         //     currency: 'eur',
//         //     amount:  amount*100
//         // });



//           //get the client_secret
//         const {paymentIntent: {client_secret}} = response;
//         const paymentResult = await stripe.confirmCardPayment(client_secret, {
//             payment_method: {
//                 card: elements.getElement(CardElement),
//                 billing_details: {
//                     name: currentUser? currentUser.dispalyName : 'Guest'
//                 }
//             }
//         });
//         // const paymentResult = await stripe.confirmIdealPayment(client_secret, {
//         //     payment_method: {
//         //       ideal: elements.getElement(IdealBankElement),
//         //     },
//         //     // Return URL where the customer should be redirected after the authorization.
//         //     // return_url: window.location.href,
//         // })


//         setIsPaying(false);

//         if(paymentResult.error) {
//             alert(paymentResult.error);
//         } else {
//             if (paymentResult.paymentIntent.status === 'succeeded') {
//                 dispatch(clearCartAction());
//                 alert('payment successful');
//             }
//         }

//         // console.log(response);
//     }
//     return (
//         <PaymenntFormContainer>
//             <FormContainer onSubmit={ paymentHandler }>
//                 <CardElement />
//                 {/* <IdealBankElement /> */}
//                 <PaymentButton buttonType={BUTTON_TYPES.inverted} isLoading = {isPaying}>Pay now</PaymentButton>
//             </FormContainer>         
//         </PaymenntFormContainer>
//     )
// }

// export default PaymentForm;

import { CardElement, useStripe, useElements, IdealBankElement } from '@stripe/react-stripe-js';

import Button, {BUTTON_TYPES} from '../button/button.component';
import { PaymenntFormContainer, FormContainer, PaymentButton} from './payment-form.style';
import { useState  } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentuser } from '../../store/user/user.selector';
import { clearCartAction } from '../../store/cart/cart.action';
 
import { cartTotalPriceSelector } from '../../store/cart/cart.selector'
import fetchSecretClient from '../../utils/stripe/stripe-fetch-clientSecret';
import PAYMENT_METHODS from '../../utils/stripe/payment-methods';

const PaymentForm = ({paymentMethod}) => {
    // console.log(CardElement)
    const stripe = useStripe();
    const elements = useElements();
    const amount = useSelector(cartTotalPriceSelector);
    const currentUser = useSelector(selectCurrentuser);
    const [isPaying, setIsPaying] = useState(false);
    const dispatch = useDispatch();
    const payMethod = paymentMethod || PAYMENT_METHODS.CARD;

    const paymentHandler = async (e) => {
        e.preventDefault();
        if(!stripe || !elements) return;


        setIsPaying(true);
        //fetch 
        // const response = await fetch('/.netlify/functions/create-payment-intent', {
        //     method: 'post',
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({ amount: amout * 100}), //multiple
        //   }).then((res) => {
        //     return res.json();
        //   });
        const response = await fetchSecretClient({
            payMethod,
            currency: 'eur',
            amount:  amount
        });




          //get the client_secret
        const {paymentIntent: {client_secret}} = response;
        const paymentResult = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: currentUser? currentUser.dispalyName : 'Guest'
                }
            }
        });


        // const paymentResult = await stripe.confirmIdealPayment(client_secret, {
        //     payment_method: {
        //       ideal: elements.getElement(IdealBankElement),
        //     },
        //     // Return URL where the customer should be redirected after the authorization.
        //     // return_url: window.location.href,
        // })



        setIsPaying(false);

        if(paymentResult.error) {
            alert(paymentResult.error);
        } else {
            if (paymentResult.paymentIntent.status === 'succeeded') {
                dispatch(clearCartAction());
                alert('payment successful');
            }
        }

        // console.log(response);
    }
    return (
        <PaymenntFormContainer>
            <FormContainer onSubmit={ paymentHandler }>
                <CardElement />
                <PaymentButton buttonType={BUTTON_TYPES.inverted} isLoading = {isPaying}>Pay now</PaymentButton>
            </FormContainer>         
        </PaymenntFormContainer>
    )
}

export default PaymentForm;