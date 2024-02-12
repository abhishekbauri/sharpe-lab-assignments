import { useState } from "react";
import Layout from "../components/layout/Layout";
import toast from "react-hot-toast";
import { getDatabase, ref, push } from "firebase/database";
import { app } from "../firebase";
import { useNavigate } from "react-router";

const Payment = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [amount, setAmount] = useState("");

  const paymentHandler = (e) => {
    e.preventDefault();

    try {
      // validation
      if (user.trim().length === 0) {
        throw new Error("Card holder name can not be empty");
      } else if (user.trim().length < 3) {
        throw new Error("Please enter a valid name");
      } else if (cardNumber.trim().length === 0) {
        throw new Error("Please enter your card number");
      } else if (cardNumber.trim().length !== 16) {
        throw new Error("Your card number should have exactly 16 digits");
      } else if (amount.length === 0) {
        throw new Error("Amount can not be empty");
      } else if (amount * 1 <= 0 || amount * 1 >= 10000) {
        throw new Error(
          "Invalid amount! Please enter an amount between $1 and $10,000",
        );
      }

      // for firebase
      const db = getDatabase(app);
      const paymentsRef = ref(db, "/payments");

      push(paymentsRef, {
        user: user.trim(),
        card_number: cardNumber.trim(),
        amount: parseFloat(amount),
      });

      // show success message using react-hot-toast library
      toast.success("Payment Successful!");

      // reset the form fields after successful submission
      setUser("");
      setCardNumber("");
      setAmount("");
      navigate("/history");
    } catch (error) {
      toast.error(error.message || "Payment failed..");
    }
  };

  return (
    <Layout>
      <div
        className="row g-0 container-fluid d-flex flex-column justify-content-center align-items-center payment-page "
        style={{ height: "75vh" }}
      >
        <div className="col-md-4 p-4">
          <div className=" p-4 payment-form">
            <h1 className="text-center mb-5 text-uppercase">Payment Details</h1>
            <form onSubmit={paymentHandler}>
              <div className="mb-3">
                <label className="form-label">Card Holder Name</label>
                <input
                  type="text"
                  className="form-control mb-2"
                  id="cardHolderName"
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                />

                <label className="form-label">Card Number</label>
                <input
                  type="text"
                  className="form-control mb-2"
                  id="cardNumber"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                />

                <label className="form-label">Enter Amount</label>
                <input
                  type="number"
                  className="form-control mb-2"
                  id="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100 mb-4 text-uppercase"
              >
                Pay Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Payment;
