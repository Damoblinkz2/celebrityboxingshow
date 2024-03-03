// import { Link } from "react-router-dom";
import "../styles/pages/tickets.scss";
import Livestream from "../components/livestream";
import Inperson from "../components/inperson";
// var lifestream = true;

const Tickets = () => {
  return (
    <>
      <section className="tickets">
        <div className="container">
          {/* <Inperson /> */}
          <Livestream />
        </div>
      </section>
    </>
  );
};

export default Tickets;
