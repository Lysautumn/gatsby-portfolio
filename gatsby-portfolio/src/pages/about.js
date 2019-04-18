import React from 'react';
import Layout from '../components/layout';
import { Button } from '@material-ui/core';

const About = () => (
  <Layout>
    <div className="contentSpacing">
      <Button variant="contained">Download Resume</Button>
      <h1 className="resumeHeader headers">Ally Boyd</h1>
      <p className="resumeText headers">alyssa.boyd85@gmail.com | 612-310-2593 | github.com/lysautumn | behance.net/allyboyd</p>
      <hr className="row"/>
      <h2 className="resumeSectionHeaders">Skills:</h2>
      {/* <ul className="skillsList">
        <li>JavaScript</li>
        <li>HTML5</li>
        <li>Passport</li>
        <li>Angular Material</li>
        <li>Git</li>
        <li>React</li>
        <li>CSS3</li>
        <li>Handlebars.js</li>
        <li>Material-UI</li>
        <li>Jira</li>
        <li>React-Redux</li>
        <li>Express.js</li>
        <li>PhantomJS</li>
        <li>Bootstrap</li>
        <li>Ruby</li>
        <li>AngularJS</li>
        <li>Node.js</li>
        <li>PostgreSQL</li>
        <li>Heroku</li>
        <li>Ionic</li>
        <li>jQuery</li>
        <li>Firebase</li>
        <li>MongoDB</li>
        <li>GatsbyJS</li>
        <li>Angular</li>
      </ul> */}
      <div className="skillsList">
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>React-Redux</li>
          <li>AngularJS</li>
          <li>jQuery</li>
        </ul>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Express.js</li>
          <li>Node.js</li>
          <li>Firebase</li>
        </ul>
        <ul>
          <li>Passport</li>
          <li>Handlebars.js</li>
          <li>PhantomJS</li>
          <li>PostgreSQL</li>
          <li>MongoDB</li>
        </ul>
        <ul>
          <li>Angular Material</li>
          <li>Material-UI</li>
          <li>Bootstrap</li>
          <li>Heroku</li>
          <li>GatsbyJS</li>
        </ul>
        <ul>
          <li>Git</li>
          <li>Jira</li>
          <li>Ruby</li>
          <li>Ionic</li>
          <li>Angular</li>
        </ul>
      </div>
    </div>
  </Layout>

)

export default About;