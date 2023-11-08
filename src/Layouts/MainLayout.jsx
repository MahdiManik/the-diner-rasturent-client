import PropTypes from "prop-types";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "../Components/Footer/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div className="w-full navbar bg-base-300">
            <Navbar />
          </div>

          {children}
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <Sidebar></Sidebar>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
