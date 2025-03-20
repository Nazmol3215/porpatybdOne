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
import ProfileCardGrid from "./police/police";
import Doctors_Valukka from "./BhalukaAbout/Doctors_Valukka";
import Ambulance from "./BhalukaAbout/Ambulance";
import Famous_person from "./BhalukaAbout/Famous_person";
import HospitalList from "./BhalukaAbout/Hospitals_Bhaluka";
import NotFoundPage from "./Layout/NotFoundPage";
import UpazilaAdmin from "./BhalukaAbout/UpazilaAdmin";
import JournalistsList from "./BhalukaAbout/JournalistsList";
import Bhaluka_Upazila_1 from "./BhalukaAbout/Bhaluka_Upazila_1";
import ValukaMunicipality_1 from "./BhalukaAbout/ValukaMunicipality_1";
import Union_1 from "./BhalukaAbout/Union_1";





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
      <Route path="/Bhaluka_Upazila_1" element={<Bhaluka_Upazila_1 />} />
      <Route path="/ProfileCardGrid" element={<ProfileCardGrid />} />
      <Route path="/Doctors_Valukka" element={<Doctors_Valukka />} />
      <Route path="/Ambulance" element={<Ambulance />} />
      <Route path="/Famous_person" element={<Famous_person />} />
      <Route path="/HospitalList" element={<HospitalList />} />
      <Route path="/NotFoundPage" element={<NotFoundPage />} />
      <Route path="/UpazilaAdmin" element={<UpazilaAdmin />} />
      <Route path="/JournalistsList" element={<JournalistsList />} />
      <Route path="/ValukaMunicipality_1" element={<ValukaMunicipality_1 />} />
      <Route path="/Union_1" element={<Union_1 />} />
      
    </Routes>
  </BrowserRouter>

  
    </>
  )
}
