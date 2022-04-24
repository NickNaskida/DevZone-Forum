import {React} from 'react';
import {Badge} from 'react-bootstrap';

import Tooltip from '@mui/material/Tooltip';

const HeaderNotify = () => {
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
        <button className="nav_butt">
        <i className="fi fi-rr-bell"></i>
        <Badge pill className="notify-badge">3</Badge>
        </button>
      </Tooltip>              
    </div>   
  )
}

export default HeaderNotify