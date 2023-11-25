import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Address from "./components/address";
import Checkout from "./components/checkout";

import Home from "./components/home";
import Login from "./components/Login";
import Payment from "./components/payment";
import SignUp from "./components/Signup";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import AddProduct from "./components/addProduct";
import Orders from "./components/orders";

const promise = loadStripe(
  "pk_test_51KUDBXSE1AGsrDtwyXK8vcHYNkEOofJAP1vV1fRlpZNo93g4o80dZe4IvhAkBXo2ytDciCqqpynwQUXv7plCjezF00G9zyj4sc"
);

function App() {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/address" element={<Address />} />
          <Route
            path="/payment"
            element={
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            }
          />

          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </Container>
    </Router>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default App;
