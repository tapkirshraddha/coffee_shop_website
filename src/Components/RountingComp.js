import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavComp from './NavComp'
import '../shared/css/external.css'
import CarouselComp from './CarouselComp'
import FooterComp from './FooterComp'
import AboutComp from './AboutComp'
import GalleryComp from './GalleryComp'
import ServicesComp from './ServicesComp'
import Contact from './Contact'
import SignIn from './SignIn'
import SignUp from './SignUp'
import Form from './Form'



const RountingComp = () => {
    return (
        <div>
            <BrowserRouter>

                <div className='container-fluid'>
                    <div className='card border-black ' >
                        <div className='card-header' id='header' >
                            <NavComp />

                        </div>
                        <div className='card-body'>
                            <Routes>
                                <Route path='' element={<CarouselComp />}></Route>

                                <Route path='carousel' element={<CarouselComp />}></Route>
                                <Route path='about' element={<AboutComp />}></Route>
                                <Route path='gallery' element={<GalleryComp />}></Route>

                                <Route path='service' element={<ServicesComp />}></Route>
                                <Route path='contact' element={<Contact />}></Route>

                                <Route path='link' element={<Form />}>
                                    <Route path='' element={<SignIn />}></Route>
                                    <Route path='signin' element={<SignIn />}></Route>
                                    <Route path='signup' element={<SignUp />}></Route>


                                </Route>
                            </Routes>
                        </div>
                        <div className='card-footer'>
                            <FooterComp />
                        </div>

                    </div>
                </div>

            </BrowserRouter>

        </div>
    )
}

export default RountingComp
