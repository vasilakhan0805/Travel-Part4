import React from 'react'
import './root.css'
import Navbar from './Navbar'
import Header from './Header'
import Newsletter from './Newsletter'
import Footer from './Footer'
import Card from './Card'
import MainCard from './Newsletter'

function Root (){
    return(
        <div>
            {/* ------------------------Navbar------------------------ */}
       <Navbar/>

            {/* ------------------------Header------------------------ */}
        <Header/>

        <Card/>
        <MainCard/>
            {/* ------------------------Newsletter------------------------ */}
        <Newsletter/>

            {/* ------------------------Newsletter------------------------ */}
         <Footer/>

         
    </div>
    )
   
}

export default Root