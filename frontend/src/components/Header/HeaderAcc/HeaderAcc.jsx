import {React} from 'react';

import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';

const HeaderAcc = () => {
  return (
    <div className="header_profile">
        <Tooltip
          title="Account"
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
            <Avatar
              alt="Naskida"
              src="https://avatars.githubusercontent.com/u/82929931?v=4"
              sx={{ width: 40, height: 40 }}
            />
          </button>
        </Tooltip>
    </div>       
  )
}
  
export default HeaderAcc