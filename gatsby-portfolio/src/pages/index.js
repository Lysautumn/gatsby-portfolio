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
import Layout from '../components/layout';
import Image from "../components/image"

const Index = () => (
  <Layout>
    <div className="layoutDiv">
      <Image/>
      <div className="greeting">
        <h1>Hey, I'm Ally</h1>
        <p>I build awesome things with code</p>
        <p>and teach others at Prime Digital Academy</p>
      </div>
    </div>
  </Layout>

)

export default Index;
