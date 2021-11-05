import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Booking from '../Booking/Booking';

const appData = [
  { id: 1, name: 'Pediatric Dental', time: '06.00 PM - 07.00', space: 10 },
  { id: 2, name: 'Oral Surgery', time: '05.00 PM - 07.00', space: 7 },
  { id: 3, name: 'Pediatric Dental', time: '06.00 PM - 07.00', space: 8 },
  { id: 4, name: 'Pediatric Dental', time: '06.00 PM - 07.00', space: 8 },
  { id: 5, name: 'Pediatric Dental', time: '06.00 PM - 07.00', space: 8 },
  { id: 6, name: 'Pediatric Dental', time: '06.00 PM - 07.00', space: 8 },
];

const AvailableAppointment = ({ date }) => {
  return (
    <Box>
      <Typography variant="h4" sx={{ py: 5 }}>
        Available Appointment: {date.toDateString()}
      </Typography>
      <Container>
        <Grid container spacing={2}>
          {appData.map((data) => (
            <Booking key={data.id} data={data}></Booking>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AvailableAppointment;
