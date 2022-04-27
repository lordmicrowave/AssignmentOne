import React, { Component } from 'react';
import AboutImage from '../assets/h.png';
import "../styles/About.css";

export default class About extends Component {
  render() {
    return (
      <div className="about">
          <div className="aboutTop" style={{ backgroundImage: `url(${AboutImage})` }}></div>
          <div className="aboutBottom">
          <h1>Self-Reflection</h1>
          <p>
          The biggest thing for me that came to this assignment was the completing of it. I have always struggled to gauge how much time
           I would need to complete an assignment including any challenges or obstacles I may face along the way and being able to 
           account for that. This time, I had to be realistic about needing another extension on top of the one we received.
          <br></br><br></br>
          The challenges I faced with this assignment was dividing my time between my job and completing the assignment itself. Along 
          with that, I had to try and find ways around the loadshedding schedules as where I lived and where I worked fell under 
          different blocks. This meant that some days I would not be able to work on the assignment for very long because my laptop 
          would not last without power. During the times that I worked on the assignment, I made very little to no progress. I would 
          get very frustrated as soon as an error popped up on the screen. I felt very intimidated about having to use React and I felt
           very helpless/useless/limited/lacking knowledge. My ability to problem solve went out the window when it came to looking at 
           the errors and that further deepened my thinking that I’m not cut out for coding and doubted the basic knowledge I had of 
           HTML and CSS.
          <br></br><br></br>
          After receiving my second extension, I was advised to take a short period of rest and come back to the assignment when I was 
          rested and less stressed. When I got back to the assignment, it was a complete turnaround because what was a mountain of 
          challenges and feelings of inexperience and frustration were gone and I was able to sit down and finish the website from 
          start to finish. This time I didn’t feel pressured or out of time. I was able to concentrate (another challenge for me 
          because I have ADHD and go periods without being medicated because wow the prescription is expensive) and calmly face any 
          errors that did come up. Most of the errors I was able to fix myself and those that I couldn’t, Stack Overflow and W3 Schools 
          were my friends. I could definitely benefit from actually asking for help but that’s something I have always struggled to do 
          but am actively working on.
          <br></br><br></br>
          I believe I completed everything I set out to do within the basics for this assignment and maybe a little more especially 
          with the CSS. I kept the online store template because I thought it would be a good idea to use the business I am currently 
          running as the online store and have some of the menu items double as the blog posts. Everything on the website from the brand
           colours to the products and their prices are an accurate depiction of the brand and its inventory.
          <br></br><br></br>
          My biggest challenge was figuring out how to link some of the menu items to the different blog pages I created. By looking at
           the code I already had for everything on the website and playing around with the code, I was able to figure out how to add 
           the Link component to the array so that a person would be able to have something to click on and direct them to the specified
            blog page listed on the menu item.
          <br></br><br></br>
          The only things I would change or add to the website is linking the social media icons to the pages I currently have active
           for the business and using the business’s brand fonts. 
          <br></br><br></br>
          I am very proud of myself for managing to complete this assignment – albeit not on time – because it’s been a very long time
           since I have been able to successfully submit a complete set of varsity work.
          </p>
          </div>
      </div>
    )
  }
}
