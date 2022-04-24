import {React} from 'react';
import { Outlet } from 'react-router-dom';

import Breadcrumb from '../Breadcrumb/Breadcrumb'

import "./Main.scss";


const Main = () => {
  return (
    <main>
      <Breadcrumb />
      <Outlet />
    </main>
  )
}

export default Main
