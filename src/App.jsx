import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Home from "./pages/home";
import SignUP from "./pages/signup";
import Login from "./pages/login";
import Tickets from "./pages/tickets";
import About from "./pages/about";
import Team from "./pages/team";
// import Footer from "./components/footer";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="*" index element={<Home />} />
        <Route exact path="/home" index element={<Home />} />
        <Route exact path="/signup" index element={<SignUP />} />
        <Route exact path="/login" index element={<Login />} />
        <Route exact path="/about" index element={<About />} />
        <Route exact path="/tickets/:ticketType" index element={<Tickets />} />
        <Route exact path="/team" index element={<Team />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
};

export default App;
