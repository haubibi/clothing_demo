

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
    const [isPaying, setIsPaying] = useState({card: false, ideal: false});
    const dispatch = useDispatch();
    // const payMethod = paymentMethod || PAYMENT_METHODS.CARD;


    const paymentResultFn = async ({client_secret, payMethod})=> {
        switch (payMethod) {
            case PAYMENT_METHODS.IDEAL:
                return await stripe.confirmIdealPayment(client_secret, {
                    payment_method: {
                        ideal: elements.getElement(IdealBankElement),
                        billing_details: {
                            name: currentUser? currentUser.dispalyName : 'Guest'
                        },
                    },
                    return_url: window.location.href,
                    // return_url: navigate(-1),
                });  
            case PAYMENT_METHODS.CARD:
                return await stripe.confirmCardPayment(client_secret, {
                    payment_method: {
                        card: elements.getElement(CardElement),
                        billing_details: {
                            name: currentUser? currentUser.dispalyName : 'Guest'
                        },
                    }
                });  
            default: break;
                
        }
    };


    const paymentHandler = async (e) => {
        e.preventDefault();
        if(!stripe || !elements) return;
        // setIsPaying(true);
        const payMethod = e.target.name;

        setIsPaying({...isPaying, [payMethod]: true});
        //fetch 
        const response = await fetchSecretClient({
            payMethod,
            currency: 'eur',
            amount:  amount
        });
          //get the client_secret
        const {paymentIntent: {client_secret}} = response;

        const paymentResult = await paymentResultFn({client_secret, payMethod});
      
        e.target.isLoading = false;
        // setIsPaying(false);
        setIsPaying({...isPaying, [payMethod]: false});
        if(paymentResult.error) {
            alert(paymentResult.error);
        } else {
            if (paymentResult.paymentIntent.status === 'succeeded') {
                dispatch(clearCartAction());
                alert('payment successful');
            }
        }
        // onSubmit={ paymentHandler }
        // console.log(response);
    }

    return (
        <PaymenntFormContainer>
            <FormContainer >
                {/* {
                    payMethod === PAYMENT_METHODS.CARD? <CardElement />:<CardElement />
                } */}
                <CardElement />
                <PaymentButton type = "submit" buttonType={BUTTON_TYPES.inverted} isLoading = {isPaying[PAYMENT_METHODS.CARD]} name = {PAYMENT_METHODS.CARD} onClick = {paymentHandler}>Pay with card</PaymentButton>
                <IdealBankElement />
                <PaymentButton type = "submit" buttonType={BUTTON_TYPES.inverted} isLoading = {isPaying[PAYMENT_METHODS.IDEAL]}   name = {PAYMENT_METHODS.IDEAL} onClick = {paymentHandler}>Pay with ideal</PaymentButton>
            </FormContainer>         
        </PaymenntFormContainer>
    )
}

export default PaymentForm;