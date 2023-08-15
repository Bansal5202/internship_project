import React, { useContext } from "react";
import "./Home.css";
import Login from "../Login/Login";
import SignUp from "../signup/signUp";
import Header from "../../component/Header/Header";
import { Context } from "../../Context/ContextProvider";

function Home() {
  const { isLogin, form } = useContext(Context);
  return (
    <>
      <div className="home-page">
        <div className="home-page_header">
          <Header />
        </div>
        <div className="home-page_main-container">
          <div className="home-page_forms">
            {form ? "" : isLogin ? <Login /> : <SignUp />}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;