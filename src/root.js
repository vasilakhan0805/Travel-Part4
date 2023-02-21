import React from 'react'
import './root.css'
import Navbar from './Navbar'
import Header from './Header'
import Newsletter from './Newsletter'
import Footer from './Footer'

function Root (){
    return(
        <div>
            {/* ------------------------Navbar------------------------ */}
       <Navbar/>

            {/* ------------------------Header------------------------ */}
        <Header/>

            {/* ------------------------Newsletter------------------------ */}
        <Newsletter/>

            {/* ------------------------Newsletter------------------------ */}
         <Footer/>
    </div>
    )
   
}

export default Root