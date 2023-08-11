import React from 'react'
import "./main.css"

function Header() {
  return (
    <div className='nav'>
        <p id='uni-name'><b>Bharat Technical University</b></p>
        <img id='user-icon' src='https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_1280.png' alt='user profile icon' width="45px" height="45px" /> 
    </div>
  )
}

export default Header