import Button from "../components/buttons/Button";
import Layout from "../components/layout/Layout";
import payment_url from "./../assets/images/payment.png";

const Home = () => {
  return (
    <Layout>
      <div className="container-fluid">
        <div
          className="row d-flex flex-wrap-reverse p-2"
          style={{ minHeight: "75vh" }}
        >
          <div className="col-md-6 d-flex flex-column p-2 justify-content-center align-items-center text-style">
            <h1 className="text-capitalize  ">make your</h1>
            <h1 className="text-capitalize ">
              <span>online</span>
            </h1>
            <h1 className="text-capitalize mb-5 ">payments </h1>
            <Button title="pay now" url="/payment" />
            <div className="inner-box"></div>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center p-2">
            <img src={payment_url} alt="payment image" className="img-fluid" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
