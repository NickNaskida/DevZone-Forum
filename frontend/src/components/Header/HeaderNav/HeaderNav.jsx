import {React} from 'react';

import HeaderNotify from '../HeaderNotify/HeaderNotify';
import HeaderAcc from '../HeaderAcc/HeaderAcc';

const HeaderNav = () => {
  return (
    <div className="header__nav">
      <HeaderNotify />
      <HeaderAcc /> 
    </div>
  )
}

export default HeaderNav

