import React from 'react'
import '../shared/css/external.css'
import data from '../shared/constant/constantdata'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'



const ServicesComp = () => {
    const nav= useNavigate()
    return (
        <div>
            <section id="home">
                <div className="content">
                    <h3>Our Services</h3>
                    <p>After all that is said and done, remember, the universe is yours to unfold. You belong here,
                        with us. Take a deep breath and indulge in a warm cup of Coffee
                        enjoy the small pleasures of life.
                    </p>
                    {/* <button type="button" className="btn btn-dark" >Shop Now</button> */}
                    <Link to="/gallery" className="btn btn-dark">Order Now</Link>
                </div>
            </section>





            <div id='services'>
                <h1 className='sub-title'> Our <span>Services</span></h1>
                <div className='services-list'>
                    <div className='servitems'>

                        <img src={data.icon} ></img>
                        <h4>EASY TO ORDER</h4>
                        <p>Say goodbye to order restrictions! Whether you're stocking up on your favorite beans or trying something new,
                            enjoy free shipping without any minimum purchase requirement.
                        </p>
                    </div>
                    <div className='servitems'>
                        <img src={data.icon3}></img>
                        <h4>HIGH QUALITY</h4>
                        <p>Say goodbye to order restrictions! Whether you're stocking up on your favorite beans or trying something new,
                            enjoy free shipping without any minimum purchase requirement. </p>
                    </div>
                    <div className='servitems'>
                        <img src={data.homeicon}></img>
                        <h4>FASTEST DELIVERY</h4>
                        <p> Say goodbye to order restrictions! Whether you're stocking up on your favorite beans or trying something new,
                            enjoy free shipping without any minimum purchase requirement.</p>
                    </div>
                    <div className='servitems'>
                        <img src={data.freeshipping}></img>
                        <h4>FREE SHIPPING</h4>
                        <p>Say goodbye to order restrictions! Whether you're stocking up on your favorite beans or trying something new,
                            enjoy free shipping without any minimum purchase requirement.
                        </p>
                    </div>
                    <div className='servitems'>
                        <img src={data.icon4} ></img>
                        <h4>PROPER ROUTING</h4>
                        <p> Say goodbye to order restrictions! Whether you're stocking up on your favorite beans or trying something new,
                            enjoy free shipping without any minimum purchase requirement.</p>
                    </div>
                    <div className='servitems'>
                        <img src={data.coffebeans}></img>
                        <h4>FASTEST DELIVERY</h4>
                        <p>Say goodbye to order restrictions! Whether you're stocking up on your favorite beans or trying something new,
                            enjoy free shipping without any minimum purchase requirement.</p>
                    </div>
                </div>
            </div>






        </div>
    )
}

export default ServicesComp
