// This component is for the about page

import React from 'react';
import Layout from '../components/layout';
import { FaLightbulb, FaPalette, FaCoffee, FaChevronRight } from 'react-icons/fa';
import { IconContext } from "react-icons";
import CreativeImage from "../components/creative-image";
import HamiltonImage from "../components/hamilton-image";

const About = () => (
  <Layout>
    <div className="contentSpacing">
      <h1 className="headers">About Me</h1>
      <p>I did not start my career as a Software Engineer. When I was young,
        I didn't think I was interested in, or good at, math and science. I earned
        an undergrad degree in Political Science (a topic I am still interested in)
        and a graduate degree in Public Administration. I worked some odd jobs after
        graduating while I waited for a job in my field, and while waiting to decide
        if I would go back for a PhD, so I could be a professor.</p>
      <p>That's when I was introduced to code.</p>
      <h2 className="aboutHeaders"><IconContext.Provider value={{className: "icons"}}><FaLightbulb/></IconContext.Provider> Passionately Curious</h2>
      <p>A friend encouraged me to learn how to code, because I was not really
        excited about my job or the openings I was seeing in my field. I wasn't sure
        I would like it, but didn't have anything to lose! That first day, I spent
        over 8 hours working through online resources on HTML and CSS, and a whole
        new world opened up.</p>
      <p>That's when I realized that I earned a graduate degree because I love to
        learn. Working in tech has given me an opportunity to continue learning all
        the time. With endless things to learn and constant growth, I have found a 
        way to be passionately curious in a career that I love.</p>
        <p>Check out what I've been working on lately:</p>
        <a className="aboutLinks" rel="noopener noreferrer" target="_blank" href="https://www.github.com/lysautumn"><IconContext.Provider value={{className: "icons"}}><FaChevronRight></FaChevronRight></IconContext.Provider>GitHub</a>
      <h2 className="aboutHeaders"><IconContext.Provider value={{className: "icons"}}><FaPalette/></IconContext.Provider> Creative</h2>
      <p>In my free time, I like to do many things to fuel my creativity. Whether
        it's cooking, embroidery, painting, writing, or learning visual design, I
        enjoy finding new things to try.</p>
      <p>Here is a cross-stitch piece that I made for a friend of mine:</p>
      <CreativeImage />
      <p>One thing I love about tech is that I can blend together the challenges
        of logic and creativity. Blending these two things together allows me to
        create products I can be proud of.</p>
      <p>When I want to practice visual design, I work on challenges from <a className="aboutLinks" rel="noopener noreferrer" target="_blank" href="https://www.dailyui.co/">Daily UI</a>. Check out my work:</p>
      <a className="aboutLinks" rel="noopener noreferrer" target="_blank" href="https://www.dribbble.com/allyboyd"><IconContext.Provider value={{className: "icons"}}><FaChevronRight></FaChevronRight></IconContext.Provider>Dribbble</a>
      <h2 className="aboutHeaders"><IconContext.Provider value={{className: "icons coffeeCup"}}><FaCoffee/></IconContext.Provider> Quirky and Caffeinated</h2>
      <p>More often than not, I can be found with a coffee or tea in hand. I worked
        as a barista for many years and love finding fun new coffee shops to visit.
        Know of any good ones? Let me know!</p> 
      <p>The things I enjoy doing in my free time are wide-ranging. I enjoy playing 
        board games and some video games (recently, I've been playing Super Smash Bros 
        on the Switch). I really enjoy reading, even though I don't always have a lot of
        time to spend on it. I love watching documentaries and listening to podcasts. When the
        MN weather allows, I love to explore walking paths, find cool local businesses
        to support, and attend fun events like Art-a-Whirl, TC Pride Festival, and (of course)
        the MN State Fair. I recently got to see both Hamilton and Book of Mormon at
        the Orpheum Theatre. I performed in plays when I was younger, and still love to
        watch plays!
      </p>
      <HamiltonImage />
    </div>
  </Layout>

)

export default About;