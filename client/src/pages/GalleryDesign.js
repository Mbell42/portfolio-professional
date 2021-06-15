//DEPENDENCIES
import React from "react";
    //components
import BgImage from "../components/BgImage";
import { 
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBCardBody
} from "mdbreact";
    //styles
import './css/pages.css';
    //images
import portfolioDesign from "../images/projects/design/portfolioDesign.png";
import surveyForm from "../images/projects/design/surveyForm.png";
import technicalDoc from "../images/projects/design/technicalDocPHP.png";

//PAGE
const GalleryDESIGN = () => {
    return (
        <div className='pageContainer'>
            <BgImage>
            <MDBContainer className="mainContainer d-flex justify-content-center align-items-center">
                <MDBRow>
                    {/* Main column will contain about header, projects, descriptions, and calls to action */}
                    <MDBCol md='12' className='mb-4 white-text text-center'>
                
                        <h1 className="h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5">
                            Web Design Gallery
                        </h1>
                        <hr className='hr-light my-4' />
                        <h5 className="white-text font-weight-bold w-responsive mx-auto mb-5">
                            A collection of my past projects, including projects for FreeCodeCamp's Responsive Web Design course.  Click the images to view the deployed projects.
                        </h5>

                        {/* Projects Section */}
                        <MDBRow className="text-center flex-row">
                        {/* portfolio design project */}
                            <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                                <a href="https://steadfast-school.herokuapp.com/" target={"blank"}>
                                    <img
                                        src={portfolioDesign}
                                        alt="portfolio design"
                                        className="img-fluid rounded z-depth-2 projectImage"
                                    />
                                </a>
                                <MDBCardBody className="pb-0 mb-3">
                                    <h4 className="font-weight-bold my-2">Portfolio Design</h4>
                                    <p className="white-text mb-2">
                                        
                                    </p>
                                    <a href="https://github.com/Mbell42/ResponsiveWebDesigns-Portfolio-project" target={"blank"} className="gitLink"><MDBBtn gradient="purple">Github Link</MDBBtn></a>
                                </MDBCardBody>
                            </MDBCol>
                            {/* survey form project */}
                            <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                                <a href="https://steadfast-school.herokuapp.com/" target={"blank"}>
                                    <img
                                        src={surveyForm}
                                        alt="survey form design"
                                        className="img-fluid rounded z-depth-2 projectImage"
                                    />
                                </a>
                                <MDBCardBody className="pb-0 mb-3">
                                    <h4 className="font-weight-bold my-2">Survey Form Design</h4>
                                    <p className="white-text mb-2">
                                        
                                    </p>
                                    <a href="https://github.com/Mbell42/ResponsiveWebDesign-surveyForm-project" target={"blank"} className="gitLink"><MDBBtn gradient="purple">Github Link</MDBBtn></a>
                                </MDBCardBody>
                            </MDBCol>
                            {/* technical doc-PHP project */}
                            <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                                <a href="https://steadfast-school.herokuapp.com/" target={"blank"}>
                                    <img
                                        src={technicalDoc}
                                        alt="technical document design"
                                        className="img-fluid rounded z-depth-2 projectImage"
                                    />
                                </a>
                                <MDBCardBody className="pb-0 mb-3">
                                    <h4 className="font-weight-bold my-2">Technical Doc Design</h4>
                                    <p className="white-text mb-2">
                                        
                                    </p>
                                    <a href="https://github.com/Mbell42/ResponsiveWebDesigns-technicalDocument-PHP-project" target={"blank"} className="gitLink"><MDBBtn gradient="purple">Github Link</MDBBtn></a>
                                </MDBCardBody>
                            </MDBCol>
                        </MDBRow>
                        {/* End Projects Section */}
                    </MDBCol>
                </MDBRow>
                
            </MDBContainer>
            </BgImage>
        </div>
    );
}

export default GalleryDESIGN;