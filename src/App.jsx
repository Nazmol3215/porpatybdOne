import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import ContactForm from "./OtherPages/UserForm";
import DetaisPages from "./DetaisPages/DetaisPages";
import PropertyLocationMap from "./OtherPages/PropertyLocationMap";
import Profile from "./Porfile/Porfile";
import FirtOne from "./Porfile/FirtOne";
import AboutUs from "./Porfile/AboutUs";
import Phot from "./Porfile/PhotosGrid";
import Bhaluka_Upazila from "./BhalukaAbout/Bhaluka_Upazila";
import ValukaMunicipality from "./BhalukaAbout/ValukaMunicipality";
import Union from "./BhalukaAbout/Union";
import ProfileCardGrid from "./police/police";
import Doctors_Valukka from "./BhalukaAbout/Doctors_Valukka";
import Ambulance from "./BhalukaAbout/Ambulance";
import Famous_person from "./BhalukaAbout/Famous_person";
import HospitalList from "./BhalukaAbout/Hospitals_Bhaluka";


export default function Router() {
  return (
    <>


    <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/FirtOne" element={<FirtOne />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/Phot" element={<Phot />} />
      <Route path="/ContactForm" element={<ContactForm />} />
      <Route path="/DetaisPages" element={<DetaisPages />} />
      <Route path="/PropertyLocationMap" element={<PropertyLocationMap />} />
      <Route path="/Bhaluka_Upazila" element={<Bhaluka_Upazila />} />
      <Route path="/ValukaMunicipality" element={<ValukaMunicipality />} />
      <Route path="/Union" element={<Union />} />
      <Route path="/ProfileCardGrid" element={<ProfileCardGrid />} />
      <Route path="/Doctors_Valukka" element={<Doctors_Valukka />} />
      <Route path="/Ambulance" element={<Ambulance />} />
      <Route path="/Famous_person" element={<Famous_person />} />
      <Route path="/HospitalList" element={<HospitalList />} />
      
    </Routes>
  </BrowserRouter>

  
    </>
  )
}
