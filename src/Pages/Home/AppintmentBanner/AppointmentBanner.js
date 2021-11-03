import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import bg from '../../../images/appointment-bg.png';
import doctor from '../../../images/doctor.png';

const AppointmentBanner = () => {
  return (
    <Box
      sx={{
        background: `url(${bg})`,
        backgroundAttachment: 'fixed',
        backgroundColor: 'rgba(19, 29, 74, 0.9)',
        backgroundBlendMode: 'darken ,  luminosity',
        my: '1.5rem',
      }}
    >
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <img
                style={{ width: '85%', marginTop: '-9rem' }}
                src={doctor}
                alt=" Doctor"
              />
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              sx={{
                textAlign: 'left',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}
            >
              <Box>
                <Typography
                  variant="h6"
                  sx={{ color: 'info.main', my: '1.5rem' }}
                >
                  Appointment
                </Typography>
                <Typography variant="h4" sx={{ color: 'whitesmoke' }}>
                  Make an Appointment Today
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ color: 'whitesmoke', fontWeight: '300' }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Autem facere placeat rem reprehenderit tempore ut!
                </Typography>
                <Button sx={{ my: '2rem' }} variant="contained" color="info">
                  Learn More
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default AppointmentBanner;
