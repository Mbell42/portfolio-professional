//DEPENDENCIES
import React from "react";
  //components
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

//COMPONENT
const Footer = () => {
  return (
    <MDBFooter color="secondary-color-dark" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          {/* Contact Details */}
          <MDBCol md="6">
            <h5 className="title">Matthew Bell</h5>
            <p>
              email: matthewbell1030@gmail.com
              <br />
              phone: 858-922-5440
            </p>
          </MDBCol>
          {/* End Contact Details */}
          
          {/* Links */}
          <MDBCol md="6">
            <h5 className="title text-center">Links</h5>
            <ul>
              <li className="list-unstyled">
              <a href="https://github.com/Mbell42" target="_blank" rel="noopener noreferrer">
                  <p className="text-center">
                      Github
                  </p>
                </a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.linkedin.com/in/matthew-bell-developer-artist/" target="_blank" rel="noopener noreferrer">
                  <p className="text-center">
                      LinkedIn
                  </p>
                </a>
              </li>
              <li className="list-unstyled">
                <a href="https://vimeo.com/matthewgbell" target="_blank" rel="noopener noreferrer">
                  <p className="text-center">
                      Vimeo
                  </p>
                </a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.imdb.com/name/nm7347199/?ref_=rvi_nm" target="_blank" rel="noopener noreferrer">
                  <p className="text-center">
                      IMDB
                  </p>
                </a>
              </li>
            </ul>
          </MDBCol>
          {/* End Links */}
        </MDBRow>
      </MDBContainer>
      
      {/* Copyright/Contact section */}
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
        <p className="text-center">
            matthewbell1030@gmail.com<br />phone: 858-922-5440
          </p>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;