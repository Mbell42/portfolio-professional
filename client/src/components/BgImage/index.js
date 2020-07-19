//DEPENDENCIES
import React, { Component } from "react";
  //components
import { MDBMask, MDBView, } from 'mdbreact';

  //images
import mbSquare from "../../images/portrait/mbSquare.jpg";
import beachSunset from "../../images/stock-free-images/joe-desousa/beach-sunset.jpg";
import mountainPass from "../../images/stock-free-images/guillaume-briard/mountain-pass.jpg";
import mountainRangeDay from "../../images/stock-free-images/jerry-zhang/mountain-range-day.jpg";
import mountainRangeNight from "../../images/stock-free-images/benjamin-voros/mountain-range-night.jpg";

//COMPONENT
const BgImage = () => {
      return (
          <div>
            {/* Background image */}
            {/* <MDBView src={beachSunset}> */}
            {/* <MDBView src={mountainPass}> */}
            {/* <MDBView src={mountainRangeDay}> */}
            <MDBView src={mountainRangeNight}>
                <MDBMask className='rgba-black-light' />
            </MDBView>
            </div>
        );
      }
    
    
    export default BgImage;