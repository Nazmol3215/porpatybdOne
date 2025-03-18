import React, { useState } from "react";


// Hospital data array
const hospitals = [
  {
    name: "ভালুকা সরকারি হাসপাতাল",
    rating: 3.9,
    ratingsCount: 109,
    claimed: true,
    location: " ভালুকার পশ্চিমের রাস্তার উপরের ব্রীজ থেকে পাচ’শ গজ সামনে।  ভালুকা, ময়মনসিংহ 01733-338905",
    yearsInHealthcare: 9,
    photos: [
      { label: "All", src: "hos.png" },
      { label: "Interior", src: "hos1.png" },
    ],
    services: ["General Surgery", "Orthopedics", "Pediatrics", "Cardiology"],
    reviews: "Rated 3.9 stars by 109 people. Read patient reviews here.",
  },
  {
    name: "বন্ধন হাসপাতাল",
    rating: 4.2,
    ratingsCount: 150,
    claimed: true,
    location: " জালাল ভিলা, সরকারি হাসপাতাল রোড ভালুকা। আধুনিক স্বাস্থ্য সেবার প্রতিশ্রুতি বন্ধন হাসপাতাল, 01710-991127",
    yearsInHealthcare: 12,
    photos: [
      { label: "All", src: "hos1.png" },
      { label: "Interior", src: "hos4.png" },
    ],
    services: ["Cardiology", "Neurology", "Dermatology"],
    reviews: "Rated 4.2 stars by 150 people. Read patient reviews here.",
  },
  {
    name: "মাস্টার হাসপাতা",
    rating: 4.2,
    ratingsCount: 150,
    claimed: true,
    location: "ভালুকা বাজার রোড ন্যাশনাল ব্যাংকের উপরতলা। মোবাইল: 01731-211120",
    yearsInHealthcare: 12,
    photos: [
      { label: "All", src: "hos2.png" },
      { label: "Interior", src: "hos1.png" },
    ],
    services: ["Cardiology", "Neurology", "Dermatology"],
    reviews: "Rated 4.2 stars by 150 people. Read patient reviews here.",
  },
  {
    name: "লিলি এন্ড তাজ ডেন্টাল সার্জারী",
    rating: 4.2,
    ratingsCount: 150,
    claimed: true,
    location: "১৯২/২ বাইতুসসাফ লিলি ভিলা হাই স্কুল রোড ভালুকা ময়মনসিংহ। মোবাইল: 01952-532442",
    yearsInHealthcare: 12,
    photos: [
      { label: "All", src: "hos2.png" },
      { label: "Interior", src: "hos1.png" },
    ],
    services: ["Cardiology", "Neurology", "Dermatology"],
    reviews: "Rated 4.2 stars by 150 people. Read patient reviews here.",
  },
  {
    name: "ভালুকা ডিজিটাল হাসপাতাল।",
    rating: 4.2,
    ratingsCount: 150,
    claimed: true,
    location: "Motihari Central, Motihari",
    yearsInHealthcare: 12,
    photos: [
      { label: "All", src: "hos4.png" },
      { label: "Interior", src: "hos1.png" },
    ],
    services: ["Cardiology", "Neurology", "Dermatology"],
    reviews: "Rated 4.2 stars by 150 people. Read patient reviews here.",
  },
  {
    name: " মাহির হাসপাতাল",
    rating: 4.2,
    ratingsCount: 150,
    claimed: true,
    location: "Motihari Central, Motihari",
    yearsInHealthcare: 12,
    photos: [
      { label: "All", src: "hos4.png" },
      { label: "Interior", src: "hos1.png " },
    ],
    services: ["Cardiology", "Neurology", "Dermatology"],
    reviews: "Rated 4.2 stars by 150 people. Read patient reviews here.",
  },
  {
    name: " মোহাম্মদীয়া মডেল হাসপাতাল",
    rating: 4.2,
    ratingsCount: 150,
    claimed: true,
    location: "Motihari Central, Motihari",
    yearsInHealthcare: 12,
    photos: [
      { label: "All", src: "hos2.png" },
      { label: "Interior", src: "hos4.png" },
    ],
    services: ["Cardiology", "Neurology", "Dermatology"],
    reviews: "Rated 4.2 stars by 150 people. Read patient reviews here.",
  },
  {
    name: "ভালুকা জেনারেল হাসপাতাল",
    rating: 4.2,
    ratingsCount: 150,
    claimed: true,
    location: "Motihari Central, Motihari",
    yearsInHealthcare: 12,
    photos: [
      { label: "All", src: "hos2.png" },
      { label: "Interior", src: "hos4.png" },
    ],
    services: ["Cardiology", "Neurology", "Dermatology"],
    reviews: "Rated 4.2 stars by 150 people. Read patient reviews here.",
  },
  {
    name: "সেবা হাসপাতাল",
    rating: 4.2,
    ratingsCount: 150,
    claimed: true,
    location: "Motihari Central, Motihari",
    yearsInHealthcare: 12,
    photos: [
      { label: "All", src: "hos4.png" },
      { label: "Interior", src: "hos1.png" },
    ],
    services: ["Cardiology", "Neurology", "Dermatology"],
    reviews: "Rated 4.2 stars by 150 people. Read patient reviews here.",
  },
  {
    name: "ডক্টর ক্লিনিক",
    rating: 4.2,
    ratingsCount: 150,
    claimed: true,
    location: "Motihari Central, Motihari",
    yearsInHealthcare: 12,
    photos: [
      { label: "All", src: "hos1.png" },
      { label: "Interior", src: "hos2.png" },
    ],
    services: ["Cardiology", "Neurology", "Dermatology"],
    reviews: "Rated 4.2 stars by 150 people. Read patient reviews here.",
  },
 
  
  // Add 8 more hospital objects in a similar way
  // You can duplicate the existing objects and change the details for other hospitals
];

