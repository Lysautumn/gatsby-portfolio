// This component is for the about page

import React from 'react';
import Layout from '../components/layout';
import { FaLightbulb, FaPalette, FaCoffee } from 'react-icons/fa';
import { IconContext } from "react-icons";
// import { Button } from '@material-ui/core';

const About = () => (
  <Layout>
    <div className="contentSpacing">
      <h1 className="headers">About Me</h1>
      <h2><IconContext.Provider value={{className: "icons"}}><FaLightbulb/></IconContext.Provider> Passionately Curious</h2>
      <p>I did not start my career as a Software Engineer. When I was young,
        I didn't think I was interested in, or good at, math and science. I earned
        an undergrad degree in Political Science (a topic I am still interested in)
        and a graduate degree in Public Administration. I worked some odd jobs after
        graduating while I waited for a job in my field, and while waiting to decide
        if I would go back for a PhD, so I could be a professor.</p>
      <p>That's when I was introduced to code.</p>
      <p>A friend encouraged me to learn how to code, because I was not really
        excited about my job or the openings I was seeing in my field. I wasn't sure
        I would like it, but didn't have anything to lose! That first day, I spent
        over 8 hours working through online resources on HTML and CSS, and a whole
        new world opened up.</p>
      <p>That's when I realized that I earned a graduate degree because I love to
        learn. Working in Tech has given me an opportunity to continue learning all
        the time. With endless things to learn and constant growth, I have found a 
        way to be passionately curious in a career that I love.</p>
      <h2><IconContext.Provider value={{className: "icons"}}><FaPalette/></IconContext.Provider> Creative</h2>
      <p>In my free time, I like to do many things to fuel my creativity. Whether
        it's cooking, embroidery, painting, writing, or learning visual design, I
        enjoy finding new things to try.</p>
      <p>One thing I love about Tech is that I can blend together the challenges
        of logic and creativity. Blending these two things together allows me to
        create products I can be proud of.</p>
      <h2><IconContext.Provider value={{className: "icons"}}><FaCoffee/></IconContext.Provider> Quirky and Caffeinated</h2>
      <p>More often than not, I can be found with a coffee or tea in hand. I worked
        as a barista for many years and love finding fun new coffee shops to visit.
        Know of any good ones? Let me know!</p> 
      <p>My interests are wide-ranging: board/video games, Star Wars and documentaries
        are just a few of them!</p>
    </div>
  </Layout>

)

export default About;