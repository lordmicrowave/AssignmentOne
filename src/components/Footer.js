import React, { Component } from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import "../styles/Footer.css";

export default class Footer extends Component {
  render() {
    return (
     <div className="footer">
         <div className="socialMedia">
            <p>&copy; 2022 P. O. Box ZA</p>
            <InstagramIcon/><FacebookIcon/><TwitterIcon/><PinterestIcon/>
         </div>
     </div>
    )
  }
}
