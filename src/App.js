import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import ClaimForm from "./components/ClaimForm";
import Dashboard from "./components/Dashboard";
import MyCases from "./components/MyCases";
import Activities from "./components/Activities";
import Calendar from "./components/Calendar";
import Files from "./components/Files";
import OpenDispute from "./components/OpenDispute";
import "./App.css";
import { FaUser, FaBell } from "react-icons/fa";
import { colors } from "@mui/material";
import { TbBackground } from "react-icons/tb";

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Sidebar */}
         <div className="header-icons-right" style={{ position: 'absolute', top: '10px', right: '10px', display: 'flex', alignItems: 'center' }}>
                <FaBell className="icon" title="Notifications" style={{ marginRight: '15px' }} color=" rgba(0, 195, 255, 0.701)"/>
                <FaUser className="icon" title="User Profile" color=" rgba(0, 195, 255, 0.701)" />
              </div>
              <Sidebar />

        <div className="main-content">
          {/* Header */}
          
          <Header />
         

          {/* User and Notification Icons */}
          

          {/* Main Content Based on Route */}
          <Routes>
            <Route path="/" element={<ClaimForm />} />
            <Route path="/dashboard" element={<ClaimForm />} />
            <Route path="/mycases" element={<MyCases />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/files" element={<Files />} />
            <Route path="/opendispute" element={<OpenDispute />} />
            <Route path="/claimform" element={<ClaimForm />} /> {/* Add this route */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
