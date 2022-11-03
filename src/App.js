import React from 'react';

import Navigation from './components/header/navigation/Navigation';
import MainHeader from './components/header/mainHeader/MainHeader';
import Search from './components/header/search/Search';
import WhyChoose from './components/whyChoose/WhyChoose';
import OurServices from './components/ourServices/OurServices';
import CardSlider from './components/cardSlider/CardSlider';
import Booking from './components/booking/Booking';
import Feedback from './components/feedback/Feedback';
import Footer from './components/footer/Footer';

import './App.css';

function App() {
  return (
    <div className="container">
      <Navigation />
      <MainHeader />
      <Search />
      <WhyChoose />
      <OurServices />
      <CardSlider />
      <Booking />
      <Feedback />
      <Footer />
    </div>      
  );
}

export default App;