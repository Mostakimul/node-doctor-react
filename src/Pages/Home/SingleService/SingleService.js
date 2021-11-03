import React from 'react';
import {Grid} from "@mui/material";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const SingleService = ({service}) => {
  const {name, description, img} = service
  return (
    <Grid item xs={4} sm={4} md={4} >
      <Card sx={{ minWidth: 275, boxShadow: 0, my: 5 }}>
        <CardMedia
          component="img"
          alt={name}
          sx={{width: '30%', mx: 'auto'}}
          image={img}
        />
        <CardContent>
          <Typography variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default SingleService;