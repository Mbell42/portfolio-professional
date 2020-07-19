//DEPENDENCIES
import React from "react";
    //components
import BgImage from "../components/BgImage";
import { MDBContainer, MDBRow, MDBCol, MDBCardBody, MDBView, MDBMask } from "mdbreact";
    //styles
import './css/pages.css';
    //images
import antman from "../images/projects/vfx/antman.jpg"
import poltergeist from "../images/projects/vfx/poltergeist.jpg"
import theWalk from "../images/projects/vfx/theWalk.jpg"
import insurgent from "../images/projects/vfx/insurgent.jpg"

//PAGE
const GalleryVFX = () => {
        return (
            <div className='pageContainer'>
            <BgImage>
            <MDBContainer className="mainContainer mainContainer d-flex justify-content-center align-items-center">
                <MDBRow>
                    {/* Main column will contain about header, text, and calls to action */}
                    <MDBCol md='12' className='mb-4 white-text text-center'>
                        <h1 className="h1-responsive font-weight-bold my-5">
                            VFX Gallery
                        </h1>
                        <h5 className="white-text  font-weight-bold w-responsive mx-auto mb-5">
                            Some of the best VFX projects I have had the pleasure to take part in.    Click the images to view the projects
                        </h5>

                        <MDBRow className="text-center">
                            <MDBCol lg="3"></MDBCol>
                            <MDBCol lg="6" md="12" className="mb-lg-0 mb-4">
                                <a href="https://www.imdb.com/title/tt0478970/">     
                                    <MDBView className="overlay rounded z-depth-1" waves>
                                        <MDBMask overlay="white-slight" />
                                        <img
                                            src={antman}
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </MDBView>
                                </a>
                                <MDBCardBody className="pb-0">
                                    <h4 className="font-weight-bold my-3">Antman (2015)</h4>
                                    <p className="white-text">
                                        Provided VFX and Stereoscopic VFX compositing for 2D and 3D. 
                                    </p>
                                </MDBCardBody>
                            </MDBCol>
                            <MDBCol lg="3"></MDBCol>

                            <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                                <a href="https://www.imdb.com/title/tt1029360/">
                                    <MDBView className="overlay rounded z-depth-1" waves>
                                        <MDBMask overlay="white-slight" />
                                        <img
                                            src={poltergeist}
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </MDBView>
                                </a>
                                <MDBCardBody className="pb-0">
                                    <h4 className="font-weight-bold my-3">Poltergeist (2016)</h4>
                                    <p className="white-text">
                                        Provided VFX and Stereoscopic VFX compositing for 2D and 3D. 
                                    </p>
                                </MDBCardBody>
                            </MDBCol>

                            <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                                <a href="https://www.imdb.com/title/tt2908446/">
                                    <MDBView className="overlay rounded z-depth-1" waves>
                                        <MDBMask overlay="white-slight" />
                                        <img
                                            src={insurgent}
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </MDBView>
                                </a>
                                <MDBCardBody className="pb-0">
                                    <h4 className="font-weight-bold my-3">Divergent Series: Insurgent (2015)</h4>
                                    <p className="white-text">
                                        Provided VFX and Stereoscopic VFX compositing for 2D and 3D. 
                                    </p>
                                </MDBCardBody>
                            </MDBCol>

                            <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                                <a href="https://www.imdb.com/title/tt3488710/"> 
                                    <MDBView className="overlay rounded z-depth-1" waves>
                                        <MDBMask overlay="white-slight" />
                                        <img
                                            src={theWalk}
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </MDBView>
                                </a>
                                <MDBCardBody className="pb-0">
                                    <h4 className="font-weight-bold my-3">The Walk (2015)</h4>
                                    <p className="white-text">
                                        Provided VFX and Stereoscopic VFX compositing for 2D and 3D. 
                                    </p>
                                </MDBCardBody>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
                
            </MDBContainer>
            </BgImage>
            </div>
        );
    }

export default GalleryVFX;