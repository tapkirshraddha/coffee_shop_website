import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import data from "../shared/constant/constantdata"
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';





const CarouselComp = () => {

  const nav = useNavigate()

  //delecleration
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
      <Carousel fade>
        <Carousel.Item>
          {/* <ExampleCarouselImage text="First slide" /> */}
          <img src={data.bgimg2} style={{ width: "110%", height: "100vh" }} ></img>
          <Carousel.Caption className="mb-5">
            <h3 style={{ fontSize: "40px", fontFamily: "revert" }}>Start Your Day With a  Fresh coffee</h3>
            <p style={{ fontFamily: "cursive", fontSize: "20px" }}>After all that is said and done, remember, the universe is yours to unfold. You belong here,
              with us. Take a deep breath and indulge in a warm cup of Coffee
              enjoy the small pleasures of life.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {/* <ExampleCarouselImage text="Second slide" /> */}
          <img src={data.image4} style={{ width: "100%", height: "90vh" }} ></img>

          <Carousel.Caption>
            <h3>AMAZING TASTE & BEAUTIFUL PLACE</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {/* <ExampleCarouselImage text="Third slide" /> */}
          <img src={data.image7} style={{ width: "100%", height: "90vh" }} ></img>

          <Carousel.Caption>
            <h3>CREAMY HOT AND READY TO SERVE</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>

        </Carousel.Item>
        <Carousel.Item>
          <img src={data.bg10} style={{ width: "100%", height: "90vh" }} ></img>

          <Carousel.Caption>
           
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>

        </Carousel.Item>
      </Carousel>

      <div className="aboutsection" id="aboutsection">
        <div className="container">
          <div className="heading">Our <span>Special</span></div>
          <div className="row">
            <div className="col-md-6">
              <h3>What Makes Our Coffee Special</h3>
              <p style={{ color: "black" }}> we believe that every cup of coffee tells a story. Our journey began with a simple passion: to create a space where coffee enthusiasts, dreamers,
                and creatives could come together to savor the perfect cup.<span
                  id="dots">....</span><span id="invisible-text">
                  At the heart of .is a commitment to quality. Our beans are carefully sourced from the world's finest coffee-growing regions, ensuring each sip is a celebration of flavor. From the meticulous roasting process to the artful pour of our baristas,
                  we take pride in every step of the coffee-making journey.</span>
              </p>
              <button type="button" id="btn" className="btn btn-outline-secondary btn-lg" onClick={() => Moreless()}>Learn More</button>
            </div>

            <div className="col-md-6">
              <div className="card">
                <img src={data.homeabout} ></img>
              </div>
            </div>
          </div>
        </div>
      </div>




      <div id='home'>
        <div className="homecard" >
          <div>
            <Card >
              <Card.Img variant="top" src={data.hotcoffee} style={{ height: "300px" }} />
              <Card.Body>
                {/* <Card.Title className='card-title'>Hot Coffee</Card.Title> */}
                <Card.Title className='card-title'><Link to='/gallery' style={{ color: "black", textDecoration: "none" }}>Hot Coffee</Link></Card.Title>
                <Card.Text className='card-text'>
                "The  hot coffee heat, plus volatile aromatics (aromas that dissipate into the air as steam carries it away from the beverage), distract our senses enough so that it 'tastes' good at higher temperatures,
                </Card.Text>
              </Card.Body>

            </Card>
          </div>
          <div>
            <Card>
              <Card.Img variant="top" src={data.iced3} style={{ height: "300px" }} />
              <Card.Body>
                {/* <Card.Title>Iced Coffee</Card.Title> */}
                <Card.Title><Link to='/gallery' style={{ color: "black", textDecoration: "none" }}>Iced Coffee</Link></Card.Title>

                <Card.Text>
                  an iced coffee is a cold version of your favourite coffee, but it's not simply a coffee that has been left to cool. Like a regular coffee, it's usually a combination of hot espresso and milk. However, ice is added too.
                </Card.Text>
              </Card.Body>

            </Card>
          </div>
          <div>
            <Card>
              <Card.Img variant="top" src={data.milk} />
              <Card.Body >
                {/* <Card.Title>Coffee Milk Shake</Card.Title> */}
                <Card.Title className='card-title'><Link to='/gallery' style={{ color: "black", textDecoration: "none" }}>Coffee Milk Shake</Link></Card.Title>

                <Card.Text>
                  This  coffee shake recipe does not require a coffee maker but does require a blender to get the creamy, thick consistency you’d expect from a Frappuccino. I also make it extra dessert-y by adding an extra scoop
                </Card.Text>
              </Card.Body>

            </Card>
          </div>

        </div>

      </div>












    </div>
  )
}

export default CarouselComp
