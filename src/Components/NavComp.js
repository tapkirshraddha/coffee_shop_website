import React from 'react'
import '../shared/css/external.css'
import {Link } from 'react-router-dom'
import data from "../shared/constant/constantdata"
import logo from '../shared/images/logo - Copy.jpg'



const NavComp = () => {
    return (
        <div>

            {/* <div className='iconbox'>
                <div className='icons'>
                    <img className='logo' src={logo}/>
                    <img className='logo' src={logo}/>

                </div>

            </div> */}
            <nav className='header'>
                <ul>
                    <li><Link to="carousel" style={{color:"black", textDecoration:"none"}}>Home</Link></li>
                    <li><Link to="about"style={{color:"black", textDecoration:"none"}} >About</Link ></li>
                    <li><Link to="service"style={{color:"black" ,textDecoration:"none"}} >Services</Link></li>
                    <li><Link to="gallery" style={{color:"black",textDecoration:"none"}}>Menu</Link></li>
                    <li><Link to="contact" style={{color:"black",textDecoration:"none"}}>Contact</Link></li>
                    <li><Link to="link"style={{color:"black",textDecoration:"none"}}>Login</Link></li>

                   
                </ul>
            </nav>
       
 

        </div>
    )
}

export default NavComp
