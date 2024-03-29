import React, { useState } from 'react';
import { AnimatePresence } from "framer-motion"
import { Link } from 'react-router-dom'

import "./HeaderProfile.scss";

import DropdownMenu from '../DropdownMenu/DropdownMenu'

import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import ClickAwayListener from '@mui/base/ClickAwayListener';
import Box from '@mui/material/Box';


const HeaderProfile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header_profile">
        <Tooltip
          title="Profile"
          placement="bottom"
          componentsProps={{
            tooltip: {
              sx: {
                bgcolor: 'rgba(0, 0, 0, 0.8)',
                fontFamily: 'Rubik, sans-serif;'
              },
            },
          }}
        >
          <button className="nav_butt" onClick={() => setIsOpen(!isOpen)}>
            <Avatar
              alt="Naskida"
              src="https://avatars.githubusercontent.com/u/82929931?v=4"
              sx={{ width: 40, height: 40 }}
            />
          </button>
        </Tooltip>

        <AnimatePresence>  
          {
            isOpen && (
              <ClickAwayListener onClickAway={() => setIsOpen(false)}>
                <Box>
                  <DropdownMenu>
                    <div className="profile_dropdown">
                      <div className="profile_dropdown_header">
                        <Link to="/members/NickNaskida">
                          <Avatar
                            alt="Naskida"
                            src="https://avatars.githubusercontent.com/u/82929931?v=4"
                            sx={{ width: 60, height: 60 }}
                          />
                          <div>
                            <span>NickNaskida</span>
                            <small>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</small>
                          </div>
                        </Link>

                        <div className="profile_dropdown_header_status">
                          Status
                        </div>
                      </div>

                      <div className="profile_dropdown_divisor"></div>

                      <div className="profile_dropdown_menu">
                        <div className="profile_dropdown_menu_mini">
                          <Link to="" className="profile_dropdown_menu_mini_card" onClick={() => setIsOpen(false)}>
                            
                          </Link>
                          <Link to="/saved" className="profile_dropdown_menu_mini_card" onClick={() => setIsOpen(false)}>
                            <i className="fi fi-rr-bookmark"></i> Saved
                          </Link>
                          <Link to="/account" className="profile_dropdown_menu_mini_card" onClick={() => setIsOpen(false)}>
                            <i className="fi fi-rr-settings"></i> Account
                          </Link>
                          <Link to="/privacy" className="profile_dropdown_menu_mini_card" onClick={() => setIsOpen(false)}>
                            <i className="fi fi-rr-shield"></i> Privacy
                          </Link>
                          <Link to="/security" className="profile_dropdown_menu_mini_card" onClick={() => setIsOpen(false)}>
                            <i className="fi fi-rr-key"></i> Security
                          </Link>
                          <Link to="/sign-out" className="profile_dropdown_menu_mini_card" onClick={() => setIsOpen(false)}>
                            <i className="fi fi-rr-sign-out"></i> Sign Out
                          </Link>
                        </div>
                      </div>

                      <div className="profile_dropdown_footer">
                        <Link to="">Privacy Policy</Link> • <Link to="">Terms of Use</Link> • <Link to="">Help</Link> <br /> DevZone 2022
                      </div>
                    </div>
                  </DropdownMenu>
                </Box>
              </ClickAwayListener>
            )
          }
        </AnimatePresence>  
    </div>       
  )
}
  
export default HeaderProfile