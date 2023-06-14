import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";

const CheckoutForm = () => {
  const [cardError, setCardError] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    console.log(card);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
    } else {
      setCardError("");
      console.log("[PaymentMethod]", paymentMethod);
    }
  };
  return (
    <>
      <h1 className="mb-10 mt-5 text-3xl font-bold text-center">
        Card information here
      </h1>
      <form
        className="card bg-base-100 shadow-xl max-w-xl p-10 mx-auto"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-between mb-5">
          <p className="text-xl">Card Number</p>
          <p className="text-xl">Date & CVC</p>
        </div>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button className="btn btn-info mt-6" type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
      {cardError && (
        <p className="text-red-500 max-w-md  mx-auto">{cardError}</p>
      )}
    </>
  );
};

export default CheckoutForm;
