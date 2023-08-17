// import { useState } from "react";


import authService from "../../service/auth.service";
import { toast } from "react-toastify";
import { Formik } from "formik";
import * as Yup from "yup";

import { Link, useNavigate } from "react-router-dom";

import * as React from "react";
import { FormControl } from "@mui/material";
import { InputLabel } from "@mui/material";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {
  const Navigate = useNavigate();

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    roleId: 0,
    password: "",
    confirmPassword: "",
  };

  const roleList = [
    {
      id: 2,
      name: "Buyer",
    },
    {
      id: 3,
      name: "Seller",
    },
  ];

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address format")
      .required("email is required"),
    password: Yup.string()
      .min(5, "Password must be 5 character at minimum")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf(
        [Yup.ref("password"), null],
        "Passworrd and Cofirm password must be match."
      )
      .required("Confirm Password is required."),
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    roleId: Yup.number().required("Role name is required"),
  });
  // const [firstname, setFirstname] = useState("");
  // const [lastname, setLastname] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const onSubmit = (values) => {
    delete values.confirmPassword;
    // alert(JSON.stringify(values));
    console.log(values);
    authService
      .create(values)
      .then((res) => {
        console.log(res);
        setTimeout(() => {
          toast.success("Succesfully Registered");
        }, 2000);

        Navigate("/Login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
      
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ values, touched, errors, handleChange, handleSubmit }) => (
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <TextField
                      autoComplete="given-name"
                      name="firstName"
                      required
                      fullWidth
                      label="First Name"
                      autoFocus
                      value={values.firstName}
                      onChange={handleChange}
                      id="first-name"
                    />
                    <div className="text-red-600">
                      {errors.firstName &&
                        touched.firstName &&
                        errors.firstName}
                    </div>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <TextField
                      required
                      fullWidth
                      onChange={handleChange}
                      value={values.lastName}
                      id="last-name"
                      label="Last Name"
                      name="lastName"
                      autoComplete="family-name"
                    />
                    <div className="text-red-600">
                      {errors.lastName && touched.lastName && errors.lastName}
                    </div>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Roles*
                      </InputLabel>
                      <Select
                        name="roleId"
                        id={"roleId"}
                        label="Roles*"
                        value={values.roleId}
                        onChange={handleChange}
                      >
                        {roleList.length > 0 &&
                          roleList.map((role) => (
                            <MenuItem value={role.id} key={"name" + role.id}>
                              {role.name}
                            </MenuItem>
                          ))}
                      </Select>
                      <div className="text-red-600">
                        {errors.roleId && touched.roleId && errors.roleId}
                      </div>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                  <FormControl fullWidth>
                    <TextField
                      required
                      fullWidth
                      onChange={handleChange}
                      value={values.email}
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                    />
                    <div className="text-red-600">
                      {errors.email && touched.email && errors.email}
                    </div>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                  <FormControl fullWidth>
                    <TextField
                      required
                      fullWidth
                      onChange={handleChange}
                      value={values.password}
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                    />
                    <div className="text-red-600">
                      {errors.password && touched.password && errors.password}
                    </div>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        value={values.confirmPassword}
                        onChange={handleChange}
                        name="confirmPassword"
                        label="confirm Password"
                        type="password"
                        id="confirm-password"
                        autoComplete="current-password"
                      />
                      <div className="text-red-600">
                        {errors.confirmPassword &&
                          touched.confirmPassword &&
                          errors.confirmPassword}
                      </div>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox value="allowExtraEmails" color="primary" />
                      }
                      label="I want to receive inspiration, marketing promotions and updates via email."
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link to="/Login" className="text-blue-800">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            )}
          </Formik>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
