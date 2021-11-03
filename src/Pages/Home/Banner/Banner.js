import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import bg from '../../../images/bg.png';
import chair from '../../../images/chair.png';

const Banner = () => {
  return (
    <Box
      sx={{
        background: `url(${bg})`,
        backgroundAttachment: 'fixed',
        backgroundColor: 'rgba(19, 29, 74, 0.9)',
        backgroundBlendMode: 'darken ,  luminosity',
        height: '90vh',
      }}
    >
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={2}
            sx={{
              height: '90vh',
              textAlign: 'left',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Grid item xs={12} md={5}>
              <Typography
                sx={{ fontSize: '3rem', color: 'white' }}
                variant="h1"
              >
                Your New Smile <br />
                Starts here
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: '#CFCFCF', fontWeight: '300' }}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
                nostrum modi aliquam ducimus quas magni ut libero quos fugit
                facilis!
              </Typography>
              <Button sx={{ my: '2rem' }} variant="contained" color="info">
                Get Appointment
              </Button>
            </Grid>
            <Grid item xs={12} md={7} sx={{ textAlign: 'center' }}>
              <img style={{ width: '85%' }} src={chair} alt="Chair" />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;
