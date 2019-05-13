// This component is for the contact page

import React from 'react';
import Layout from '../components/layout';
import { FaEnvelope, FaLinkedinIn, FaGithub, FaTwitter, FaDribbble, FaGoodreads } from 'react-icons/fa';
import { IconContext } from "react-icons";

const Contact = () => (
      <Layout>
      <div className="contentSpacing">
        <h1 className="headers">Contact Me</h1>
        <p>I'm always interested in meeting new people and hearing about new opportunities
          to collaborate. There are many ways to contact me and see what I am up to:
        </p>
        <div className="contactContent">
          <div className="contactCard">
            <p>Want to learn more?<br/>Let's start a conversation!</p>
            <p className="contactItem"><IconContext.Provider value={{className: "icons"}}><FaEnvelope/></IconContext.Provider><a href="mailto:alyssaboyd85@gmail.com"> Email me</a> <span className="emailAddress">alyssa.boyd85@gmail.com</span></p>
          </div>
          <div className="contactCard">
            <p>To see what I've been working on:</p>
            <p className="contactItem"><IconContext.Provider value={{className: "icons"}}><FaGithub/></IconContext.Provider><a target="_blank" rel="noopener noreferrer" href="https://www.github.com/lysautumn"> GitHub</a></p>
            <p className="contactItem"><IconContext.Provider value={{className: "icons"}}><FaDribbble/></IconContext.Provider><a target="_blank" rel="noopener noreferrer" href="https://www.dribbble.com/allyboyd"> Dribbble</a></p>
          </div>
          <div className="contactCard">
            <p>To learn more about my career:</p>
            <p className="contactItem"><IconContext.Provider value={{className: "icons"}}><FaLinkedinIn/></IconContext.Provider><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/alyssaboyd"> LinkedIn</a></p>
          </div>
          <div className="contactCard">
            <p>To check out my thoughts:</p>
            <p className="contactItem"><IconContext.Provider value={{className: "icons"}}><FaTwitter/></IconContext.Provider><a target="_blank" rel="noopener noreferrer" href="https://www.twitter.com/allyautumnboyd"> Twitter</a></p>
          </div>
          <div className="contactCard">
            <p>To find out what I'm currently reading:</p>
            <p className="contactItem"><IconContext.Provider value={{className: "icons"}}><FaGoodreads/></IconContext.Provider><a target="_blank" rel="noopener noreferrer" href="https://www.goodreads.com/allyboyd"> Goodreads</a></p>
          </div> 
        </div>
      </div>
    </Layout>
)
export default Contact;