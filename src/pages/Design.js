import React, { Component } from 'react';
import AboutImage from '../assets/h.png';
import "../styles/About.css";

export default class About extends Component {
  render() {
    return (
      <div className="about">
          <div className="aboutTop" style={{ backgroundImage: `url(${AboutImage})` }}></div>
          <div className="aboutBottom">
          <h1>Design and Aesthetics</h1>
          <p>Blog post about Design and Aesthetics</p>
          </div>
      </div>
    )
  }
}
