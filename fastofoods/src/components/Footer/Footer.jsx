import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
       <div className="footer-content">
        <div className="footer-content-left">
                <img src={assets.logo} alt=''/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque itaque quia corrupti incidunt assumenda eum quaerat odio voluptas nulla explicabo, voluptatem ullam porro doloribus placeat aspernatur facere iste impedit quibusdam.</p>
                <div className='footer-social-icons'>
                   <img src={assets.facebook_icon}  alt=''></img>
                   <img src={assets.twitter_icon}  alt=''></img>
                   <img src={assets.linkedin_icon}  alt=''></img>
                </div>
        </div>
        
        <div className="footer-content-center">
            <h2>COPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>

        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>(+91)9949496553</li>
                <li>contact@fastofoods.com</li>

            </ul>
        </div>
       </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © fastofoods.com-All Right Reserved</p>
    </div>
  )
}

export default Footer
