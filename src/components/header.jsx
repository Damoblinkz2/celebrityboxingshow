import "../styles/components/header.scss";

const Header = () => {
  return (
    <>
      <section className="header">
        <div className="container">
          <div className="logo">
            <img src="" alt="" />
          </div>
          <div className="nav">
            <span className="navlinks">Home</span>

            <span className="navlinks">News</span>

            <span className="navlinks">About Us</span>

            <span className="navlinks">Contact Us</span>

            <span className="navlinks login">Log In</span>

            <span className="navlinks signup">Sign Up</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
