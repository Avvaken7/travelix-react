import React from 'react';

import Navigation from './components/header/navigation/Navigation';
import MainHeader from './components/header/mainHeader/MainHeader';
import Search from './components/header/search/Search';
import WhyChoose from './components/whyChoose/WhyChoose';
import OurServices from './components/ourServices/OurServices';
import Slider from './components/slider/Slider';
import Booking from './components/booking/Booking';
import Feedback from './components/feedback/Feedback';
import Footer from './components/footer/Footer';

import './App.css';

function App() {
  return (
    <>
      <Navigation />
      <MainHeader />
      <Search />
      <WhyChoose />
      <OurServices />
      <Slider />
      <Booking />
      <Feedback />
      <Footer />
    </>      
  );
}

export default App;