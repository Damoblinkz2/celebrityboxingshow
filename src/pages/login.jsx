import formHero from "../assets/images/hero-form.png";
import "../styles/pages/login.scss";

const Login = () => {
  return (
    <>
      <section className="login-page">
        <div className="container">
          <div className="container-row row">
            <div className="form-container item col-md-12 col-lg-6">
              <div className="form">
                <div className="title">
                  <h1>Welcome Back!</h1>
                  <span>Enter Details Below</span>
                </div>
                <form action="" className="login-form formfield">
                  <div className="input" id="email">
                    <input type="email" id="email" placeholder="Email" />
                  </div>
                  <div className="input" id="password">
                    <input
                      type="password"
                      id="password"
                      placeholder="Password"
                    />
                  </div>
                  <div className="input" id="submit">
                    <input type="submit" id="btn" value="Login" />
                  </div>
                  <span>
                    <a href="#" className="forgot-password">
                      Forgot Password?
                    </a>
                  </span>
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

export default Login;
