import "../styles/pages/home.scss";
import searchIcon from "../assets/icons/searchicon.svg";
import voteIcon from "../assets/icons/vote.svg";
import streamIcon from "../assets/icons/stream.svg";
import spinIcon from "../assets/icons/spin.svg";
import gloves from "../assets/images/gloves.svg";
import wizkidImage from "../assets/images/wizkid.jfif";
import inpersonTicket from "../assets/images/inpersonTicket.svg";
import livestreamTicket from "../assets/images/livestreamTicket.svg";
import phone from "../assets/images/phone.png";
import laptop from "../assets/images/laptop.png";

const Home = () => {
  return (
    <>
      <section className="home">
        <div className="home-container">
          <div className="hero-section">
            <h3>The ultimate celebrity showdown.</h3>
            <p>You choose the fighters. They battle in the ring!</p>
          </div>

          <div className="filter">
            <div className="get-ticket">
              <span>Get Ticket</span>
            </div>
            <div className="search-container">
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
          <div className="content-one">
            <h3>GET YOUR TICKETS NOW!</h3>
            <p>Be there live or witness the action virtually!</p>

            <img src={inpersonTicket} alt="inperson" />
            <img src={livestreamTicket} alt="livestream" />
          </div>
          <div className="content-two">
            <img src={phone} alt="phone" />
          </div>
        </div>
      </section>
      <section className="section-four">
        <div className="section-container">
        <div className="background"></div>      
          <div className="content-one">              
              <img src={laptop} alt="" />            
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
                <div className="btn">Purchase Ticket</div>              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
