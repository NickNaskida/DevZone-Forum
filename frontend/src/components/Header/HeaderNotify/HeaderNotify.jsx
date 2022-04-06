import {React} from 'react';
import {Badge, OverlayTrigger, Tooltip} from 'react-bootstrap';

const HeaderNotify = () => {
    return (
        <div className="header_nav_notify">
            <OverlayTrigger
                placement="bottom"
                overlay={
                <Tooltip>
                    Notifications
                </Tooltip>
                }
            >
                <button className="nav_butt">
                <i className="fi fi-rr-bell"></i>
                <Badge pill className="notify-badge">3</Badge>
                </button>
            </OverlayTrigger>           
        </div>   
    )
}

export default HeaderNotify