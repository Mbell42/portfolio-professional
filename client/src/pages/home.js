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
class Home extends React.Component {
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
                    <MDBBtn outline color='white'>About Me</MDBBtn>
                    <MDBBtn outline color='white'>Contact Me</MDBBtn>
                    
                </MDBCol>
                {/* Right Column will contain image */}
                <MDBCol md='4' className='mb-4'>
                    <h5 className="white-text text-center">Image Here</h5>
                    <img src="https://mdbootstrap.com/img/Others/documentation/1.jpg" className="img-fluid" alt="" />
                </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>
      </div>
    );
  }
}

export default Home;