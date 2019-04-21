import React, { Component } from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import BlogCard from "../components/blog-card";
import { Button } from "@material-ui/core";

class Blog extends Component {
  state = {
    postsToShow: 4,
  }

  handleClick = () => {
    console.log('clicked');
    this.setState({
      postsToShow: this.state.postsToShow + 5,
    })
    
  }

  render() {

    const { data } = this.props;
    return (
      <Layout>
        {this.state.postsToShow}
        <div className="contentSpacing">
          <h1 className="headers">Latest Blog Entries</h1>
          {/* <h4>{data.allMarkdownRemark.totalCount} Posts</h4> */}
          {data.allMarkdownRemark.edges.slice(0, this.state.postsToShow).map(({ node }) => (
            <BlogCard key={node.id} post={node}/>
          ))}
          {this.state.postsToShow < data.allMarkdownRemark.edges.length ? <Button variant="contained" onClick={this.handleClick}>Show More</Button> : null}
        </div>
      </Layout>
    )
  }
}

export default Blog

// establish list of links of blog posts
// export default ({ data }) => {
//     return (
//         <Layout>
//           <div className="contentSpacing">
//             <h1 className="headers">Latest Blog Entries</h1>
//             <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
//             {data.allMarkdownRemark.edges.map(({ node }) => (
//               <BlogCard key={node.id} post={node}/>
//             // <div key={node.id}>
//             //   <Link to={node.fields.slug}>
//             //     <h3>{node.frontmatter.title} - {node.frontmatter.date}</h3>
//             //     <h4>{node.frontmatter.excerpt}</h4>
//             //   </Link>
//             // </div>
//             ))}
//           </div>
//         </Layout>
//     )
// }

export const query = graphql`
 query {
   allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
     totalCount
     edges {
       node {
         id
         frontmatter {
           title
           date(formatString: "MMMM DD, YYYY")
           excerpt
         }
         fields {
           slug
         }
       }
     }
   }
 }
`