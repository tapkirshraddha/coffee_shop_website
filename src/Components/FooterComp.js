import React from 'react'
import data from "../shared/constant/constantdata"


const FooterComp = () => {
    return (
        <div>
            <div className='Footer'>
                <div className='footer-parent'>
                    <div className='footer-child'>


                        <h3>About us</h3>
                        <p>Far far away, behind the word mountains,
                            far from the countries Vokalia and Consonantia,
                            there live the blind texts</p>
                        <div className='footer-icon'>

                            <img src={data.whastapp} / >
                            <img src={data.instagram}  />
                            <img src={data.facebook} />
                        </div>
                    </div>

                    <div className='footer-child'>
                        <h3>Services</h3>
                        <ol id='ol'>
                            <li>Cooked</li>
                            <li>Deliver</li>
                            <li>Quality Coffee</li>
                            <li>Mixed</li>

                        </ol>
                    </div>
                    <div className='footer-child'>
                        <h3>CONTACT US</h3>
                        <ol>
                            <li>8th,fllor,379,khradi,Pune</li>
                            <li>(+)9821798982</li>
                            <li>Contact@site.com</li>

                        </ol>
                    </div>
                    <div className='footer-child'>
                        <h3>OPENING TIMES</h3>
                        <ol>
                            <li>09.30am-11:13PM</li>
                            <li>Every Day</li>
                        </ol>
                    </div>


                </div>
                <p><strong>Copyright ©2023 All rights reserved Hematite Infotech PVT LTD| This template is made by Shraddha</strong></p>
            </div>



        </div>
    )
}

export default FooterComp
