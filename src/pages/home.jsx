import "../styles/pages/home.scss";
import searchIcon from "../assets/icons/searchicon.svg";
import voteIcon from "../assets/icons/vote.svg";
import streamIcon from "../assets/icons/stream.svg";
import spinIcon from "../assets/icons/spin.svg";

const Home = () => {
  return (
    <>
      <section className="home">
        <div className="container">
          <div className="hero-section">
            Experience More, Engage More Vote & Watch Live!
          </div>

          <div className="search-container">
            <span className="search-icon">
                <img src={searchIcon} alt="searchIcon" />
            </span>
            <input type="text" name="search" id="search" placeholder="search" />
          </div>

          <div className="features">
            <div className="features-container">
                <div className="feature">
                    <div>
                        <img src={voteIcon} alt="voteIcon" />
                    </div>
                    <div className="feature-text">
                        Vote
                    </div>
                </div>

                <div className="feature">
                    <div>
                        <img src={streamIcon} alt="streamIcon" />
                    </div>
                    <div className="feature-text">
                        Stream
                    </div>
                </div>

                <div className="feature">
                    <div>
                        <img src={spinIcon} alt="spinIcon" />
                    </div>
                    <div className="feature-text">
                        Spin
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
