import React, { Component } from 'react';
import "./About.css";
import headshot from "../assets/headshot.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
         <div>
            <div class="split left">
              <div className="centered">
                <img 
                  className="profile_image"
                  src={headshot}
                  alt="Profile Pic"
                  ></img>
              </div>
            </div>
            <div className="split right">
              <div className="centered">
                <div className="name_title">Cindy Hou</div>
                <div className="brief_description">
                  <p>I am a rising junior at Cornell University studying Statistics and Information Science.</p>
                  <p>My interests include machine learning and data science.</p>
                  <p>Outside of academics, I also enjoy hiking, art, and reading.</p>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
  }
}