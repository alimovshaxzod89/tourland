import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Swiper from "./components/Swiper";
import Destinations from "./components/Destinations";
import AboutTrips from "./components/AboutTrips";
import Services from "./components/Services";
import BestLocations from './components/BestLocations'
import Reservations from "./components/Reservations";
// import MapComponent from "./components/MapComponent";
import ReservationForm from "./components/ReservationForm";
import Footer from "./components/Footer";
import Loader from "./components/Loader"; // Loader komponentini import qilish

function App() {
  const [loading, setLoading] = useState(true); // Yuklanish holatini boshqarish

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 2500); 
    return () => clearTimeout(timer); 
  }, []);

  if (loading) {
    return <Loader />; 
  }

  return (
    <>
      <Navbar />
      <Swiper />
      <Destinations />
      <AboutTrips />
      <Services />
      <BestLocations />
      <Reservations />
      {/* <MapComponent /> */}
      <ReservationForm />
      <Footer />
    </>
  );
}

export default App;
