import React, { Component } from 'react';
import AboutImage from '../assets/h.png';
import "../styles/About.css";

export default class About extends Component {
  render() {
    return (
      <div className="about">
          <div className="aboutTop" style={{ backgroundImage: `url(${AboutImage})` }}></div>
          <div className="aboutBottom">
          <h1>About</h1>
          <p>P. O. Box ZA is a business of mine that I recently launched on 22 Feb 2022. I sell handmade nosecuffs that come packaged in Chappies-inspired wrapping. The images you see on the menu are products that are currently for sale. 
            I would link the Instagram and Facebook pages to the icons in the footer but haven't had enough time to figure that out yet.
          </p>
          </div>
      </div>
    )
  }
}
