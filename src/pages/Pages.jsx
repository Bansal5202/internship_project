import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Login from "./Login/Login";
import SignUp from "./signup/signUp";
import React from "react";
import Header from "../component/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, Button, Container, Divider } from "@material-ui/core";

function Pages() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Header />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
        <Route path="/About" element={<About />}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default Pages;
