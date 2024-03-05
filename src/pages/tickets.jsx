import { useParams } from "react-router-dom";
import "../styles/pages/tickets.scss";
import Livestream from "../components/livestream";
import Inperson from "../components/inperson";


const Tickets = () => {
  const { ticketType } = useParams();
  
  return (
    <>
      <section className="tickets">
        <div className="container">
          {ticketType === 'inperson' && <Inperson />}
          {ticketType === 'livestream' && <Livestream />}
        </div>
      </section>
    </>
  );
};

export default Tickets;
