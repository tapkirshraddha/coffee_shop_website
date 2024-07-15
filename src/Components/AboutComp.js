import React from 'react'
import data from '../shared/constant/constantdata'
import '../shared/css/external.css'



const AboutComp = () => {


  const Moreless = () => {
    var dots = document.getElementById("dots");
    var invisibletext = document.getElementById("invisible-text");
    var btntext = document.getElementById("btn");

    if (dots.style.display != "none") {
      dots.style.display = "none";
      invisibletext.style.display = "inline";
      btntext.innerHTML = "Learn less";
    }
    else {
      dots.style.display = "inline";
      invisibletext.style.display = "none";
      btntext.innerHTML = "Learn More";

    }
  }
  return (
    <div>


      <section id="abouthome">
        <div className="content">
          <h3> About Us</h3>
          <p>At Coffeeshop, we believe that every cup of coffee tells a story. Our journey began with a simple passion: to create a space where coffee enthusiasts, dreamers,
            and creatives could come together to savor the perfect cup.
          </p>
        </div>
      </section>

      <div className="about" id="about">
        <div className="container">
          <div className="heading">About <span>Us</span></div>
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <img src={data.about} ></img>
              </div>
            </div>
            <div className="col-md-6">
              <h3>Discover our story</h3>
              <p> we believe that every cup of coffee tells a story. Our journey began with a simple passion: to create a space where coffee enthusiasts, dreamers,
                and creatives could come together to savor the perfect cup.<span
                  id="dots">....</span><span id="invisible-text">
                  At the heart of .is a commitment to quality. Our beans are carefully sourced from the world's finest coffee-growing regions, ensuring each sip is a celebration of flavor. From the meticulous roasting process to the artful pour of our baristas,
                  we take pride in every step of the coffee-making journey.</span>
                  {/* <button type="button" id="btn" className="btn btn-outline-light btn-sm" onClick={() => Moreless()}>Learn more</button> */}
              </p>
              <button type="button" id="btn" className="btn btn-outline-secondary btn-lg" onClick={() => Moreless()}>Learn More</button>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default AboutComp
