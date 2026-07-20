/* global fetchAPI, submitAPI */
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { Routes, Route, useNavigate } from "react-router-dom";
import { useReducer } from "react";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Reservations from "./pages/Reservations";
import Order from "./pages/Order";
import Login from "./pages/Login";
import ConfirmedBooking from "./pages/ConfirmedBooking";

export function initializeTimes() {
  if (typeof fetchAPI === "function") {
    return fetchAPI(new Date());
  }

  return ["17:00", "18:00", "19:00", "20:00"];
}

export function updateTimes(state, action) {
  if (action.type === "date_changed") {
    if (typeof fetchAPI === "function") {
      return fetchAPI(new Date(action.date));
    }
  }

  return state;
}

function App() {
  const navigate = useNavigate();
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes,
  );

  function submitForm(formData) {
    const success = submitAPI(formData);

    if (success) {
      navigate("/confirmed-booking");
    }
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route
          path="/reservations"
          element={
            <Reservations
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/order" element={<Order />} />
        <Route path="/login" element={<Login />} />
        <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
