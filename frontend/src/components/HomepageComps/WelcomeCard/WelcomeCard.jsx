import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import './WelcomeCard.scss';


const WelcomeCard = () => {
  const [ip, setIP] = useState('');

  const getData = async () => {
    const res = await axios.get('https://geolocation-db.com/json/')
    setIP(res.data.IPv4)
  }
  
  useEffect( () => {
    getData()
  }, [])

  return (
    <div className="welcome__card">
      <div className="welcome__card_text">
        <h1>Greetings {ip}</h1>
        <br />
        <h6>DevZone is a community of software developers or people interested in computer science, where they help each other, grow their careers, broaden their horizons and have fun.</h6>
        <Link className="btn-green-3d" to="/sign-in">Join Community</Link>
      </div>
      <div className="welcome__card_pic">
        <img src="/img/chat.png" alt="Chat" />
      </div>	
    </div>
  )
}

export default WelcomeCard