import "./App.css";
import Header from "./components/Header";
import Main from "./Main";
import Footer from "./components/Footer";

import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Menu from "./pages/Menu";
import Reservations from "./pages/Reservations";
import Order from "./pages/Order";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/order" element={<Order />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
