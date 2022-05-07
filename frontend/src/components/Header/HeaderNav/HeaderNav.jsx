import React from 'react';

import {  Link } from 'react-router-dom'

import HeaderNotify from '../HeaderNotify/HeaderNotify';
import HeaderProfile from '../HeaderProfile/HeaderProfile';

const HeaderNav = () => {
  return (
    <div className="header__nav">
      <Link to="/sign-in" className="btn-green">Sign In</Link>
      <HeaderNotify />
      <HeaderProfile />      
    </div>
  )
}

export default HeaderNav

