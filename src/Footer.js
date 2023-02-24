import React from "react";
import './Footer.css'
import logo2 from './assets/icons/logo2.svg'
import twiter from './assets/icons/twiter.svg'
import behance from './assets/icons/behance.svg'
import instagram from './assets/icons/instagram.svg'
import vimeo from './assets/icons/vimeo.svg'
import linkedin from './assets/icons/linkedin.svg'
import phone from './assets/icons/phone.svg'
import time from './assets/icons/time.svg'
import location from './assets/icons/location.svg'
import picture1 from './assets/images/picture1.jpg'
import picture2 from './assets/images/picture2.jpg'
import picture3 from './assets/images/picture3.jpg'
import picture4 from './assets/images/picture4.jpg'
import picture5 from './assets/images/picture5.jpg'
import picture6 from './assets/images/picture6.jpg'


function Footer(){
    return(
       <div className="footer_container">
        <div className="footer_bodies">
            <div className="footer_body">
            <div className="footer_body_part1">
           <img src={logo2} alt='logo2'/>
            <p className="footer_body_part1_text">Continually productize compelling dome packed with all Elated utilize website and creating supply next-generation</p>
            <div className="footer_icons_part">
                <h6 className="footer_icons_text">Follow Us On:</h6>
                <div className="footer_icons">
                 <a href="#Twiter"><img src={twiter} alt='twiter'/></a>
                  <a href="#Behance"> <img src={behance} alt='behance'/></a>
                  <a href="#Instagram"> <img src={instagram} alt='instagram'/></a>
                  <a href="#Vimeo"> <img src={vimeo} alt='vimeo'/></a>
                 <a href="#Linkedin"><img src={linkedin} alt='linkedin'/></a>

                </div>
            </div>
            </div>
            <div className="footer_body_part2">
                <h6 className="footer_body_part2_texts">Tour Type</h6>
                    <p className="footer_body_part2_text">Adventure Tours</p>
                    <p className="footer_body_part2_text">Grouo Tours</p>
                    <p className="footer_body_part2_text">Seasonal Tours</p>
                    <p className="footer_body_part2_text">Relaxation Toure</p>
                    <p className="footer_body_part2_text">Family Friendly Tour</p>
            </div>
            <div className="footer_body_part3">
            <h6 className="footer_body_part3_texts">Contact info</h6>
            <div className="footer_body_part3_icons">
                <a href="#Phone"><img src={phone} alt='phone'/></a>
                <a href="#Time"><img src={time} alt='time'/></a>
                <a href="#Location"><img src={location} alt='location'/></a>
            </div>
            </div>
            <div className="footer_body_part4">
              <h6 className="footer_body_part4_text">Gallery</h6>  
              <div className="footer_body_part4_images">
                <img src={picture1} alt='picture1' className="footer_body_part4_image"/>
                <img src={picture2} alt='picture2' className="footer_body_part4_image"/>
                <img src={picture3} alt='picture3' className="footer_body_part4_image"/>
                <img src={picture4} alt='picture4' className="footer_body_part4_image"/>
                <img src={picture5} alt='picture5' className="footer_body_part4_image"/>
                <img src={picture6} alt='picture6' className="footer_body_part4_image"/>
              </div>
            </div> 
            </div>
        </div>
        <div className="footer_bottom">
            <p className="footer_bottom_text"> © Copyright 2022. All Rights Reserved by LabArtisan </p>
       </div> 
        </div>
    )
}



export default Footer