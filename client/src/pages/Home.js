//DEPENDENCIES
import React from 'react';
  //components
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer
} from 'mdbreact';
// import '../App.js'

//styles
import './css/pages.css';
  //images
import mbSquare from "../images/portrait/mbSquare.jpg";
import beachSunset from "../images/stock-free-images/joe-desousa/beach-sunset.jpg";
import mountainPass from "../images/stock-free-images/guillaume-briard/mountain-pass.jpg";
import mountainRangeDay from "../images/stock-free-images/jerry-zhang/mountain-range-day.jpg";
import mountainRangeNight from "../images/stock-free-images/benjamin-voros/mountain-range-night.jpg";

//PAGE
const Home = () => {
    return (
      <div id='minimalistintro'>
        {/* Background image */}
        {/* <MDBView src={beachSunset}> */}
        {/* <MDBView src={mountainPass}> */}
        {/* <MDBView src={mountainRangeDay}> */}
        <MDBView src={mountainRangeNight}>

          <MDBMask className='rgba-black-light' />
          <MDBContainer className='homeContainer d-flex justify-content-center align-items-center'>
            <MDBRow>
                {/* Left column will contain intro header, text, and call to action */}
                <MDBCol md='8' className='mb-4 white-text text-center'>
                    <h1 className='h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 '>
                        Matthew Bell
                    </h1>
                    <hr className='hr-light my-4' />
                    <h4 className='text-uppercase mb-4 white-text '>
                        <strong>Web Design and VFX</strong>
                    </h4>
                    <p>
                      Full Stack Web Developer with a background in 3D Animation and VFX 
                      with 4 years of experience in film and mobile video game production. 
                      I learn new skills quickly, with the ability to pivot and take on new 
                      challenges. I am seeking a transition into Web and Software Development.
                    </p>
                    <MDBBtn outline color='white'><a href="/about">Read More</a></MDBBtn>
                    <MDBBtn outline color='white'><a href="/contact">Contact Me</a></MDBBtn>
                    
                </MDBCol>
                {/* Right Column will contain image */}
                <MDBCol md='4' className='mb-4'>
                    {/* <h5 className="white-text text-center">Image Here</h5> */}
                    <img src={mbSquare} alt="Matthew Bell" className="img-fluid" height="350px" />
                </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>
      </div>
    );
  }

export default Home;