import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ data, date }) => {
  const { name, time, space } = data;
  const [bookingOpen, setBookingOpen] = React.useState(false);
  const handlebookingOpen = () => setBookingOpen(true);
  const handleClose = () => setBookingOpen(false);

  return (
    <>
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
          <Button onClick={handlebookingOpen} variant="contained">
            Book Appointment
          </Button>
        </Paper>
      </Grid>
      <BookingModal
        data={data}
        date={date}
        bookingOpen={bookingOpen}
        handleClose={handleClose}
      ></BookingModal>
    </>
  );
};

export default Booking;
