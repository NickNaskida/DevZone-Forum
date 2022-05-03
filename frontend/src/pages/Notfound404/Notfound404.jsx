import { React } from 'react';
import { Link } from 'react-router-dom'

import "./Notfound404.scss";

const Notfound = () => {
    return (
        <div className="wrapper_404">
            <h1>404</h1>
            <small>Opps! Page Not Found</small>
            <Link className="btn-green-3d" to="/">Return Home</Link>    
        </div>    
    )
}

export { Notfound }