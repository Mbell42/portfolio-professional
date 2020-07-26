//DEPENDENCIES
import React, { Component } from "react";
import axios from "axios";
    //components
import BgImage from "../components/BgImage";
import { 
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBIcon,
    MDBBtn,
    MDBInput } from "mdbreact";
    //styles
import './css/pages.css';

//PAGE
class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            subject: "",
            message: "",
        }
    }

    resetForm(){
        this.setState({name: "", email: "", subject: "", message: ""});
        console.log(this.state);
    };
    handleSubmit(e){
        e.preventDefault();
        console.log(this.state);

        axios({
            method: "POST", 
            url: "/send",
            data: this.state
        })
        .then((response)=>{
            console.log(response);
            if (response.data.status === "success"){
                alert("Message Sent."); 
                this.resetForm()
            }else if(response.data.status === "fail"){
                alert("Message Failed to Send.")
            }
        })
    };
    
    render() {
        return (
            <div className='pageContainer'>
                <BgImage>
                    <MDBContainer className="mainContainer d-flex justify-content-center align-items-center">
                        <MDBRow>
                            {/* Main column will contain about header, text, and calls to action */}
                            {/* Header */}
                            <MDBCol md='12' className='mb-4 white-text '>
                                <h1 className="h1-reponsive text-center white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5">
                                    Contact me
                                </h1>
                                <hr className='hr-light my-4' />
                                <h5 className="text-center font-weight-bold white-text w-responsive mx-auto pb-5">
                                    If you have any questions, or would like to collaborate on a project,
                                    please let me know!
                                </h5>
                                <MDBRow>
                                    {/* Form Section */}
                                    <MDBCol lg="5" className="lg-0 mb-4">
                                        <MDBCard>
                                            {/* Form Header */}
                                            <MDBCardBody>
                                                <div className="text-center form-header indigo accent-1">
                                                    <h3 className="mt-2">
                                                        <MDBIcon icon="envelope" /> Send me a message:
                                                    </h3>
                                                </div>
                                                <p className="text-center font-small dark-grey-text">
                                                    I will return your message as soon as possible.
                                                </p>
                                                {/* Form Input */}
                                                <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST"> 
                                                    <div className="md-form form-group">
                                                        <MDBInput
                                                            className="form-control"
                                                            icon="user"
                                                            label="Your name"
                                                            iconClass="grey-text"
                                                            type="text"
                                                            value={this.state.name}
                                                            onChange={this.onNameChange.bind(this)}
                                                            id="form-name"                                                        
                                                        />
                                                    </div>
                                                    <div className="md-form form-group">
                                                        <MDBInput
                                                            className="form-control"
                                                            icon="envelope"
                                                            label="Your email"
                                                            iconClass="grey-text"
                                                            type="email"
                                                            value={this.state.email}
                                                            onChange={this.onEmailChange.bind(this)}
                                                            id="form-email"
                                                        />
                                                    </div>
                                                    <div className="md-form form-group">
                                                        <MDBInput
                                                            className="form-control"
                                                            icon="tag"
                                                            label="Subject"
                                                            iconClass="grey-text"
                                                            type="text"
                                                            value={this.state.subject}
                                                            onChange={this.onSubjectChange.bind(this)}
                                                            id="form-subject"
                                                        />
                                                    </div>
                                                    <div className="md-form form-group">
                                                        <MDBInput
                                                            className="form-control"
                                                            icon="pencil-alt"
                                                            label="Message"
                                                            iconClass="grey-text"
                                                            type="textarea"
                                                            rows="5"
                                                            value={this.state.message}
                                                            onChange={this.onMessageChange.bind(this)}
                                                            id="form-text"   
                                                        />
                                                    </div>
                                                    <div className="text-center">
                                                        <MDBBtn gradient="peach" type="submit">Submit</MDBBtn>
                                                    </div>
                                                </form>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>
                                    {/* Map Section */}
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
                                        {/* Location Details */}
                                        <MDBRow className="text-center">
                                        <MDBCol md="4">
                                            <MDBBtn tag="a" color="indigo" className="accent-1">
                                            <MDBIcon icon="map-marker-alt" />
                                            </MDBBtn>
                                            <p className="white-text"><small>La Mesa, 91942</small></p>
                                            <p className="mb-md-0 white-text"><small>United States</small></p>
                                        </MDBCol>
                                        <MDBCol md="4">
                                            <MDBBtn tag="a" color="indigo" className="accent-1">
                                            <MDBIcon icon="phone" />
                                            </MDBBtn>
                                            <p className="white-text"><small>+ 01 858 922 5440</small></p>
                                            <p className="mb-md-0  white-text"><small>Mon - Fri, 8:00-20:00</small></p>
                                        </MDBCol>
                                        <MDBCol md="4">
                                            <MDBBtn tag="a" color="indigo" className="accent-1">
                                            <MDBIcon icon="envelope" />
                                            </MDBBtn>
                                            <p className="white-text"><small>matthewbell1030@gmail.com</small></p>
                                            
                                        </MDBCol>
                                        </MDBRow>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </BgImage>
            </div>
        );
    }  
    onNameChange(event) {
        this.setState({name: event.target.value})
    }
    onEmailChange(event) {
        this.setState({email: event.target.value})
    }
    onSubjectChange(event) {
        this.setState({subject: event.target.value})
    } 
    onMessageChange(event) {
        this.setState({message: event.target.value})
    }
}

export default Contact;