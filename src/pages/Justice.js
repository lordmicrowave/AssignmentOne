import React, { Component } from 'react';
import AboutImage from '../assets/h.png';
import "../styles/About.css";

export default class About extends Component {
  render() {
    return (
      <div className="about">
          <div className="aboutTop" style={{ backgroundImage: `url(${AboutImage})` }}></div>
          <div className="aboutBottom">
          <h1>Internet, Society and Justice</h1>
          <p>A blgo post about Internet, Society and Justice</p>
          </div>
      </div>
    )
  }
}
