import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/pages/home.scss";
import logo from "../assets/images/logo.png";
import arrowIcon from "../assets/icons/arrow-down.svg";
import searchIcon from "../assets/icons/searchicon.svg";
import voteIcon from "../assets/icons/vote.svg";
import streamIcon from "../assets/icons/stream.svg";
import spinIcon from "../assets/icons/spin.svg";
import gloves from "../assets/images/gloves.svg";
import wizkidImage from "../assets/images/wizkid.jfif";
import inpersonTicket from "../assets/images/inpersonTicket.svg";
import livestreamTicket from "../assets/images/livestreamTicket.svg";
import phone from "../assets/images/phone.png";
import phoneMobile from "../assets/images/phoneMobile.png";
import laptop from "../assets/images/laptop.png";
import facebook from "../assets/icons/facebook.svg";
import twitter from "../assets/icons/twitter.svg";
import linkedin from "../assets/icons/linkedin.svg";

const Home = () => {
  const navigate = useNavigate();

  const goToLivestream = () => {
    navigate("tickets/livestream");
  };

  const goToInperson = () => {
    navigate("tickets/inperson");
  };

  const [showDropDown, setShowDropDown] = useState(false);

  const DropDown = () => {
    return (
      <div className="dropdoown">
        <div onClick={goToInperson}>&gt; In Person Ticket</div>
        <div onClick={goToLivestream}>&gt; Live-Stream Ticket</div>
      </div>
    );
  };

  const clickDropDown = () => {
    showDropDown ? setShowDropDown(false) : setShowDropDown(true);
  };

  return (
    <>
      <section className="home">
        <div className="home-container">
          <div className="hero-section">
            <h3>The ultimate celebrity showdown.</h3>
            <p>You choose the fighters. They battle in the ring!</p>
          </div>

          <div className="filter">
            <div className="dropdown-container">
              <div className="get-ticket">
                <span onClick={clickDropDown}>
                  Get Ticket <img src={arrowIcon} alt="arrow-down" />
                </span>
                {showDropDown && <DropDown />}
              </div>
            </div>
            <div className="search-container hidden-sm">
              <span className="search-icon">
                <img src={searchIcon} alt="searchIcon" />
              </span>
              <input
                type="text"
                name="search"
                id="search"
                placeholder="search"
              />
            </div>
            <div className="vote-now">
              <span>Vote Now</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-one">
        <div className="section-container">
          <div>
            <img src={gloves} alt="" />
          </div>
          <div className="section-one-text">
            <h3>Watch Them Go head-to-head! </h3>
            <p>Vote for your favourite celebrities!</p>
          </div>

          <div className="features">
            <div className="features-container">
              <div className="feature">
                <div>
                  <img src={voteIcon} alt="voteIcon" />
                </div>
                <div className="feature-text">Vote</div>
              </div>

              <div className="feature">
                <div>
                  <img src={streamIcon} alt="streamIcon" />
                </div>
                <div className="feature-text">Stream</div>
              </div>

              <div className="feature">
                <div>
                  <img src={spinIcon} alt="spinIcon" />
                </div>
                <div className="feature-text">Spin</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-two">
        <div className="section-container">
          <div className="header">
            <h3>Every vote counts. Choose your champion!</h3>
            <p>Vote for your favourite celebrities!</p>
          </div>

          <div className="contents">
            <div className="content-container">
              <div className="content">
                <span className="img">
                  <img src={wizkidImage} alt="wizzy" />
                </span>
              </div>
              <div className="content-text">
                <div className="innerText">WIZKID</div>
                <div className="text">
                  Click here to vote <img src={voteIcon} alt="vote" />
                </div>
              </div>
            </div>

            <div className="content-container">
              <div className="content">
                <span className="img">
                  <img src={wizkidImage} alt="wizzy" />
                </span>
              </div>
              <div className="content-text">
                <div className="innerText">WIZKID</div>
                <div className="text">
                  Click here to vote <img src={voteIcon} alt="vote" />
                </div>
              </div>
            </div>

            <div className="content-container">
              <div className="content">
                <span className="img">
                  <img src={wizkidImage} alt="wizzy" />
                </span>
              </div>
              <div className="content-text">
                <div className="innerText">WIZKID</div>
                <div className="text">
                  Click here to vote <img src={voteIcon} alt="vote" />
                </div>
              </div>
            </div>

            <div className="content-container">
              <div className="content">
                <span className="img">
                  <img src={wizkidImage} alt="wizzy" />
                </span>
              </div>
              <div className="content-text">
                <div className="innerText">WIZKID</div>
                <div className="text">
                  Click here to vote <img src={voteIcon} alt="vote" />
                </div>
              </div>
            </div>

            <div className="content-container">
              <div className="content">
                <span className="img">
                  <img src={wizkidImage} alt="wizzy" />
                </span>
              </div>
              <div className="content-text">
                <div className="innerText">WIZKID</div>
                <div className="text">
                  Click here to vote <img src={voteIcon} alt="vote" />
                </div>
              </div>
            </div>
          </div>

          <div className="section-footer">
            <h3>Every vote counts. Choose your champion!</h3>
            <p>Vote now and unlock the spin wheel!</p>
          </div>
        </div>
      </section>
      <section className="section-three">
        <div className="section-container">
          <div className="content-one-mobile">
           <img src={phone} alt="mobile" className="hidden-lg"/>
          </div>
          <div className="content-one">
            <h3>GET YOUR TICKETS NOW!</h3>
            <p>Be there live or witness the action virtually!</p>
            <img src={inpersonTicket} alt="inperson" onClick={goToInperson} />
            <img
              src={livestreamTicket}
              alt="livestream"
              onClick={goToLivestream}
            />
          </div>
          <div className="content-two">
            <img src={phone} alt="phone" className="hidden-sm" />
          </div>
        </div>
      </section>
      <section className="section-four">
        <div className="section-container">
          <div className="background"></div>
          <div className="content-one">
            <img src={laptop} alt="laptop" className="hidden-sm"/>
          </div>
          <div className="content-two">
            <div className="one">
              <h3>Experience the fight from anywhere! LIVE-STREAM!</h3>
              <p>Get exclusive access when you purchase a ticket!</p>
            </div>
            <div className="two">
              <h3>Book Your LIVE-STREAM Access Now!</h3>
              <p>
                Experience the action from anywhere in the world! Our premium
                live stream offers multiple camera angles and expert commentary.
              </p>
              <div className="btn" onClick={goToLivestream}>Purchase Ticket</div>
            </div>
          </div>
        </div>
      </section>

      <section className="footer">
        <div className="section-container">
          <div className="contents">
            <div className="content">
              <div className="logo">
                <img src={logo} alt="logo" width={100} height={100} />
              </div>

              <p>
                Experience the action from anywhere in the world! Our premium
                live stream offers multiple camera angles and expert commentary.
              </p>

              <div className="social-links hidden-sm">
                <Link>
                  <img src={facebook} alt="facebook" />
                </Link>
                <Link>
                  <img src={twitter} alt="twitter" />
                </Link>
                <Link>
                  <img src={linkedin} alt="linkedin" />
                </Link>
              </div>
            </div>

            <div className="content links">
              <div className="header">Event</div>

              <div className="link">
                <Link>Buy Ticket</Link>
              </div>
              <div className="link">
                <Link>Vote</Link>
              </div>
              <div className="link">
                <Link>Live Stream</Link>
              </div>
            </div>

            <div className="content links">
              <div>Eventick</div>

              <div className="link">
                <Link>About</Link>
              </div>
              <div className="link">
                <Link>Contact Us</Link>
              </div>
              <div className="link">
                <Link>Help Center</Link>
              </div>
              <div className="link">
                <Link>Privacy</Link>
              </div>
              <div className="link">
                <Link>Terms</Link>
              </div>
            </div>

            <div className="content get-notified hidden-sm">
              <div>Get Notified, Stay Updated</div>

              <p>
                Join our mailing list to get notified and u with our newest for
                Event and concert
              </p>

              <div className="get-notified-button">
                <input type="email" placeholder="Enter your email address" />
                <div className="btn">Get Notified</div>
              </div>
            </div>
          </div>

          <div className="copyright">Copyright 2024 WCNBE</div>
        </div>
      </section>
    </>
  );
};

export default Home;
