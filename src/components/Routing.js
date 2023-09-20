import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage.js";
import About from "./sections/homePages/About.js";
import Reservations from "./pages/BookingPage.js";
import Order from "./pages/Order.js";
import Login from "./pages/Login.js";
import Confirmation from "./pages/Confirmation.js";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/reservations" element={<Reservations />}></Route>
      <Route path="/order" element={<Order />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/confirmation" element={<Confirmation />}></Route>
    </Routes>
  );
};

export default Routing;
