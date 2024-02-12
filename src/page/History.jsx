/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { app } from "../firebase";
import Layout from "../components/layout/Layout";
import toast from "react-hot-toast";

const History = () => {
  const [transaction, setTransaction] = useState();

  const getData = () => {
    try {
      // fetch data from firebase
      const db = getDatabase(app);
      const transactionRef = ref(db, "payments");

      onValue(transactionRef, (snapshot) => {
        let fetchedData = [];
        snapshot.forEach((childSnapshot) => {
          fetchedData.push({ ...childSnapshot.val(), id: childSnapshot.key });
        });

        setTransaction(fetchedData);
      });
    } catch (error) {
      toast.error(error.message || "Payment failed..");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Layout>
      <div className="container-fluid">
        <div className=" d-flex  justify-content-center gap-4 row-gap-4 flex-wrap align-items-start mt-3 pb-3">
          {transaction?.map((ele) => (
            <div
              className="  bg-secondary rounded-4 p-2 ps-3"
              key={ele.id}
              style={{ width: "18rem" }}
            >
              <p className="text-capitalize text-light">
                User: <span className="fw-bold">{ele.user}</span>
              </p>
              <p className="text-light">Amount: {ele.amount}</p>
              <p className="text-light">
                {ele.card_number.slice(-4).padStart(16, "*")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default History;
