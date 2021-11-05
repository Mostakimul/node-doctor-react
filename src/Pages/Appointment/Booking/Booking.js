import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const Booking = ({ data }) => {
  const { name, time, space } = data;
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Paper sx={{ py: 4 }} elevation={3}>
        <Typography
          sx={{ color: 'info.main', fontWeight: '600' }}
          variant="h5"
          gutterBottom
        >
          {name}
        </Typography>
        <Typography variant="h6" gutterBottom>
          {time}
        </Typography>
        <Typography variant="caption" gutterBottom component="div">
          {space} Spaces Available
        </Typography>
        <Button variant="contained">Book Appointment</Button>
      </Paper>
    </Grid>
  );
};

export default Booking;
