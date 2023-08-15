import "./App.css";
import Header from "./component/Header/Header";
import Pages from "./pages/Pages";

import { AuthWrapper } from "./Context/auth";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import SignUp from "./pages/signup/signUp";
import About from "./pages/About/About";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import AppWrapper from "./component/global/AppWrapper";
function App() {
  return (
   <BrowserRouter>
   <AuthWrapper>
    <AppWrapper>
    <Routes>
        <Route path="/" element={<Header />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
        <Route path="/About" element={<About />}></Route>
      </Routes>
    <ToastContainer/>
    </AppWrapper>
   </AuthWrapper>
   </BrowserRouter>
  );
}

export default App;