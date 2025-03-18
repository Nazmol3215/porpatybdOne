import React from 'react';
import { FaBuilding, FaCity, FaSitemap, FaFire, FaShieldAlt, FaUsers, FaUserMd, FaAmbulance, FaHospital } from 'react-icons/fa';
import { Link } from 'react-router-dom';




const ServiceGrid = () => {
  const services = [
    {
      category: 'ভালুকার পরিচিতি',
      items: [
        { name: <Link to="/Bhaluka_Upazila" style={{ textDecoration: 'none', color: 'inherit' }} >উপজেলা</Link>, icon: <FaBuilding style={{ color: '#007bff', fontSize: '3rem' }} /> },
        { name: <Link to="/ValukaMunicipality" style={{ textDecoration: 'none', color: 'inherit' }}>পৌরসভা </Link>, icon: <FaUsers style={{ color: '#17a2b8', fontSize: '3rem' }} /> },
        { name: <Link to="/Union" style={{ textDecoration: 'none', color: 'inherit' }} >উপজেলা</Link>, icon: <FaCity style={{ color: '#28a745', fontSize: '3rem' }} /> },
      ],
    },
    {
      category: 'জরুরি সেবা',
      items: [
        { name: <Link to="/upazila" style={{ textDecoration: 'none', color: 'inherit' }} >ফায়ার সার্ভিস</Link>, icon: <FaFire style={{ color: '#dc3545', fontSize: '3rem' }} /> },
        { name: <Link to="/ProfileCardGrid" style={{ textDecoration: 'none', color: 'inherit' }} >থানা পুলিশ </Link>, icon: <FaShieldAlt style={{ color: '#343a40', fontSize: '3rem' }} /> },
        { name: <Link to="/upazila" style={{ textDecoration: 'none', color: 'inherit' }} >উপজেলা প্রশাসন</Link>, icon: <FaUsers style={{ color: '#17a2b8', fontSize: '3rem' }} /> },
      ],
    },
    {
      category: 'স্বাস্থ্য সেবা',
      items: [

        { name: <Link to="/Doctors_Valukka" style={{ textDecoration: 'none', color: 'inherit' }}>ডাক্তার নার্স</Link>, icon: <FaUserMd style={{ color: '#6f42c1', fontSize: '3rem' }} /> },
        { name: <Link to="/Ambulance" style={{ textDecoration: 'none', color: 'inherit' }} >এ্যাম্বুলেন্স</Link>, icon: <FaAmbulance style={{ color: '#ff6347', fontSize: '3rem' }} /> },
        { name: <Link to="/Famous_person" style={{ textDecoration: 'none', color: 'inherit' }} >প্রসিদ্ধ ব্যক্তি</Link>, icon: <FaHospital style={{ color: '#20c997', fontSize: '3rem' }} /> },
      ],
    },
    {
      category: 'স্বাস্থ্য সেবা',
      items: [

        { name: <Link to="/HospitalList" style={{ textDecoration: 'none', color: 'inherit' }}>হাসপাতাল</Link>, icon: <FaUserMd style={{ color: '#6f42c1', fontSize: '3rem' }} /> },
        { name: <Link to="/Ambulance" style={{ textDecoration: 'none', color: 'inherit' }} >এ্যাম্বুলেন্স</Link>, icon: <FaAmbulance style={{ color: '#ff6347', fontSize: '3rem' }} /> },
        { name: <Link to="/Famous_person" style={{ textDecoration: 'none', color: 'inherit' }} >প্রসিদ্ধ ব্যক্তি</Link>, icon: <FaHospital style={{ color: '#20c997', fontSize: '3rem' }} /> },
      ],
    },
  ];

  return (
    <div className="container">
      {services.map((serviceCategory, index) => (
        <div key={index} className="mb-5">
          <h2 style={{ color: '#007bff', fontSize: '1.75rem', marginBottom: '1rem', textAlign: 'center' }}>
            {serviceCategory.category}
          </h2>
          <div className="row">
            {serviceCategory.items.map((item, idx) => (
              <div key={idx} className="col-4">
                <div
                  className="card text-center"
                  style={{
                    border: '1px solid green',
                    borderRadius: '15px',
                    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                    transition: 'transform 0.3s ease-in-out',
                    padding: '2px',
                    marginBottom: '13px',
                    
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                >
                  <div className="card-body">

                  <div style={{ fontSize: '.4rem',  }}>{item.icon}</div>
                  <h5 style={{ fontSize: '12px', fontWeight: 'bold', color: '#343a40', }}>{item.name}</h5>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceGrid;
