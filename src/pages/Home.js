import React, { Component } from 'react'
import "../styles/Home.css";
import HomepageBanner from "../assets/HomepageBanner.png";
import {Link} from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
       
         <div className="home" style={{ backgroundImage: `url(${HomepageBanner})`}}>
            <div className="headerContainer">
              
              <Link to="/menu">
                <button>ORDER NOW</button>
              </Link>
              
            </div>
         </div>
      
    )
  }
}
