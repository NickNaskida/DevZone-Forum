import React from 'react';
import { NavLink, Link } from 'react-router-dom'

import "./Sidebar.scss";

import Tooltip from '@mui/material/Tooltip';


const Sidebar = (props) => {
  const { isOpen, toggleSidebar } = props

  return (
    <aside
      className="sidebar"
      style={{
        width: isOpen ? "240px" : "76px",
        paddingRight: isOpen ? "10px" : "20px",
      }}
    >
      <button 
        className="sidebar__toggle_butt"
        onClick={() => toggleSidebar()}
      >
        <i 
          className="fi fi-rr-angle-small-left"
          style={{
            transform: isOpen ? "rotate(0deg)" : "rotate(-180deg)"
          }}
        >
        </i>
      </button>

      <div 
        className="sidebar__header"
        style={{padding: isOpen ? "0px 6px" : "0"}}
      >
        <img className="sidebar__logo" src="/logo.svg" alt="logo" />
        {
          isOpen && (<Link to="/" className="sidebar__header_title">DevZone</Link>)
        }        
      </div> 

      <ul
        className="sidebar__nav"               
      >
        <NavLink to="/" className="sidebar__nav_link">
          <Tooltip
            title={isOpen ? "" : "Home"}
            placement="right"
            componentsProps={{
              tooltip: {
                sx: {
                  bgcolor: 'rgba(0, 0, 0, 0.8)',
                  fontFamily: 'Rubik, sans-serif;'
                },
              },
            }}
          >
            <li
              className="sidebar__nav_item"
              style={{padding: isOpen ? "8px 15px" : "8px 13px"}}            
            >
              <i className="fi fi-rr-home"></i>
              {
                isOpen && (<span>Home</span>)
              }     
            </li>
          </Tooltip>
        </NavLink>

        <NavLink to="/forums" className="sidebar__nav_link">
          <Tooltip
            title={isOpen ? "" : "Forums"}
            placement="right"
            componentsProps={{
              tooltip: {
                sx: {
                  bgcolor: 'rgba(0, 0, 0, 0.8)',
                  fontFamily: 'Rubik, sans-serif;'
                },
              },
            }}
          >
            <li
              className="sidebar__nav_item"
              style={{padding: isOpen ? "8px 15px" : "8px 13px"}}            
            >
              {
                isOpen ? <>
                  <i className="fi fi-rr-comment"></i>
                  <span>Forums</span> 
                  <span className="badge rounded-pill sidebar_new_badge">4</span>
                </> : <>
                  <i className="fi fi-rr-comment"></i>
                  <span className="sidebar_new_badge_closed"></span>
                </>
              }                         
            </li>
          </Tooltip>
        </NavLink>

        <NavLink to="/whats-new" className="sidebar__nav_link">
          <Tooltip
            title={isOpen ? "" : "What's New"}
            placement="right"
            componentsProps={{
              tooltip: {
                sx: {
                  bgcolor: 'rgba(0, 0, 0, 0.8)',
                  fontFamily: 'Rubik, sans-serif;'
                },
              },
            }}
          >
            <li
              className="sidebar__nav_item"
              style={{padding: isOpen ? "8px 15px" : "8px 13px"}}            
            >
              <i className="fi fi-rr-flame"></i>
              {
                isOpen && (<span>What's New</span>)
              }  
            </li>
          </Tooltip>
        </NavLink>

        <NavLink to="/members" className="sidebar__nav_link">
          <Tooltip
            title={isOpen ? "" : "Members"}
            placement="right"
            componentsProps={{
              tooltip: {
                sx: {
                  bgcolor: 'rgba(0, 0, 0, 0.8)',
                  fontFamily: 'Rubik, sans-serif;'
                },
              },
            }}
          >
            <li
              className="sidebar__nav_item"
              style={{padding: isOpen ? "8px 15px" : "8px 13px"}}            
            >
              <i className="fi fi-rr-users"></i>
              {
                isOpen && (<span>Members</span>)
              }  
            </li>
          </Tooltip>
        </NavLink>

        <NavLink to="/settings" className="sidebar__nav_link">
          <Tooltip
            title={isOpen ? "" : "Settings"}
            placement="right"
            componentsProps={{
              tooltip: {
                sx: {
                  bgcolor: 'rgba(0, 0, 0, 0.8)',
                  fontFamily: 'Rubik, sans-serif;'
                },
              },
            }}
          >
            <li
              className="sidebar__nav_item"
              style={{padding: isOpen ? "8px 15px" : "8px 13px"}}            
            >
              <i className="fi fi-rr-settings"></i>
              {
                isOpen && (<span>Settings</span>)
              }  
            </li>
          </Tooltip>
        </NavLink>

        <div className="divisor-line"></div>
     
        <NavLink to="/logout" className="sidebar__nav_link">
          <Tooltip
            title={isOpen ? "" : "Logout"}
            placement="right"
            componentsProps={{
              tooltip: {
                sx: {
                  bgcolor: 'rgba(0, 0, 0, 0.8)',
                  fontFamily: 'Rubik, sans-serif;'
                },
              },
            }}
          >
            <li
              className="sidebar__nav_item"
              style={{padding: isOpen ? "8px 15px" : "8px 13px"}}            
            >
              <i className="fi fi-rr-sign-out"></i>
              {
                isOpen && (<span>Logout</span>)
              }     
            </li>
          </Tooltip>
        </NavLink>

        <NavLink to="/login" className="sidebar__nav_link">
          <Tooltip
            title={isOpen ? "" : "Login"}
            placement="right"
            componentsProps={{
              tooltip: {
                sx: {
                  bgcolor: 'rgba(0, 0, 0, 0.8)',
                  fontFamily: 'Rubik, sans-serif;'
                },
              },
            }}
          >
            <li
              className="sidebar__nav_item"
              style={{padding: isOpen ? "8px 15px" : "8px 13px"}}            
            >
              <i class="fi fi-rr-sign-in"></i>
              {
                isOpen && (<span>Login</span>)
              }     
            </li>
          </Tooltip>
        </NavLink>

        <NavLink to="/sign-up" className="sidebar__nav_link">
          <Tooltip
            title={isOpen ? "" : "Sign Up"}
            placement="right"
            componentsProps={{
              tooltip: {
                sx: {
                  bgcolor: 'rgba(0, 0, 0, 0.8)',
                  fontFamily: 'Rubik, sans-serif;'
                },
              },
            }}
          >
            <li
              className="sidebar__nav_item"
              style={{padding: isOpen ? "8px 15px" : "8px 13px"}}            
            >
              <i class="fi fi-rr-sign-in"></i>
              {
                isOpen && (<span>Sign Up</span>)
              }     
            </li>
          </Tooltip>
        </NavLink>
			</ul>

			<div className="sidebar__additional_info">
        {
          isOpen && <>				
			      <Link to="">Privacy Policy</Link> • <Link to="">Contact Us</Link> <br /> <Link to="">Terms of Use</Link> • <Link to="">Help</Link>
          </>
        }  
      </div>
    </aside>
  )
}

export default Sidebar
