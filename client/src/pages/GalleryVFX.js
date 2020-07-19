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
            <MDBContainer className="mainContainer">
                <section className="text-center my-5">
                    <h2 className="h1-responsive font-weight-bold my-5">
                        VFX Gallery
                    </h2>
                    <p className="grey-text w-responsive mx-auto mb-5">
                        Some of the best VFX projects I have had the pleasure to take part in.    Click the images to view the projects
                    </p>

                    <MDBRow className="text-center">
                        <MDBCol lg="3"></MDBCol>
                        <MDBCol lg="6" md="12" className="mb-lg-0 mb-4">
                            <MDBView className="overlay rounded z-depth-1" waves>
                                <img
                                src={antman}
                                alt=""
                                className="img-fluid"
                                />
                                <a href="https://www.imdb.com/title/tt0478970/">
                                    <MDBMask overlay="white-slight" />
                                </a>
                            </MDBView>
                            <MDBCardBody className="pb-0">
                                <h4 className="font-weight-bold my-3">Antman (2015)</h4>
                                <p className="grey-text">
                                    Provided VFX and Stereoscopic VFX compositing for 2D and 3D. 
                                </p>
                            </MDBCardBody>
                        </MDBCol>
                        <MDBCol lg="3"></MDBCol>

                        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                            <MDBView className="overlay rounded z-depth-1" waves>
                                <img
                                src={poltergeist}
                                alt=""
                                className="img-fluid"
                                />
                                <a href="https://www.imdb.com/title/tt1029360/">
                                    <MDBMask overlay="white-slight" />
                                </a>
                            </MDBView>
                            <MDBCardBody className="pb-0">
                                <h4 className="font-weight-bold my-3">Poltergeist (2016)</h4>
                                <p className="grey-text">
                                    Provided VFX and Stereoscopic VFX compositing for 2D and 3D. 
                                </p>
                            </MDBCardBody>
                        </MDBCol>

                        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                            <MDBView className="overlay rounded z-depth-1" waves>
                                <img
                                src={insurgent}
                                alt=""
                                className="img-fluid"
                                />
                                <a href="https://www.imdb.com/title/tt2908446/">
                                    <MDBMask overlay="white-slight" />
                                </a>
                            </MDBView>
                            <MDBCardBody className="pb-0">
                                <h4 className="font-weight-bold my-3">Divergent Series: Insurgent (2015)</h4>
                                <p className="grey-text">
                                    Provided VFX and Stereoscopic VFX compositing for 2D and 3D. 
                                </p>
                            </MDBCardBody>
                        </MDBCol>

                        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                            <MDBView className="overlay rounded z-depth-1" waves>
                                <img
                                src={theWalk}
                                alt=""
                                className="img-fluid"
                                />
                                <a href="https://www.imdb.com/title/tt3488710/">
                                    <MDBMask overlay="white-slight" />
                                </a>
                            </MDBView>
                            <MDBCardBody className="pb-0">
                                <h4 className="font-weight-bold my-3">The Walk (2015)</h4>
                                <p className="grey-text">
                                    Provided VFX and Stereoscopic VFX compositing for 2D and 3D. 
                                </p>
                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                </section>
            </MDBContainer>
            </BgImage>
            </div>
        );
    }

export default GalleryVFX;