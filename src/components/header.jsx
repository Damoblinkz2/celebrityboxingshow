import "../styles/components/header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <section className="header">
        <div className="container">
          <div className="logo">
            <img src="" alt="" />
            <span className="logo-text">WCNBE</span>
          </div>
          <div className="nav">
            <Link to="/">
              <span className="navlinks">Home</span>
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
