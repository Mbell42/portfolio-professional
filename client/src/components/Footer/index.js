import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="secondary-color-dark" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Matthew Bell</h5>
            <p>
              email: matthewbell1030@gmail.com
              <br />
              phone: 858-922-5440
            </p>
          </MDBCol>
          
          <MDBCol md="6">
            <h5 className="title text-center">Links</h5>
            <ul>
              <li className="list-unstyled">
              <a href="https://github.com/Mbell42" target="_blank">
                  <p class="text-center">
                      Github Profile
                  </p>
                </a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.linkedin.com/in/matthew-bell-developer-artist/" target="_blank">
                  <p class="text-center">
                      LinkedIn Profile
                  </p>
                </a>
              </li>
              <li className="list-unstyled">
                <a href="https://vimeo.com/matthewgbell" target="_blank">
                  <p class="text-center">
                      Vimeo Reel
                  </p>
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
        <p class="text-center">
            matthewbell1030@gmail.com<br />phone: 858-922-5440
          </p>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;