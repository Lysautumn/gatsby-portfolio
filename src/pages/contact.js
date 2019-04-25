// This component is for the contact page

import React, { Component } from 'react';
import Layout from '../components/layout';
import { FaEnvelope, FaLinkedinIn, FaGithub, FaTwitter, FaDribbble } from 'react-icons/fa';
import { IconContext } from "react-icons";
// import { TextField, Button } from '@material-ui/core';

// const styles = {
//   button: {
//     marginTop: '10px',
//   }
// }

class Contact extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  }

  render() {
    return (
      <Layout>
      <div className="contentSpacing">
        <h1 className="headers">Contact Me</h1>
        <div className="contactContent">
          <div className="contactLinks">
            <p className="contactItem"><IconContext.Provider value={{className: "icons"}}><FaEnvelope/></IconContext.Provider><a href="mailto:alyssaboyd85@gmail.com"> Email</a></p>
            <p className="contactItem"><IconContext.Provider value={{className: "icons"}}><FaLinkedinIn/></IconContext.Provider><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/alyssaboyd"> LinkedIn</a></p>
            <p className="contactItem"><IconContext.Provider value={{className: "icons"}}><FaGithub/></IconContext.Provider><a target="_blank" rel="noopener noreferrer" href="https://www.github.com/lysautumn"> GitHub</a></p>
            <p className="contactItem"><IconContext.Provider value={{className: "icons"}}><FaTwitter/></IconContext.Provider><a target="_blank" rel="noopener noreferrer" href="https://www.twitter.com/allyautumnboyd"> Twitter</a></p>
            <p className="contactItem"><IconContext.Provider value={{className: "icons"}}><FaDribbble/></IconContext.Provider><a target="_blank" rel="noopener noreferrer" href="https://www.dribbble.com/allyboyd"> Dribbble</a></p>
          </div>
          {/* <form className="contactForm">
            <TextField
              required
              id="contactFirstName"
              label="First Name"
              value={this.state.firstName}
              fullWidth
            />
            <TextField
              required
              id="contactLastName"
              label="Last Name"
              value={this.state.lastName}
              fullWidth
            />
            <TextField
              required
              id="contactEmail"
              label="Email"
              value={this.state.email}
              fullWidth
            />
            <TextField
              required
              id="contactMessage"
              label="Message"
              value={this.state.message}
              multiline
              rows="4"
              fullWidth
            />
            <Button style={styles.button} variant="contained">Submit</Button>
          </form> */}
        </div>
      </div>
    </Layout>

    )

  }
}

export default Contact;