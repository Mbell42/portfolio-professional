//DEPENDENCIES
import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput } from "mdbreact";
import '../App.js'
import './css/pages.css';

//PAGE
class Contact extends React.Component {
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
            <MDBContainer className="contactContainer">
                <section className="my-5">
                    <h2 className="h1-responsive font-weight-bold text-center my-5">
                    Contact me
                    </h2>
                    <p className="text-center w-responsive mx-auto pb-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                    error amet numquam iure provident voluptate esse quasi, veritatis
                    totam voluptas nostrum quisquam eum porro a pariatur veniam.
                    </p>
                    <MDBRow>
                    <MDBCol lg="5" className="lg-0 mb-4">
                        <MDBCard>
                        <MDBCardBody>
                            <div className="form-header indigo accent-1">
                            <h3 className="mt-2">
                                <MDBIcon icon="envelope" /> Send me a message:
                            </h3>
                            </div>
                            <p className="font-small dark-grey-text">
                            If you have a project you would like to collaborate on, write me!
                            </p>
                            <div className="md-form">
                            <MDBInput
                                icon="user"
                                label="Your name"
                                iconClass="grey-text"
                                type="text"
                                id="form-name"
                            />
                            </div>
                            <div className="md-form">
                            <MDBInput
                                icon="envelope"
                                label="Your email"
                                iconClass="grey-text"
                                type="text"
                                id="form-email"
                            />
                            </div>
                            <div className="md-form">
                            <MDBInput
                                icon="tag"
                                label="Subject"
                                iconClass="grey-text"
                                type="text"
                                id="form-subject"
                            />
                            </div>
                            <div className="md-form">
                            <MDBInput
                                icon="pencil-alt"
                                label="Message"
                                iconClass="grey-text"
                                type="textarea"
                                id="form-text"
                            />
                            </div>
                            <div className="text-center">
                            <MDBBtn color="indigo">Submit</MDBBtn>
                            </div>
                        </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol lg="7">
                        <div
                        id="map-container"
                        className="rounded z-depth-1-half map-container"
                        style={{ height: "400px" }}
                        >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d76765.98321148289!2d-117.0147!3d32.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1525939514494"
                            title="La Mesa"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            style={{ border: 0 }}
                        />
                        </div>
                        <br />
                        <MDBRow className="text-center">
                        <MDBCol md="4">
                            <MDBBtn tag="a" color="indigo" className="accent-1">
                            <MDBIcon icon="map-marker-alt" />
                            </MDBBtn>
                            <p>La Mesa, 91942</p>
                            <p className="mb-md-0">United States</p>
                        </MDBCol>
                        <MDBCol md="4">
                            <MDBBtn tag="a" color="indigo" className="accent-1">
                            <MDBIcon icon="phone" />
                            </MDBBtn>
                            <p>+ 01 858 922 5440</p>
                            <p className="mb-md-0">Mon - Fri, 8:00-20:00</p>
                        </MDBCol>
                        <MDBCol md="4">
                            <MDBBtn tag="a" color="indigo" className="accent-1">
                            <MDBIcon icon="envelope" />
                            </MDBBtn>
                            <p>matthewbell1030@gmail.com</p>
                            
                        </MDBCol>
                        </MDBRow>
                    </MDBCol>
                    </MDBRow>
                </section>
            </MDBContainer>
        );
    }   
}

export default Contact;