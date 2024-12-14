import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGauge, 
  faFolder, 
  faCalendarCheck, 
  faCalendarAlt, 
  faFile, 
  faExclamationCircle 
} from '@fortawesome/free-solid-svg-icons'; // Import all necessary icons

import "./Sidebar.css";
import logo from './logo.png';
import pic from './pic.png';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>
        <img
          src={logo}
          style={{ width: '30%', height: 'auto', marginRight: '0px' }}
          alt="description"
        />
        Jur
      </h2>
      <ul className="sidebar-menu">
        <li>
          <Link to="/dashboard">
            <FontAwesomeIcon icon={faGauge} style={{ color: "#74C0FC", marginRight: "8px" }} />
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/mycases">
            <FontAwesomeIcon icon={faFolder} style={{ color: "#74C0FC", marginRight: "8px" }} />
            My Cases
          </Link>
        </li>
        <li>
          <Link to="/activities">
            <FontAwesomeIcon icon={faCalendarCheck} style={{ color: "#74C0FC", marginRight: "8px" }} />
            Activities
          </Link>
        </li>
        <li>
          <Link to="/calendar">
            <FontAwesomeIcon icon={faCalendarAlt} style={{ color: "#74C0FC", marginRight: "8px" }} />
            Calendar
          </Link>
        </li>
        <li>
          <Link to="/files">
            <FontAwesomeIcon icon={faFile} style={{ color: "#74C0FC", marginRight: "8px" }} />
            Files
          </Link>
        </li>
        <li>
          <Link to="/opendispute">
            <FontAwesomeIcon icon={faExclamationCircle} style={{ color: "#74C0FC", marginRight: "8px" }} />
            Open a Dispute
          </Link>
        </li>
      </ul>
      <img
        src={pic}
        style={{ width: '75%', height: '50%', marginLeft: '25px' }}
        alt="description"
      />
    </div>
  );
}

export default Sidebar;
