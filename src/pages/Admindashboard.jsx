import React, { useState } from 'react';
import '../styles/admin-dashboard.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WorkIcon from '@mui/icons-material/Work';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import logo from '../assets/all-images/logo bg removed (2).png';

function AdminDashboard() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('neww-dark');
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="neww-App">
      <nav className={isSidebarOpen ? 'neww-sidebar' : 'neww-sidebar neww-closed'}>
        <div className="neww-logo-name">
          <div className="neww-logo-image">
            <img src={logo} alt="logo" />
          </div>
          <span className="neww-logo_name">Admin Dashboard</span>
        </div>
        <ul className="neww-menu-items">
          <li><a href="#"><HomeIcon /><span className="neww-link-name">Home</span></a></li>
          <li><a href="#"><AccountCircleIcon /><span className="neww-link-name">Profile</span></a></li>
          <li><a href="#"><WorkIcon /><span className="neww-link-name">Jobs</span></a></li>
          <li><a href="#"><SettingsIcon /><span className="neww-link-name">Settings</span></a></li>
          <li><a href="#"><LogoutIcon /><span className="neww-link-name">Logout</span></a></li>
        </ul>
        <div className="neww-mode-toggle">
          <span>{isDarkMode ? <Brightness4Icon /> : <Brightness7Icon />}</span>
          <div className="neww-switch" onClick={toggleDarkMode}></div>
        </div>
      </nav>

      <div className="neww-dashboard">
        <div className="neww-top">
          <span className="neww-sidebar-toggle" onClick={toggleSidebar}><MenuIcon /></span>
          <div className="neww-search-box">
            <SearchIcon />
            <input type="text" placeholder="Search..." />
          </div>
        </div>

        <div className="neww-dash-content">
          <div className="neww-overview">
            <div className="neww-title">
              <HomeIcon />
              <span className="neww-text">Dashboard Overview</span>
            </div>
          </div>

          <div className="neww-boxes">
            <div className="neww-box">
              <WorkIcon />
              <span className="neww-text">Total Jobs</span>
              <span className="neww-number">1,230</span>
            </div>
            <div className="neww-box">
              <AccountCircleIcon />
              <span className="neww-text">New Applicants</span>
              <span className="neww-number">432</span>
            </div>
            <div className="neww-box">
              <SettingsIcon />
              <span className="neww-text">Settings Changes</span>
              <span className="neww-number">24</span>
            </div>
          </div>

          <div className="neww-activity">
            <div className="neww-title">
              <HomeIcon />
              <span className="neww-text">Recent Activity</span>
            </div>
            <div className="neww-activity-data">
              <div className="neww-data">
                <div className="neww-data-title">New Job Postings</div>
                <div className="neww-data-list">Software Engineer - $100K</div>
                <div className="neww-data-list">Data Scientist - $120K</div>
              </div>
              <div className="neww-data">
                <div className="neww-data-title">Recent Applications</div>
                <div className="neww-data-list">John Doe - Software Engineer</div>
                <div className="neww-data-list">Jane Smith - Data Scientist</div>
              </div>
              <div className="neww-data">
                <div className="neww-data-title">System Updates</div>
                <div className="neww-data-list">Version 1.2 Released</div>
                <div className="neww-data-list">Security Patch Applied</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;