import React from 'react'

import './SignOut.scss';


const SignOut = () => {
  return (
    <div className="card__wrapper">
      <div className="card__signout">
        <div className="card__img">
          <img src="/img/exit.png" alt="exit" />    
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