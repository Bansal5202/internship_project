import React from "react";
// import { useState } from "react";
import { useStyles } from "./style";
import ValidationErrorMessage from "../../component/validationMessage";
import authService from "../../service/auth.service";
import { toast } from "react-toastify";
import { Formik } from "formik";
import * as Yup from 'yup';
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link, useNavigate } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { FormControl } from "@material-ui/core";
import { Select } from "@material-ui/core";
import { InputLabel } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import "./style";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

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

  const validationSchema=Yup.object().shape({
    email:Yup.string().email("Invalid email address format").required("email is required"),
    password: Yup.string()
    .min(5,"Password must be 5 character at minimum")
    .required("Password is required"),
    confirmPassword : Yup.string()
    .oneOf(
      [Yup.ref("password"),null],
      "Passworrd and Cofirm password must be match."
    ).required("Confirm Password is required."),
    firstName:Yup.string().required("First name is required"),
    lastName:Yup.string().required("Last name is required"),
    roleId:Yup.number().required("Role name is required"),
  })
  // const [firstname, setFirstname] = useState("");
  // const [lastname, setLastname] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const onSubmit = (values) => {
    // delete values.confirmPassword;
    // alert(JSON.stringify(values));
    authService
      .create(values)
      .then((res) => {
        setTimeout(() => {
          toast.success("Succesfully Registered");
        }, 2000);

        Navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography><Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
          {({values, touched, errors, handleChange, handleSubmit}) => (
            <form
        
              className={classes.form}
              onSubmit={handleSubmit}
              noValidate
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <TextField
                    autoComplete="fname"
                    name="firstName"
                    variant="outlined"
                    value={values.firstName}
                    required
                    fullWidth
                    onChange={handleChange}
                    id="first-name"
                    label="First Name"
                    autoFocus
                  />
                  <div className="text-red-600">
                  {errors.firstName && touched.firstName && errors.firstName}
                </div>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    value={values.lastName}
                    onChange={handleChange}
                    id="last-name"
                    label="Last Name"
                    name="lastName"
                    autoComplete="lname"
                  />
                   <div className="text-red-600">
                  {errors.lastName && touched.lastName && errors.lastName}
                </div>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Roles</InputLabel>
                    <Select
                      name="roleId"
                      id={"roleId"}
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
                    variant="outlined"
                    required
                    fullWidth
                    value={values.email}
                    onChange={handleChange}
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
                    variant="outlined"
                    required
                    fullWidth
                    value={values.password}
                    onChange={handleChange}
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
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
                color="primary"
                className={classes.submit}
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
            </form>
          )}
        </Formik>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
