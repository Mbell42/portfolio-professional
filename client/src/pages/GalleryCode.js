//DEPENDENCIES
import React from "react";
    //components
import BgImage from "../components/BgImage";
import { MDBContainer,
    MDBRow,
    MDBCol,
    MDBCardBody,
} from "mdbreact";
    //styles
import './css/pages.css';
    //images
import currencyApp from "../images/projects/code/currencyAppSquare.png";
import dayScheduler from "../images/projects/code/day-scheduler-square.png";
import employeeSummary from "../images/projects/code/employee-summary-square.png";
import minutePage from "../images/projects/code/project2_minute-page-square.jpg";
import weatherDashboard from "../images/projects/code/weather-dashboard-square.png";
import randomPwGen from "../images/projects/code/randomPwGen-square.png";

//PAGE
const GalleryVFX = () => {
        return (
            <div className='pageContainer'>
                <BgImage>
                <MDBContainer className="mainContainer d-flex justify-content-center align-items-center">
                    <MDBRow>
                        {/* Main column will contain about header, text, and calls to action */}
                        <MDBCol md='12' className='mb-4 white-text text-center'>
                    
                            <h1 className="h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5">
                                Web Develepment Gallery
                            </h1>
                            <hr className='hr-light my-4' />
                            <h5 className="white-text font-weight-bold w-responsive mx-auto mb-5">
                                A collection of my past projects, including school projects.  Click the images to view the projects
                            </h5>

                            <MDBRow className="text-center flex-row">
                                <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                                    <a href="https://github.com/Mbell42/07_project-01" target="_blank" rel="noopener noreferrer">
                                        <img
                                            src={currencyApp}
                                            alt="Currency App"
                                            className="img-fluid rounded z-depth-2"
                                        /> 
                                    </a>
                                    
                                    <MDBCardBody className="pb-0">
                                        <h4 className="font-weight-bold my-2">School Project 1 - CurrencyExchangePro</h4>
                                        <p className="white-text mb-5">
                                            This is my first group project for class.  My team built a 
                                            currency-app that can convert any currency into another 
                                            currency, store/display your search history, and send a 
                                            text message of the most recent search details.
                                        </p>
                                    </MDBCardBody>
                                </MDBCol>

                                <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                                    <a href="https://github.com/Mbell42/06_weather-dashboard" target={"blank"}>
                                        <img
                                            src={weatherDashboard}
                                            alt="Weather Dashboard"
                                            className="img-fluid rounded z-depth-2"
                                        /> 
                                    </a>
                                    <MDBCardBody className="pb-0 mb-3">
                                        <h4 className="font-weight-bold my-2">Weather<br />Dashboard</h4>
                                        <p className="white-text mb-5">
                                            This is my sixth homework project.  I made a weather dashboard 
                                            that will display current and forecast weather data using API 
                                            requests.  The current weather data is displayed in the top right, 
                                            and the forecast data for five days is shown below.
                                        </p>
                                    </MDBCardBody>
                                </MDBCol>

                                <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                                    <a href="https://github.com/Mbell42/05_work-day-scheduler" target={"blank"}>
                                        <img
                                            src={dayScheduler}
                                            alt="Day Scheduler"
                                            className="img-fluid rounded z-depth-2"
                                        />
                                    </a>
                                    <MDBCardBody className="pb-0 mb-3">
                                        <h4 className="font-weight-bold my-2">Work Day<br />Scheduler</h4>
                                        <p className="white-text mb-5">
                                            This is my fifth homework project. I Created a simple calendar 
                                            application that allows the user to save events for each hour 
                                            of the day. This app will run in the browser and feature dynamically 
                                            updated HTML and CSS powered by jQuery.
                                        </p>
                                    </MDBCardBody>
                                </MDBCol>

                                <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                                    <a href="https://github.com/Mbell42/project2" target={"blank"}>
                                        <img
                                            src={minutePage}
                                            alt="Minute Page"
                                            className="img-fluid rounded z-depth-2"
                                        />
                                    </a>
                                    <MDBCardBody className="pb-0 mb-3">
                                        <h4 className="font-weight-bold my-2">School Project 2 - Minute Page</h4>
                                        <p className="white-text mb-5">
                                            This is the second group project for my class. My Team created a landing page 
                                            generator using NodeJs, Express, and MySQL.  Users can login, and quickly 
                                            create landing pages that are bound to their user account.
                                        </p>
                                    </MDBCardBody>
                                </MDBCol>

                                <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                                    <a href="https://github.com/Mbell42/generator-pw-random" target={"blank"}>
                                        <img
                                            src={randomPwGen}
                                            alt="Random Password Generator"
                                            className="img-fluid rounded z-depth-2"
                                        />
                                    </a>
                                    <MDBCardBody className="pb-0 mb-3">
                                        <h4 className="font-weight-bold my-2">Random Password Generator</h4>
                                        <p className="white-text mb-5">
                                            This is my third homework project. I Created a simple random password generator 
                                            that allows the user to save the created password to their clipboard.
                                        </p>
                                    </MDBCardBody>
                                </MDBCol>
                                    
                                <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                                    <a href="https://github.com/Mbell42/10_TemplateEngine-EmployeeSummary" target={"blank"}>
                                        <img
                                            src={employeeSummary}
                                            alt="Emplyee Summary"
                                            className="img-fluid rounded z-depth-2"
                                        /> 
                                    </a>
                                    <MDBCardBody className="pb-0 mb-3">
                                        <h4 className="font-weight-bold my-2">TemplateEngine-EmployeeSummary</h4>
                                        <p className="white-text mb-5">
                                            This is my tenth homework project.  I Created a a Node CLI that takes 
                                            in information about employees and generates an HTML webpage that 
                                            displays summaries for each person.
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