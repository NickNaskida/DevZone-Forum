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
                      <Link to="/members/NickNaskida" className="profile_dropdown_header">
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
                      <div className="profile_dropdown_menu">
                        
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