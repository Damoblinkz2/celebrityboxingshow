import { Footer } from "./home";
import "../styles/pages/about.scss";
import img1 from "../assets/images/image-1.png";
import img2 from "../assets/images/image-2.png";
import img3 from "../assets/images/image-3.png";
const About = () => {
  return (
    <>
      <section className="about">
        <div className="container first-div">
          <h1 className="about-title">About Us</h1>
          <div className="container-inner-1">
            <div className="row">
              <div className="col-md-4 col-sm-12 img-div">
                <img src={img1} alt="" />
              </div>
              <div className="col-md-8 col-sm-12 p-div">
                <p>
                  <b>World celebrity novice boxing entertainment</b> is a
                  company that specializes in organising boxing tournament that
                  features celebrities and public figures.
                </p>
                <p>
                  The team behind the company has extensive experience in event
                  management, marketing and sport entertainment. The goal is to
                  provide high quality events that are both entertaining and
                  inspiring while promoting positive change on a global scale.
                </p>
              </div>
              <div className="middle">
                <img src={img2} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="container-inner-2 container-fluid second-div">
          <div className="container">
            <h2 className="event-title">Glitz & Gloves</h2>
            <div className="row">
              <div className="col-md-8 col-sm-12 p-div">
                <p>
                  <b>Glitz & Gloves</b> is a boxing tournament organized by{" "}
                  <b>WCNBE</b> that aims to promote boxing, encourage health and
                  fitness, promote unity among celebrities, raise awareness on
                  social issues, and create career development opportunities.
                </p>
                <p>
                  The event targets a diverse audience of boxing enthusiasts,
                  celebrity fans and the socially conscious consumers. The
                  organizers plan to achieve their goals throughout strategic
                  partnership, targeted marketing, and engaging programming. The
                  event aims to become a premier event in the entertainment and
                  sport industry globally.
                </p>
              </div>
              <div className="col-md-4 col-sm-12 img-div">
                <img src={img3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
