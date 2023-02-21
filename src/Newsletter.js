import React from "react";
import './Newsletter.css'


function Newsletter(){
    return(
        <section className='newsletter'>
        <div className='newsletter_wrapper'>
            <h1 className='header1'>Sign Up For Our Newsletter</h1>

        <div className='newsletter_form'>
            <input placeholder='Enter your email here' className='newsletter_input'/>
            <button className='btn'>Subscribe Now</button>
        </div>
        </div>
    </section>
    )
}

export default Newsletter