import React from 'react'

import './SignIn.scss';

const SignIn = () => {
  return (
    <div className="card__wrapper">
        <div className="card__signin">
            <div className="signin_social">
              <div className="signin_social_butt">
                <img src="/img/google.png" alt="google" />
              </div>
              <div className="signin_social_butt">
                <img src="/img/facebook.png" alt="facebook" />
              </div>
              <div className="signin_social_butt">
                <img src="/img/github.png" alt="github" /> 
              </div>
            </div>
            <div className="signin_divisor">
              ------------ or ------------
            </div>
            <div className="signin_form">
                
            </div>
            <div className="signin_footer">

            </div>
        </div>
    </div>
  )
}

export { SignIn } 