import React from "react";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useLocation } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
  const location = useLocation();
  const { price } = location.state;
  const total = parseFloat(price.toFixed(2));
  return (
    <div>
      {/* Heading */}
      <div className="max-w-lg mx-auto mt-10 mb-10 text-center">
        <p className="text-orange-400 uppercase mb-2 font-semibold">
          please pay
        </p>
        <h1 className="text-5xl font-bold">Payment</h1>
        <p className="py-6">Payment done means , you're ahead of others..</p>
      </div>
      {/* Body */}
      <Elements stripe={stripePromise}>
        <CheckoutForm price={total}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
