import {React} from 'react';
import "./Sidebar.scss";


const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar__header">
        <img className="sidebar__logo" src="/logo.svg" alt="logo" />
        <a href="/" className="sidebar__header_title">DevZone</a>        
      </div>

      <ul className="sidebar__nav">
        <a className="sidebar__nav_link" href="/">
          <li className="sidebar__nav_item">
            <i className="fi fi-rr-home"></i>
            <span>Home</span>
          </li>
        </a>

        <a className="sidebar__nav_link" href="">
          <li className="sidebar__nav_item">
            <i className="fi fi-rr-comment"></i>
            <span>Forums</span>
            <span className="badge rounded-pill sidebar_new_badge">4</span>                
          </li>
        </a>

        <a className="sidebar__nav_link" href="">
          <li className="sidebar__nav_item">
            <i className="fi fi-rr-flame"></i>
            <span>What's New</span>
          </li>
        </a>

        <a className="sidebar__nav_link" href="">
          <li className="sidebar__nav_item">
            <i className="far fa-user-friends"></i>
            <span>Members</span>
          </li>
        </a>

        <a className="sidebar__nav_link" href="">
          <li className="sidebar__nav_item">
            <i className="far fa-cog"></i>
            <span>Settings</span>
          </li>
        </a>

        <div className="divisor-line"></div>
     
        <a className="sidebar__nav_link" href="">
          <li className="sidebar__nav_item">
            <i className="fi fi-rr-sign-out"></i>
            <span>Logout</span>
          </li>
        </a>
          
			</ul>

			<div className="sidebar__additional_info">				
			  <a href="">Privacy Policy</a> • <a href="">Contact Us</a> <br /> <a href="">Terms of Use</a> • <a href="">Help</a>
			</div>
    </aside>
  )
}

export default Sidebar
