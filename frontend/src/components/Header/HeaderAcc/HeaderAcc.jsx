import {React} from 'react';
import {OverlayTrigger, Tooltip} from 'react-bootstrap';

import Avatar from '@mui/material/Avatar';

const HeaderAcc = () => {
  return (
    <div className="header_profile">
        <OverlayTrigger
        placement="bottom"
        overlay={
            <Tooltip>
              Account
            </Tooltip>
        }
        >
        <button className="nav_butt">
          <Avatar
            alt="Naskida"
            src="https://avatars.githubusercontent.com/u/82929931?v=4"
            sx={{ width: 40, height: 40 }}
          />
        </button>
        </OverlayTrigger>
    </div>       
  )
}
  
export default HeaderAcc