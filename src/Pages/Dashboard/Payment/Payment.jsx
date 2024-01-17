import { loadStripe } from '@stripe/stripe-js';
import SharedTitle from '../../../components/SharedTitle/SharedTitle'
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from './CheckOutForm';

const Payment = () => {
    const stripePromise = loadStripe("pk_test_51OZPFzEaEs56zL8lwNlSY8x97PZiqHve1X9kzctzovzYzaqtd4JBvzY4PqDplmi1uuJR5yZ5Edcw7ctndN6DtVY500Y2eUTDeV")
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