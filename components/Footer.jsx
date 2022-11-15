import React from 'react'
import {AiFillAlert, AiFillCamera, AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 Headphone all right reserve</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
        <AiFillAlert />
        <AiFillCamera />
      </p>
    </div>
  )
}

export default Footer