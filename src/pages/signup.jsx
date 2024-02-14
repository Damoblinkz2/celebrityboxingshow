import formHero from "../assets/images/hero-form.png";
import "../styles/pages/signup.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const SignUP = () => {
  return (
    <>
      <section className="signup-page">
        <div className="container">
          <div className="container-row row">
            <div className="form-container item col-md-12 col-lg-6">
              <div className="form">
                <div className="title">
                  <h1>Create Account</h1>
                </div>
                <form action="" className="signup-form formfield">
                  <span>Enter Details Below</span>
                  <div className="input" id="name">
                    <input
                      type="text"
                      id="fullname"
                      placeholder="First & Last name"
                    />
                  </div>
                  <div className="input" id="email">
                    <input type="email" id="email" placeholder="Email" />
                  </div>
                  <div className="input" id="password">
                    <input
                      type="password"
                      id="password"
                      placeholder="Create Password"
                    />
                  </div>
                  <div className="input" id="password-confirm">
                    <input
                      type="password"
                      id="confirm-password"
                      placeholder="Confirm Password"
                    />
                  </div>
                  <div className="input" id="submit">
                    <input type="submit" id="btn" value="Create Account" />
                  </div>
                </form>
              </div>
            </div>
            <div className="hero-img item  col-md-12 col-lg-6">
              <img src={formHero} alt="hero" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUP;