export default function HospitalList() {
  const [activeTab, setActiveTab] = useState("Overview");

  // Function to render content based on active tab for each hospital
  const renderContent = (hospital) => {
    switch (activeTab) {
      case "Overview":
        return (
          <div style={{ marginBottom: "20px" }}>
            <h2 style={styles.sectionTitle}>Overview</h2>
            <p style={styles.text}>
              {hospital.name} is located in {hospital.location} and has been in healthcare for{" "}
              {hospital.yearsInHealthcare} years. The hospital provides comprehensive services to
              patients.
            </p>
          </div>
        );
      case "Photos":
        return (
          <div style={{ marginBottom: "20px" }}>
            <h2 style={styles.sectionTitle}>Photos</h2>
            <div style={styles.photoGrid}>
              {hospital.photos.map((photo, index) => (
                <div key={index} style={styles.photoContainer}>
                  <img src={photo.src} alt={photo.label} style={styles.photo} />
                  <p style={styles.photoLabel}>{photo.label}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case "Services":
        return (
          <div style={{ marginBottom: "20px" }}>
            <h2 style={styles.sectionTitle}>Services</h2>
            <ul style={styles.list}>
              {hospital.services.map((service, index) => (
                <li key={index} style={styles.listItem}>
                  {service}
                </li>
              ))}
            </ul>
          </div>
        );
      case "Reviews":
        return (
          <div style={{ marginBottom: "20px" }}>
            <h2 style={styles.sectionTitle}>Reviews</h2>
            <p style={styles.text}>{hospital.reviews}</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div style={styles.container}>
      {hospitals.map((hospital, index) => (
        <div key={index} style={styles.hospitalCard}>
          {/* Header */}
          <div style={styles.header}>
            <h1 style={styles.title}>{hospital.name}</h1>
            <div style={styles.headerActions}>
              <div style={styles.ratingBox}>
                <span style={styles.rating}>{hospital.rating}</span>{" "}
                <span>{hospital.ratingsCount} Ratings</span>
                {hospital.claimed && <span style={styles.claimed}>Claimed</span>}
              </div>
              <div style={styles.location}>
                <span>{hospital.location}</span> • {hospital.yearsInHealthcare} Years in Healthcare
              </div>
            </div>
          </div>

          <div style={styles.buttonGroup}>
            <button style={styles.showNumberButton}>Show Number</button>
            <button style={styles.enquireButton}>Enquire Now</button>
            <button style={styles.whatsappButton}>WhatsApp</button>
          </div>

          {/* Navigation Tabs */}
          <div style={styles.tabs}>
            {["Overview", "Photos", "Services", "Reviews"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  ...styles.tabButton,
                  backgroundColor: activeTab === tab ? "#3B82F6" : "#E5E7EB",
                  color: activeTab === tab ? "#FFFFFF" : "#374151",
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Render content based on active tab */}
          <div>{renderContent(hospital)}</div>
        </div>
      ))}
    </div>
  );
}

// Inline CSS styles
const styles = {
  container: {
    maxWidth: "800px",
    margin: "2px auto",
    padding: "10px",
    fontFamily: "Arial, sans-serif",
  },
  hospitalCard: {
    marginBottom: "40px",
    padding: "20px",
    border: "1px solid #E5E7EB",
    borderRadius: "10px",
    backgroundColor: "#FFFFFF",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  title: {
    fontSize: "15px",
    fontWeight: "bold",
    padding: " 0 26px 0 0",
  },
  headerActions: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  ratingBox: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
    backgroundColor: "#22C55E",
    color: "#FFFFFF",
    padding: "5px 10px",
    borderRadius: "5px",
  },
  rating: {
    fontSize: "18px",
    fontWeight: "bold",
  },
  claimed: {
    fontSize: "12px",
    color: "#000",
  },
  location: {
    fontSize: "14px",
    marginTop: "5px",
  },
  buttonGroup: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  showNumberButton: {
    backgroundColor: "#16A34A",
    color: "#FFFFFF",
    padding: "10px 15px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  },
  enquireButton: {
    backgroundColor: "#2563EB",
    color: "#FFFFFF",
    padding: "10px 15px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  },
  whatsappButton: {
    backgroundColor: "#22C55E",
    color: "#FFFFFF",
    padding: "10px 15px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  },
  tabs: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  tabButton: {
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    border: "none",
  },
  sectionTitle: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  text: {
    fontSize: "16px",
    lineHeight: "1.5",
  },
  photoGrid: {
    display: "flex",
    gap: "10px",
  },
  photoContainer: {
    textAlign: "center",
  },
  photo: {
    width: "150px",
    height: "150px",
    borderRadius: "5px",
    objectFit: "cover",
  },
  photoLabel: {
    marginTop: "5px",
    fontSize: "14px",
  },
  list: {
    listStyleType: "none",
    paddingLeft: "0",
  },
  listItem: {
    fontSize: "16px",
    marginBottom: "5px",
  },
  name: {
    fontSize: "6px",
    marginBottom: "5px",
  },


};
