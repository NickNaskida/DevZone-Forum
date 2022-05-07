import React, { useState } from 'react';
import {Badge} from 'react-bootstrap';
import { AnimatePresence } from "framer-motion"

import "./HeaderNotify.scss";

import DropdownMenu from '../DropdownMenu/DropdownMenu'

import Tooltip from '@mui/material/Tooltip';
import ClickAwayListener from '@mui/base/ClickAwayListener';
import Box from '@mui/material/Box';


const HeaderNotify = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header_nav_notify">
      <Tooltip
        title="Notifications"
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
        <button
          className="nav_butt"
          onClick={() => setIsOpen(!isOpen)}
          style={{
            backgroundColor: isOpen ? "#101b23" : "transparent",         
            color: isOpen ? "#fff" : "#7f8c96"
          }}
        >
          <i className="fi fi-rr-bell"></i>
          <Badge pill className="notify-badge">3</Badge>
        </button>
      </Tooltip>

      <AnimatePresence>    
        {
          isOpen && (
            <ClickAwayListener onClickAway={() => setIsOpen(false)}>
              <Box>
                <DropdownMenu>
                  <div className="notify_dropdown">
                    Notifications
                    <br /><br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dolore eveniet, ullam fuga assumenda accusamus perferendis eos laborum non ut, laboriosam excepturi, voluptatibus sunt obcaecati possimus optio ex. Ipsam, doloremque!
                    Blanditiis numquam cumque amet reprehenderit, quae rerum qui, quo similique magnam fugit dicta dolorum libero? Eaque architecto blanditiis, illum laborum optio vero itaque, numquam labore quam facere fuga ullam soluta.
                    Adipisci sequi corrupti sapiente quasi aperiam autem corporis non. Dolores sit ipsam officia animi consectetur illo quo esse assumenda suscipit, repellendus ut quae quia illum. A commodi delectus aliquam doloribus?
                    Dicta nesciunt atque vero reprehenderit harum asperiores placeat ipsam, esse temporibus labore tempora et commodi iusto. Rem nostrum excepturi odit maiores sint adipisci. Earum voluptas, nobis qui voluptatem quaerat laudantium.
                    Vel dolores tenetur minus repellat, cum provident veniam porro saepe nobis suscipit fugit earum beatae nemo blanditiis corrupti a iste? Ipsum voluptate quia debitis in omnis earum itaque explicabo ex!
                    Ipsum, quos est atque voluptatibus, inventore, quas reiciendis neque dolor voluptates totam recusandae labore. Saepe ex, earum ratione a accusamus possimus excepturi provident consequatur quam, totam dolore tenetur voluptate illo!
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

export default HeaderNotify