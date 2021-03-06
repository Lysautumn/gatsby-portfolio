// This component is the index/landing page of the site

import React from 'react';
import MainImage from "../components/main-image";
import { Button } from '@material-ui/core';
import { Link } from 'gatsby';
import "../components/layout.css";
const styles = {
  button: {
    marginRight: '10px',
  }
}

const Index = () => (
  <div className="contentBox">
    <h1 className="mainTitle">Hey, I'm Ally</h1>
    <MainImage />
    <p className="mainBlurb">I build awesome things with code and teach others at Prime Digital Academy</p>
    <div className="buttonStorage">
      <Link className="mainButtons" to="/about"><Button style={styles.button} variant="contained">About</Button></Link>
      <Link className="mainButtons" to="/contact"><Button style={styles.button} variant="contained">Contact</Button></Link>
      <Link className="mainButtons" to="/my-work"><Button style={styles.button} variant="contained">My Work</Button></Link>
    </div>
  </div>

)

export default Index;
