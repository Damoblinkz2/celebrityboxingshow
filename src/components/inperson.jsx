import inperson from "../assets/images/inpersonTicket.svg";
import plus from "../assets/images/add-button.svg";
import minus from "../assets/images/remove-button.svg";
import banner from "../assets/images/backgroundHome.png";
import { useEffect, useState } from "react";

const Inperson = () => {
  const [count, setCount] = useState(1);

  //increase
  const up = () => {
    setCount(count + 1);
  };

  //increase
  const down = () => {
    if (count > 1) setCount(count - 1);
  };

  useEffect(() => {
    const price = 20000;
    var ticketPrice = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "NGN",
    }).format(price);
    var ticketNo = document.getElementById("ticketNo");
    var ticketNumber = document.getElementById("ticketNumber");
    var eachticketPrice = document.getElementById("ticketprice");
    var totalPrice = document.getElementById("total-price");

    ticketNo.innerText = count;
    ticketNumber.innerText = `${count}x - Inperson Ticket`;
    eachticketPrice.innerText = ticketPrice;
    totalPrice.innerText = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "NGN",
    }).format(price * count);
  });

  return (
    <div className="row">
      <div className="col-lg-9">
        <div className="container inner-container">
          <div className="ticket-field">
            <div className="upper">
              <div className="ticket-img">
                <img src={inperson} alt="inperson img" />
              </div>
              <div className="ticket-count">
                <div className="ticket-count-upper">
                  <p>Ticket</p>
                  <p>Quantity</p>
                </div>
                <div className="ticket-count-lower">
                  <div className="ticket-count-1">
                    <p className="p-ticket-type">In Person Ticket</p>
                    <p id="ticketprice">#20,000.00</p>
                  </div>
                  <div className="ticket-count-2">
                    <div className="counter-div">
                      <span onClick={down}>
                        <img src={minus} alt="" />
                      </span>
                      <span id="ticketNo"></span>
                      <span onClick={up}>
                        <img src={plus} alt="" />
                      </span>
                    </div>
                  </div>
                  <span className="change-ticket-type">livestream-ticket?</span>
                </div>
              </div>
            </div>
            <hr />
            <div className="lower">
              <form action="#" className="formfield">
                <div className="input" id="name">
                  <span>Full Name</span>
                  <input
                    type="text"
                    id="text"
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="input" id="email">
                  <span>Email</span>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="submit" id="submit">
                  <input type="submit" id="btn" value="Proceed to checkout" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 inner-container-2">
        <div className="img2">
          <img src={banner} alt="" />
        </div>
        <div className="summary-side">
          <p className="title">Order Summary</p>
          <div className="price-calc">
            <div className="ticket-pricing">
              <p id="ticketNumber">1X Inperson Ticket</p>
              <p id="ticketprice">#20,000</p>
            </div>
            <hr />
            <div className="total-pricing">
              <p>Total:</p>
              <p id="total-price"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inperson;
