import { Toaster } from "react-hot-toast";
import Footer from "./Footer";
import Header from "./Header";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div style={{ minHeight: "75vh" }}>
        <Toaster />
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
