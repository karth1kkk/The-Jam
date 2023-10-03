import React from 'react'
import {AiFillAndroid, AiFillApple, AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2023 | The Jams | All rights reserved</p>
      <p>
        <AiFillInstagram/>
        <AiOutlineTwitter/>
        <AiFillAndroid/>
        <AiFillApple/>
      </p>
    </div>
  )
}

export default Footer