import { Link } from "react-router-dom";
import googleicon from "../assets/icons/google-Icon.png";
import facebookicon from "../assets/icons/facebook-Icon.png";
import "../styles/pages/signup.scss";

const SignUP = () => {
  return (
    <>
      <section className="signup-page">
        <div className="container-fluid">
          <div className="container-row row">
            <div className="hero-img item  col-md-12 col-lg-4">
              <div className="hero-img-title">
                <h1>The ultimate celebrity showdown</h1>
                <p>You choose the fighter, they battle in the ring</p>
              </div>
            </div>
            <div className="form-container item col-md-12 col-lg-8">
              <div className="form">
                <div className="title">
                  <h1>Create Account</h1>
                </div>
                <div className="auth">
                  <div className="auth-in">
                    <button className="google-auth-btn">
                      <img src={googleicon} alt="google icon" />
                      <span>Signup with Google</span>
                    </button>
                  </div>
                  <div className="auth-in">
                    <button className="facebook-auth-btn">
                      <img src={facebookicon} alt="facebook icon" />
                      <span>Signup with Facebook</span>
                    </button>
                  </div>
                </div>
                <hr />
                <form action="" className="signup-form formfield">
                  <div className="input" id="name">
                    <span>Full Name</span>
                    <input
                      type="text"
                      id="fullname"
                      placeholder="First & Last name"
                    />
                  </div>
                  <div className="input" id="email">
                    <span>Email Address</span>
                    <input type="email" id="email" placeholder="Email" />
                  </div>
                  <div className="input" id="password">
                    <span>Password</span>
                    <input
                      type="password"
                      id="password"
                      placeholder="Create Password"
                    />
                  </div>
                  <div className="submit" id="submit">
                    <input type="submit" id="btn" value="Create Account" />
                  </div>
                  <p>
                    Already have an account?
                    <Link to="/login">
                      <span> Log In</span>
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUP;
