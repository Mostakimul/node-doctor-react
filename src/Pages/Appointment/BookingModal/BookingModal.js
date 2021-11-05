import {
  Backdrop,
  Box,
  Button,
  Fade,
  Modal,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({ bookingOpen, handleClose, data, date }) => {
  const { name, time } = data;
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={bookingOpen}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={bookingOpen}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {name}
            </Typography>
            <TextField
              disabled
              fullWidth
              label="Booking Time"
              variant="outlined"
              defaultValue={time}
              size="small"
              margin="normal"
            />
            <TextField
              fullWidth
              label="Your Name"
              variant="outlined"
              size="small"
              margin="normal"
            />
            <TextField
              fullWidth
              label="Your Email"
              variant="outlined"
              size="small"
              margin="normal"
            />
            <TextField
              fullWidth
              label="Your Phone Number"
              variant="outlined"
              size="small"
              margin="normal"
            />
            <TextField
              disabled
              fullWidth
              label="Date"
              variant="outlined"
              defaultValue={date.toDateString()}
              size="small"
              margin="normal"
            />

            <Button variant="contained">Book Now</Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default BookingModal;
