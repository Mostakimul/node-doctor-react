import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import login from '../../../images/login.png';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
              Login
            </Typography>
            {/* form */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                {...register('userName')}
                fullWidth
                label="User Name"
                type="text"
                variant="outlined"
                size="small"
                margin="normal"
              />
              {errors.userName && <span>This field is required</span>}

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

              <Button
                fullWidth
                type="submit"
                variant="contained"
                sx={{ my: 2 }}
              >
                login
              </Button>
            </form>
          </Grid>
          <Grid item xs={12} md={6}>
            <img style={{ width: '80%' }} src={login} alt="login" />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Login;
