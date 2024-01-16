import { loadStripe } from '@stripe/stripe-js';
import SharedTitle from '../../../components/SharedTitle/SharedTitle'
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from './CheckOutForm';

const Payment = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
    return (
        <div>
            <SharedTitle heading={"PAYMENT"} subheading={"Payment your Order here"}></SharedTitle>
            <div className="">
                <Elements stripe={stripePromise}>
                    <CheckOutForm></CheckOutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;