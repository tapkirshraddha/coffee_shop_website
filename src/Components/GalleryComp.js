import React from 'react'
import data from '../shared/constant/constantdata'
import '../shared/css/external.css'
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';




const GalleryComp = () => {
    return (
        <div>
     <section id="gallery">
                <div className="content">
                    <h3> Our Menu</h3>
                    <p>After all that is said and done, remember, the universe is yours to unfold. You belong here,
                        with us. Take a deep breath and indulge in a warm cup of Coffee
                        enjoy the small pleasures of life.
                    </p>
                </div>
            </section>
     <section className="menu" id="menu">
      <div className="container">
        <div className="heading3">Menu</div>
      </div>
      <div className="container" id="container2">
        <div className="row">
          <div className="col-md-3 py-3 py-md-0">
            <div className="card">
            <img src={data.hot} style={{width:"100%",height:"40vh"}} ></img>
              <div className="card-body"> 
               <div className="star text-center">
                  <StarOutlinedIcon/>
                  <StarOutlinedIcon/>
                  <StarOutlinedIcon/>
                  <StarOutlinedIcon/>
                  <StarOutlinedIcon/>
                </div>
                <h3> Cold Brew Coffee</h3>
                <p>₹90 <del>₹110</del> <span><i className="bi bi-cart3"></i></span></p>
              </div>
            </div>
          </div>
          <div className="col-md-3 py-3 py-md-0">
            <div className="card">
            <img src={data.Cold} style={{width:"100%",height:"40vh"}} ></img>
              <div className="card-body">
                <div className="star text-center">
                <StarOutlinedIcon/>
                  <StarOutlinedIcon/>
                  <StarOutlinedIcon/>
                  <StarOutlinedIcon/>
                  <StarOutlinedIcon/>

                </div>
                <h3> Frappe Coffee</h3>
                <p>₹90 <del>₹110</del> <span><i className="bi bi-cart3"></i></span></p>
              </div>
            </div>
          </div>
          <div className="col-md-3 py-3 py-md-0">
            <div className="card">
            <img src={data.fraccino} style={{width:"100%",height:"40vh"}} ></img>
              <div className="card-body">
                <div className="star text-center">
                <StarOutlinedIcon/>
                  <StarOutlinedIcon/>
                  <StarOutlinedIcon/>
                  <StarOutlinedIcon/>
                  <StarOutlinedIcon/>
                </div>
                <h3> Mocha Coffee</h3>
                <p>₹100 <del>₹200</del> <span><i className="bi bi-cart3"></i></span></p>
              </div>
            </div>
          </div>
          <div className="col-md-3 py-3 py-md-0">
            <div className="card">
            <img src={data.menu1} style={{width:"100%",height:"40vh"}} ></img>
              <div className="card-body">
                <div className="star text-center">
                <StarOutlinedIcon/>
                  <StarOutlinedIcon/>
                  <StarOutlinedIcon/>
                  <StarOutlinedIcon/>
                  <StarOutlinedIcon/>
                </div>
                <h3> Irish Coffee</h3>
                <p>₹120 <del>₹150</del> <span><i className="bi bi-cart3"></i></span></p>
              </div>
            </div>
          </div>
        </div>

        <div className="row" style={{marginTop:"50px"}}>
         <div className="col-md-3 py-3 py-md-0">
            <div className="card">
            <img src={data.menu2} style={{width:"100%",height:"40vh"}} ></img>
              <div className="card-body">
                <div className="star text-center">
                <StarOutlinedIcon/>
                  <StarOutlinedIcon/>
                  <StarOutlinedIcon/>
                  <StarOutlinedIcon/>
                  <StarOutlinedIcon/>
                </div>
                <h3>Decaf Coffee</h3>
                <p>₹200 <del>₹300</del> <span><i className="bi bi-cart3"></i></span></p>
              </div>
            </div>
          </div>
          <div className="col-md-3 py-3 py-md-0">
            <div className="card">
            <img src={data.menu3} style={{width:"100%",height:"40vh"}} ></img>
              <div className="card-body">
                <div className="star text-center">
                <StarOutlinedIcon/>
                  <StarOutlinedIcon/>
                  <StarOutlinedIcon/>
                  <StarOutlinedIcon/>
                  <StarOutlinedIcon/>
                </div>
                <h3> Black Coffee </h3>
                <p>₹110 <del>₹50</del> <span><i className="bi bi-cart3"></i></span></p>
              </div>
            </div>
          </div>
          <div className="col-md-3 py-3 py-md-0">
            <div className="card">
            <img src={data.menu4} style={{width:"100%",height:"40vh"}} ></img>
              <div className="card-body">
                <div className="star text-center">
                <StarOutlinedIcon/>
                  <StarOutlinedIcon/>
                  <StarOutlinedIcon/>
                  <StarOutlinedIcon/>
                  <StarOutlinedIcon/>
                </div>
                <h3> Cappuccino Coffee</h3>
                <p>₹100 <del>₹200</del> <span><i className="bi bi-cart3"></i></span></p>
              </div>
            </div>
          </div>
          <div className="col-md-3 py-3 py-md-0">
            <div className="card">
            <img src={data.serivces9} style={{width:"100%",height:"40vh"}} ></img>
              <div className="card-body">
                <div className="star text-center">
                <StarOutlinedIcon/>
                  <StarOutlinedIcon/>
                  <StarOutlinedIcon/>
                  <StarOutlinedIcon/>
                  <StarOutlinedIcon/>
                </div>
                <h3> Americano Coffee</h3>
                <p>₹120 <del>₹150</del> <span><i className="bi bi-cart3"></i></span></p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
            
        </div>
    )
}

export default GalleryComp

