import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import SignUP from "./pages/signup";
import Login from "./pages/login";
import Header from "./components/header";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="*" index element={<Home />} />
        <Route exact path="/home" index element={<Home />} />
        <Route exact path="/signup" index element={<SignUP />} />
        <Route exact path="/login" index element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
