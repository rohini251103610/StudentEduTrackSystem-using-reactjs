
import React from 'react';
import './App.css';
import { FaUser, FaBook, FaUsers, FaEnvelope, FaHospital,FaClipboard, FaUserTie, FaCheckCircle } from 'react-icons/fa';
import { RiDiscountPercentFill } from 'react-icons/ri';
import logo from './images/logo.jpeg'
import { BsFileEarmarkBarGraphFill } from "react-icons/bs";

import './App.css';

function App() {
  return (
    <div className="container">
      <div className="side">
        <div className="logo"><img src={logo}></img></div>
        <ul>
          <li><div className="icon"><FaUsers /></div></li>
          <li> Student Management</li>
          <li><div className="icon"><FaBook /></div></li>
          <li>Financial Management</li>
          <li><div className="icon"><RiDiscountPercentFill /></div></li>
          <li>Quality Control</li>
          <li ><div className="icon"><FaEnvelope /></div></li>
          <li> Report Delivery</li>
          <li><div className="icon"><BsFileEarmarkBarGraphFill /></div></li>
          <li>Attendance</li>
        </ul>
      </div>

      <div className="main">
        <header className="header">Student Management</header>
        <div className="status-bar">
          <div className="status-card red"><div className="icon"><FaUser /></div> <br />8<br />Regular Students</div>
          <div className="status-card purple"><div className="icon"><FaUserTie /></div> <br />13<br />Remedial Students</div>
          <div className="status-card green"><div className="icon"><FaCheckCircle /></div> <br />00<br />In Paid Clubs</div>
        </div>

        <div className="menu">
          <div className="menu-item"><FaUser /> Regular Enrollment</div>
          <div className="menu-item"><FaBook /> Remedial Enrollment</div>
          <div className="menu-item"><FaUsers /> Club Management</div>
          <div className="menu-item"><FaClipboard /> Classroom Management</div>
          <div className="menu-item"><FaEnvelope /> SMS / EMAIL</div>
          <div className="menu-item"><BsFileEarmarkBarGraphFill />Attendance</div>
          <div className="menu-item"><FaHospital /> Clinic</div>
        </div>
      </div>
    </div>
  );
}

export default App;