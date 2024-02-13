import "../styles/pages/home.scss";
import searchIcon from "../assets/icons/searchicon.svg";

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
        </div>
      </section>
    </>
  );
};

export default Home;
