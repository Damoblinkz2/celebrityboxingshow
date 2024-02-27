import { Link } from "react-router-dom";
import "../styles/components/header.scss";
import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <>
      <section className="header">
        <div className="header-container">
          <div className="logo">
            <img src={logo} alt="" />
            {/* <span className="logo-text">WCNBE</span> */}
          </div>
          <div className="navigation-bar">
            <Link to="/">
              <span className="navlinks active">Home</span>
            </Link>

            <span className="navlinks">News</span>

            <span className="navlinks">About Us</span>

            <span className="navlinks">Contact Us</span>

            <Link to="/login">
              <span className="navlinks login">Log In</span>
            </Link>

            <Link to="/signup">
              <span className="navlinks signup">Sign Up</span>
            </Link>
          </div>
        </div>
      </section>     
    </>
  );
};

export default Header;
