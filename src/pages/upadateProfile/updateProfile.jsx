import React from 'react'
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../State/Slice/authSlice";
import userService from "../service/user.service";
import shared from "../utils/shared";
import { Button, FormControl, TextField, Typography } from "@mui/material";
import { Formik } from "formik";

function updateProfile() {
    const Navigate = useNavigate();

    const dispatch = useDispatch();
    const authData = useSelector((state) => state.auth.user);
    const initialValuestate = {
      firstName: authData.firstName,
      lastName: authData.lastName,
      email: authData.email,
      newPassword: "",
      confirmPassword: "",
    };
    const [updatePassword, setUpdatePassword] = useState(false);
  return (
    <div>
      
    </div>
  )
}

export default updateProfile
