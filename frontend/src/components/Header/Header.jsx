import {React} from 'react';
import "./Header.scss";

import SearchBar from '../Header/HeaderSearch/HeaderSearch';
import HeaderNav from '../Header/HeaderNav/HeaderNav';


const Header = () => {
  return (
    <header>
      <div className="header__inner">
          <SearchBar />
          <HeaderNav />
      </div>
    </header>
  )
}

export default Header
