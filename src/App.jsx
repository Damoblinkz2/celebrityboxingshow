import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Header from "./components/header";

const App = () => {
  return (
    <>
    <Header />
    <Routes>
      <Route path="*" index element={<Home />} />          
      <Route exact path="/home" index element={<Home />} />          
    </Routes>      
    </>
  );
};

export default App;
