import React from 'react';
import './Navbar.css'
import logo from './assets/icons/logo.svg'


function Navbar(){
    return(
        <nav className='navbar'>
        <div className='nav_wrapper'>
           <img src={logo} alt='logo'/>

           <ul className='nav_items'>
            <li className='nav_item'>
                <a href='#Home'>Home</a>
            </li>
            <li className='nav_item'>
                <a href='#Tours'>Tours</a>
            </li>
            <li className='nav_item'>
                <a href='#Gallery'>Gallery</a>
            </li>
            <li className='nav_item'>
                <a href='#Pages'>Pages</a>
            </li>
            <li className='nav_item'>
                <a href='#Blog'>Blog</a>
            </li>
            <li className='nav_item'>
                <a href='#Contact'>Contact</a>
            </li>
            <li className='nav_item'>
                <a href='#Login'>Login</a>
            </li>
           </ul>

           <button className='btn paragraph'>Sign up</button>
        </div>
        </nav>
    )
}

export default Navbar