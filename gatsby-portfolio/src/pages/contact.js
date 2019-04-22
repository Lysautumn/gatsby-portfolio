// This component is for the contact page

import React, { Component } from 'react';
import Layout from '../components/layout';
import { TextField, Button } from '@material-ui/core';

const styles = {
  button: {
    marginTop: '10px',
  }
}

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
            <p className="contactItem"><span class="lnr lnr-envelope"> </span><a href="mailto:alyssaboyd85@gmail.com">Email</a></p>
            <p className="contactItem"><span class="lnr lnr-link"> </span><a target="_blank" href="https://www.linkedin.com/in/alyssaboyd">LinkedIn</a></p>
            <p className="contactItem"><span class="lnr lnr-code"> </span><a target="_blank" href="https://www.github.com/lysautumn">GitHub</a></p>
            <p className="contactItem"><span class="lnr lnr-bubble"> </span><a target="_blank" href="https://www.twitter.com/allyautumnboyd">Twitter</a></p>
            <p className="contactItem"><span class="lnr lnr-picture"> </span><a target="_blank" href="https://www.dribbble.com/allyboyd">Dribbble</a></p>
          </div>
          <form className="contactForm">
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
          </form>
        </div>
      </div>
    </Layout>

    )

  }
}

export default Contact;