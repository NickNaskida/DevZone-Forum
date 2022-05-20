import React, { useState, useEffect }from 'react'

import './SignOut.scss';

import Skeleton from '@mui/material/Skeleton';


const SignOut = () => {
  const [loaded, setLoaded] = useState(false);

  const ImageLoaded = useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1500)
  })

  return (
    <div className="card__wrapper">
      <div className="card__signout">
        <div className="card__img"> 
            <Skeleton
              sx={{ bgcolor: 'var(--color-bg-skeleton)', borderRadius: 'var(--border-rad)' }}
              variant="rectangular"
              width={256}
              height={256}
              style={{ display: loaded ? "none" : "block" }}
            />
            <img 
              src="/img/exit.png"
              alt="exit"
              style={{ display: loaded ? "block" : "none" }}
              onLoad ={ImageLoaded} 
            />        
        </div>
        <div className="card__text">
          <h6>Oh, no! You're leaving...</h6>
          <h6>Are you sure?</h6>
        </div>
        <div className="card__form">
          <button className="btn-green-3d">Sign Out</button>
        </div>
      </div>
    </div>
  )
}

export { SignOut }