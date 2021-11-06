import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import login from '../../../images/login.png';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [registerData, setRegisterData] = useState({});

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={2}
          sx={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Register
            </Typography>
            {/* form */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                {...register('email')}
                fullWidth
                label="Your Email"
                type="email"
                variant="outlined"
                size="small"
                margin="normal"
              />
              {errors.email && <span>This field is required</span>}

              <TextField
                {...register('password')}
                fullWidth
                label="Password"
                type="password"
                variant="outlined"
                size="small"
                margin="normal"
              />
              {errors.password && <span>This field is required</span>}

              <TextField
                {...register('password2')}
                fullWidth
                label="Confirm Password"
                type="password"
                variant="outlined"
                size="small"
                margin="normal"
              />
              {errors.password2 && <span>This field is required</span>}

              <Button
                fullWidth
                type="submit"
                variant="contained"
                sx={{ my: 2 }}
              >
                Register
              </Button>
            </form>

            <NavLink to="/login" style={{ textDecoration: 0 }}>
              <Button variant="text">Already Registered? Please Login</Button>
            </NavLink>
          </Grid>
          <Grid item xs={12} md={6}>
            <img style={{ width: '80%' }} src={login} alt="login" />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Register;
