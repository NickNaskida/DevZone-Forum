import React from 'react'
import { motion } from "framer-motion"

import './DropdownMenu.scss'

const DropdownMenu = (props) => {
  return (
    <motion.div
      key="DropdownMenu"        
      initial={{ y: 5,  opacity: 0, visibility: 'hidden' }} 
      animate={{ y: 0,  opacity: 1, visibility: 'visible' }}
      exit={{ y: 5, opacity: 0, transition: { duration: 0.2 } }}
      transition={{ duration: 0.2 }}
      className="dropdown_menu"
    >
      { props.children }
    </motion.div> 
  )
}

export default DropdownMenu