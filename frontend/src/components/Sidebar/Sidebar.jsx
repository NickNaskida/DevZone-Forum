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

        <NavLink to="/staff" className="sidebar__nav_link">
          <Tooltip
            title={isOpen ? "" : "Staff"}
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
                  <i className="fi fi-rr-id-badge"></i>
                  <span>Staff</span> 
                  <span className="badge rounded-pill sidebar_new_badge">21</span>
                </> : <>
                  <i className="fi fi-rr-id-badge"></i>
                  <span className="sidebar_new_badge_closed"></span>
                </>
              }  
            </li>
          </Tooltip>
        </NavLink>

        <div className="divisor-line"></div>
     
        <NavLink to="/sign-out" className="sidebar__nav_link">
          <Tooltip
            title={isOpen ? "" : "Sign Out"}
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
                isOpen && (<span>Sign Out</span>)
              }     
            </li>
          </Tooltip>
        </NavLink>

        <NavLink to="/sign-in" className="sidebar__nav_link">
          <Tooltip
            title={isOpen ? "" : "Sign In"}
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
              <i className="fi fi-rr-sign-in"></i>
              {
                isOpen && (<span>Sign In</span>)
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
