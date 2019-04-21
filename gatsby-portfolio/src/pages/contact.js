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
    </Layout>

    )

  }
}

export default Contact;