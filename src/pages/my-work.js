// This component is for the my work page

import React from 'react';
import Layout from '../components/layout';
import Design1Image from '../components/design-1-image';
import Design2Image from '../components/design-2-image';
import HelpTrackerImage from '../components/help-tracker-image';
import PlacefinderImage from '../components/placefinder-image';

const MyWork = () => (
  <Layout>
    <div className="contentSpacing">
      <h1 className="headers">My Work</h1>
      <div className="workContent">
        <div className="workCard">
          <p className="workCardTitle">Help Tracker</p>
          <p className="workCardDescription">A tool used at Prime to track student attendance at help sessions</p>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/Lysautumn/help_tracker"><HelpTrackerImage /></a>
        </div>
        <div className="workCard">
          <p className="workCardTitle">Minneapolis Placefinder</p>
          <p className="workCardDescription">An app I built to explore the Foursquare API</p>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/Lysautumn/placefinder"><PlacefinderImage /></a>
        </div>
        <div className="workCard">
          <p className="workCardTitle">Daily UI Day 3: "Above the Fold"</p>
          <p className="workCardDescription">A design challenge to create a landing page, above the fold</p>
          <a target="_blank" rel="noopener noreferrer" href="https://dribbble.com/shots/5871283-Daily-UI-003"><Design1Image /></a>
        </div>
        <div className="workCard">
          <p className="workCardTitle">Daily UI Day 4: "Calculator"</p>
          <p className="workCardDescription">A design challenge to create a calculator, I created light and dark modes</p>
          <a target="_blank" rel="noopener noreferrer" href="https://dribbble.com/shots/5902744-Daily-UI-004"><Design2Image /></a>
        </div> 
      </div>
    </div>
  </Layout>

)

export default MyWork;