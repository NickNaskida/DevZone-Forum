import {React} from 'react';

import {  Link } from 'react-router-dom'

import HeaderNotify from '../HeaderNotify/HeaderNotify';
import HeaderAcc from '../HeaderAcc/HeaderAcc';

const HeaderNav = () => {
  return (
    <div className="header__nav">
      <HeaderNotify />
      <HeaderAcc />
      <Link to="/sign-in" className="btn-green">Sign In</Link> 
    </div>
  )
}

export default HeaderNav

