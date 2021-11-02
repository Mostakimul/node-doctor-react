import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {Container} from "@mui/material";
import SingleService from "../SingleService/SingleService";
import fluoride from "../../../images/fluoride.png";
import whitening from "../../../images/whitening.png";
import cavity from "../../../images/cavity.png";
const Services = () => {

  const services = [
    {name: 'Fluride Treatment',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    img: fluoride},
    {name: 'Whitening Treatment',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      img: whitening},
    {name: 'Cavity Treatment',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      img: cavity}
  ]

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {services.map((service) => (
            <SingleService key={service.img} service={service}/>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;