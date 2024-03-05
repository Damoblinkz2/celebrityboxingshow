import { Link, useNavigate } from "react-router-dom";
import "../styles/components/header.scss";
import logo from "../assets/images/logo.png";
import livestream from "../assets/icons/livestream.svg";
import ticket from "../assets/icons/ticket-active.svg";
import voteIcon from "../assets/icons/vote-icon.svg";
import homeIcon from "../assets/icons/home.svg";
import profileIcon from "../assets/icons/profile-icon.svg";

const Header = () => {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/");
  }
  return (
    <>
      <section className="header">
        <div className="header-container">
          <div className="logo" onClick={goToHomePage}>
            <img src={logo} alt="" />
            {/* <span className="logo-text">WCNBE</span> */}
          </div>
          {/* <div className="navigation-bar">
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
          </div> */}
          <div className="navigation-bar logged hidden-sm">
            <div>
              <img src={homeIcon} alt="home" />
              <Link to="/">
                <span className="navlinks active">Home</span>
              </Link>
            </div>

            <div>
              <img src={ticket} alt="ticket" />
              <span className="navlinks">Tickets</span>
            </div>

            <div>
              <img src={voteIcon} alt="vote" />
              <span className="navlinks">Vote</span>
            </div>

            <div>
              <img src={livestream} alt="livestream" />
              <span className="navlinks">Stream</span>
            </div>

            <Link to="/login">
              <span className="navlinks profile">
                <img src={profileIcon} alt="profile" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
