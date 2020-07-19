//DEPENDENCIES
import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCardBody, MDBView, MDBMask } from "mdbreact";
import '../App.js'
import './css/pages.css';

    //image imports
import currencyApp from "../images/projects/code/currencyAppSquare.png";
import dayScheduler from "../images/projects/code/day-scheduler-square.png";
import employeeSummary from "../images/projects/code/employee-summary-square.png";
import minutePage from "../images/projects/code/project2_minute-page-square.jpg";
import weatherDashboard from "../images/projects/code/weather-dashboard-square.png";
import randomPwGen from "../images/projects/code/randomPwGen-square.png";

//PAGE
const GalleryVFX = () => {
        return (
            <MDBContainer className="galleryCodeContainer">
                <section className="text-center my-5">
                    <h2 className="h1-responsive font-weight-bold my-5">
                        Web Develepment Gallery
                    </h2>
                    <p className="grey-text w-responsive mx-auto mb-5">
                        A collection of my past projects, including school projects.  Click the images to view the projects
                    </p>

                    <MDBRow className="text-center">
                        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                        <MDBView className="overlay rounded z-depth-1" waves>
                            <img
                            src={currencyApp}
                            alt=""
                            className="img-fluid"
                            />
                            <a href="https://github.com/Mbell42/07_project-01" target={"blank"}>
                                <MDBMask overlay="white-slight" />
                            </a>
                        </MDBView>
                        <MDBCardBody className="pb-0">
                            <h4 className="font-weight-bold my-3">CurrencyExchangePro</h4>
                            <p className="grey-text">
                                This is my first group project for class.  My team built a 
                                currency-app that can convert any currency into another 
                                currency, store/display your search history, and send a 
                                text message of the most recent search details.
                            </p>
                        </MDBCardBody>
                        </MDBCol>

                        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                        <MDBView className="overlay rounded z-depth-1" waves>
                            <img
                            src={weatherDashboard}
                            alt=""
                            className="img-fluid"
                            />
                            <a href="https://github.com/Mbell42/06_weather-dashboard" target={"blank"}>
                                <MDBMask overlay="white-slight" />
                            </a>
                        </MDBView>
                        <MDBCardBody className="pb-0">
                            <h4 className="font-weight-bold my-3">Weather Dashboard</h4>
                            <p className="grey-text">
                                This is my sixth homework project.  I made a weather dashboard 
                                that will display current and forecast weather data using API 
                                requests.  The current weather data is displayed in the top right, 
                                and the forecast data for five days is shown below.
                            </p>
                        </MDBCardBody>
                        </MDBCol>

                        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                        <MDBView className="overlay rounded z-depth-1" waves>
                            <img
                            src={dayScheduler}
                            alt=""
                            className="img-fluid"
                            />
                            <a href="https://github.com/Mbell42/05_work-day-scheduler" target={"blank"}>
                                <MDBMask overlay="white-slight" />
                            </a>
                        </MDBView>
                        <MDBCardBody className="pb-0">
                            <h4 className="font-weight-bold my-3">Work Day Scheduler</h4>
                            <p className="grey-text">
                                This is my fifth homework project. I Created a simple calendar 
                                application that allows the user to save events for each hour 
                                of the day. This app will run in the browser and feature dynamically 
                                updated HTML and CSS powered by jQuery.
                            </p>
                        </MDBCardBody>
                        </MDBCol>

                        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                        <MDBView className="overlay rounded z-depth-1" waves>
                            <img
                            src={minutePage}
                            alt=""
                            className="img-fluid"
                            />
                            <a href="https://github.com/Mbell42/project2" target={"blank"}>
                                <MDBMask overlay="white-slight" />
                            </a>
                        </MDBView>
                        <MDBCardBody className="pb-0">
                            <h4 className="font-weight-bold my-3">School Project 2 - Minute Page</h4>
                            <p className="grey-text">
                                This is the second group project for my class. My Team created a landing page 
                                generator using NodeJs, Express, and MySQL.  Users can login, and quickly 
                                create landing pages that are bound to their user account.
                            </p>
                        </MDBCardBody>
                        </MDBCol>

                        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                        <MDBView className="overlay rounded z-depth-1" waves>
                            <img
                            src={randomPwGen}
                            alt=""
                            className="img-fluid"
                            />
                            <a href="https://github.com/Mbell42/generator-pw-random" target={"blank"}>
                                <MDBMask overlay="white-slight" />
                            </a>
                        </MDBView>
                        <MDBCardBody className="pb-0">
                            <h4 className="font-weight-bold my-3">Random Password Generator</h4>
                            <p className="grey-text">
                                This is my third homework project. I Created a simple random password generator 
                                that allows the user to save the created password to their clipboard.
                            </p>
                        </MDBCardBody>
                        </MDBCol>
                        
                        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                        <MDBView className="overlay rounded z-depth-1" waves>
                            <img
                            src={employeeSummary}
                            alt=""
                            className="img-fluid"
                            />
                            <a href="https://github.com/Mbell42/10_TemplateEngine-EmployeeSummary" target={"blank"}>
                                <MDBMask overlay="white-slight" />
                            </a>
                        </MDBView>
                        <MDBCardBody className="pb-0">
                            <h4 className="font-weight-bold my-3">TemplateEngine-EmployeeSummary</h4>
                            <p className="grey-text">
                                This is my tenth homework project.  I Created a a Node CLI that takes 
                                in information about employees and generates an HTML webpage that 
                                displays summaries for each person.
                            </p>
                        </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                </section>
            </MDBContainer>
        );
    }

export default GalleryVFX;