// import React from "react"

// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

// const IndexPage = () => (
//   <Layout>
//     <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
//     <div style={{ marginTop: `200px`}}>
//       <div style={{marginLeft: `10%`, width: `30%`, display: `inline-block`}}>
//       <Image />
//       </div>
//       <div style={{marginLeft: `-10%`, display: `inline-block`, color: `white`}}>
    
//       <h1>Hey, I'm Ally</h1>
      
//       <p>I create with code</p>
//       <p>and teach others @ Prime Digital Academy</p>
//       </div>
//     </div>

//   </Layout>
// )

// export default IndexPage

// This component is the index/landing page of the site

import React from 'react';
import Image from "../components/image";
import { Button } from '@material-ui/core';
import { Link } from 'gatsby';

const styles = {
  button: {
    marginRight: '10px',
  }
}

const Index = () => (
  // <Layout>
  //   <div className="layoutDiv">
  //     <Image/>
  //     <div className="greeting">
  //       <h1>Hey, I'm Ally</h1>
  //       <p>I build awesome things with code</p>
  //       <p>and teach others at Prime Digital Academy</p>
  //     </div>
  //   </div>
  // </Layout>
  <div className="contentBox">
    <h1 className="mainTitle">Hey, I'm Ally</h1>
    <Image />
    <p className="mainBlurb">I build awesome things with code and teach others at Prime Digital Academy</p>
    <div className="buttonStorage">
      <Link className="mainButtons" to="/about"><Button style={styles.button} variant="contained">About</Button></Link>
      <Link className="mainButtons" to="/contact"><Button style={styles.button} variant="contained">Contact</Button></Link>
      <Link className="mainButtons" to="/blog"><Button style={styles.button} variant="contained">Blog</Button></Link>
    </div>
  </div>

)

export default Index;
