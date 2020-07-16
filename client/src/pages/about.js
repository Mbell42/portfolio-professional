//DEPENDENCIES
import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer
} from 'mdbreact';

import '../App.js'
import './css/pages.css';

//PAGE
class About extends React.Component {
  state = {
    collapsed: false
  };

  handleTogglerClick = () => {
    const { collapsed } = this.state;

    this.setState({
      collapsed: !collapsed
    });
  };

  render() {
    const { collapsed } = this.state;

    return (
      <div id='minimalistintro'>
        <MDBView src='https://mdbootstrap.com/img/Photos/Others/img%20%2848%29.jpg'>
          <MDBMask className='rgba-black-light' />
          <MDBContainer className='aboutContainer d-flex justify-content-center align-items-center'>
            <MDBRow>
                {/* Main column will contain about header, text, and calls to action */}
                <MDBCol md='12' className='mb-4 white-text text-center'>
                    <h1 className='h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 '>
                        About Me
                    </h1>
                    <hr className='hr-light my-4' />
                    <h4 className='text-uppercase mb-4 white-text '>
                        <strong>Web Design and VFX</strong>
                    </h4>
                    <p>
                      I am a Full Stack Web Developer with a background in 3D Animation and VFX 
                      with 4 years of experience in film and mobile video game production.  
                      Graduate of UCSD Coding Bootcamp, with skills in HTML, CSS, NodeJS, 
                      MongoDB, Express, React, and NodeJS.  I enjoy working in a challenging environment and I mesh well 
                      with any size team.
                    </p>
                    <MDBBtn outline color='white'><a href="/contact">Contact Me</a></MDBBtn>
                    <MDBBtn outline color='white'><a href="/gallery_code">Web Development Gallery</a></MDBBtn>
                    <MDBBtn outline color='white'><a href="/gallery_vfx">VFX Gallery</a></MDBBtn>
                    
                </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>
      </div>
    );
  }
}

export default About;