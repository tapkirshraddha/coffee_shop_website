import React from 'react'

const Contact = () => {
    return (
        <div>
            <div id="contactmain">
                <div className="content">
                    <h3> Contact Us</h3>
                    <p>At Coffeeshop, we believe that every cup of coffee tells a story. Our journey began with a simple passion: to create a space where coffee enthusiasts, dreamers,
                        and creatives could come together to savor the perfect cup.
                    </p>
                </div>
            </div>


            <div class="contact" id="contact">
                <div class="container">

                    <div class="row">
                        <div class="col-md-7">
                            <div class="heading6">Contact <span>Us</span></div>

                            <p>Get in touch using our contact form below</p>

                            <input className="form-control" type="email" placeholder="Your Name" />
                            <input className="form-control" type="email" placeholder="Your Email" />
                            <input className="form-control" type="text" placeholder=" Subject" />
                            <input className="form-control" type="text" placeholder=" Message" />

                            <button type='button' className='btn btn-primary ' >Send Message</button>
                        </div>
                        <div class="col-md-5" id="col">
                            <h1> Contact Information</h1>
                            <p><strong>Address: </strong>198 West 21th Street,Pune</p>
                            <p><strong>Email: </strong>info123@gmail.com</p>
                            <p><strong>Number: </strong>+89273598749</p>
                            <p><strong>Website: </strong>WWW.Coffeeshop.com</p>
                        </div>
                    </div>
                </div>

            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5885.9573740870355!2d73.92665110083317!3d18.56140499360628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1efd084fb8b%3A0x1f8e0c9fe165aea4!2sHematite%20Infotech%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1703050039803!5m2!1sen!2sin" width="1000" height="400" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        </div >
    )
}

export default Contact
