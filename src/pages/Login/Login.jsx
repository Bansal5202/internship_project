import { Link, useNavigate } from "react-router-dom";

import { useAuthContext } from "../../Context/auth";
import { Formik } from "formik";
import * as Yup from "yup";
import authService from "../../service/auth.service";

import { toast } from "react-toastify";
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link to="/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Login() {
 
  const Navigate = useNavigate();

  const initialValue = {
    email: "",

    password: "",
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address format")
      .required("email is required"),
    password: Yup.string()
      .min(5, "Password must be 5 character at minimum")
      .required("Password is required"),
  });

  const authContext = useAuthContext();

  const onSubmit = (values) => {
    authService.login(values).then((res) => {
      authContext.setUser(res);
      toast.success("Login successfully");
      Navigate("/");
    });
  };


  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
      
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Formik
          initialValues={initialValue}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              

              id="email"
                value={values.email}
                label="Email Address"
                name="email"
                autoComplete="email"
                onBlur={handleBlur}
                onChange={handleChange}
                helperText={errors.email && touched.email ? errors.email : null}
                
                autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              value={values.password}
              name="password"
              label="Password"
              type="password"
              id="password"
              onBlur={handleBlur}
              onChange={handleChange}
              helperText={
                errors.password && touched.password ? errors.password : null
              }
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
              <Link to="/SignUp" className="text-blue-800">
                {"Don't have an account? Sign Up"}
              </Link>
              </Grid>
            </Grid>
          </Box>
          )}
          </Formik>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}