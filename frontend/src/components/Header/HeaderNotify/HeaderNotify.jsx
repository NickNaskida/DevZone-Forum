import React, { useState } from 'react';
import { Badge } from 'react-bootstrap';
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
                    <h4>Notifications</h4>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum labore, autem natus quo iste nihil commodi debitis doloribus ducimus deserunt, incidunt, placeat ab repudiandae accusantium totam vero quibusdam eveniet quas!
                    Impedit qui voluptatibus deleniti accusantium veritatis, aspernatur amet asperiores eum facilis cum. Laboriosam dicta accusamus doloremque ducimus architecto praesentium veniam commodi incidunt perspiciatis id rerum, suscipit saepe fuga nesciunt repellat?
                    Adipisci, expedita. Aperiam cumque, sed adipisci mollitia quis maxime nisi quo deserunt. Est iusto earum natus? Aperiam sunt error reiciendis, hic tenetur porro obcaecati similique autem quidem amet earum ullam!
                    Nostrum repudiandae est alias fugiat eligendi deleniti recusandae quibusdam corrupti hic fuga! Saepe provident neque tenetur harum eaque vel reprehenderit iusto, et molestiae dolor iste odio numquam repellendus pariatur rem?
                    Distinctio voluptate totam suscipit recusandae omnis dolorem. A, fugiat ipsa! Voluptatum ut ullam nostrum, quasi repellendus est architecto voluptate iste impedit iure ipsam cupiditate eligendi distinctio, eos delectus cum harum!
                    Praesentium sequi numquam ex incidunt tempora aut, repellat, illo sint iste enim illum nostrum corporis asperiores dolore quod mollitia soluta quo ullam aliquid commodi in, sed dolores tempore qui. Unde.
                    Est ducimus saepe aspernatur id odio tenetur iusto nemo voluptas perspiciatis, hic, eligendi beatae labore facilis dolor a doloribus deserunt fugit placeat suscipit molestiae? Sapiente dolorem ab corporis id consequuntur?
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