import { Link } from "react-router-dom";
import googleicon from "../assets/icons/google-Icon.png";
import facebookicon from "../assets/icons/facebook-Icon.png";
import "../styles/pages/login.scss";

const Login = () => {
  return (
    <>
      <section className="login-page">
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
                  <h1>Login</h1>
                </div>
                <div className="auth">
                  <div className="auth-in">
                    <button className="google-auth-btn">
                      <img src={googleicon} alt="google icon" />
                      <span>Login with Google</span>
                    </button>
                  </div>
                  <div className="auth-in">
                    <button className="facebook-auth-btn">
                      <img src={facebookicon} alt="facebook icon" />
                      <span>Login with Facebook</span>
                    </button>
                  </div>
                </div>
                <div className="separator">
                  <span>OR</span>
                </div>
                <form action="" className="login-form formfield">
                  <div className="input" id="email">
                    <span>Email Address</span>
                    <input type="email" id="email" placeholder="Email" />
                  </div>
                  <div className="input" id="password">
                    <span>Password</span>
                    <input
                      type="password"
                      id="password"
                      placeholder="Password"
                    />
                  </div>
                  <div className="submit" id="submit">
                    <input type="submit" id="btn" value="Login" />
                  </div>
                  <p>
                    Dont have an account?
                    <Link to="/signup">
                      <span> Sign Up</span>
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

export default Login;
