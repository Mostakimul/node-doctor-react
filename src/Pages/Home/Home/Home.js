import React from 'react';
import Navigation from "../../Shared/Navigation/Navigation";
import Services from "../Services/Services";
import AppointmentBanner from "../AppintmentBanner/AppointmentBanner";

const Home = () => {
  return (
    <div>
      <Navigation/>
      <Services/>
      <AppointmentBanner/>
    </div>
  );
};

export default Home;