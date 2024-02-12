import { Route, Routes } from "react-router";
import Home from "./page/Home";
import Payment from "./page/Payment";
import History from "./page/History";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </>
  );
}

export default App;
