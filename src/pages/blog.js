// This component is for the blog list page

import React, { Component } from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import BlogCard from "../components/blog-card";
import { Button } from "@material-ui/core";

class Blog extends Component {
  state = {
    biggestPostIndexToShow: 4,
  }

  handleClick = () => {
    console.log('clicked');
    this.setState({
      biggestPostIndexToShow: this.state.biggestPostIndexToShow + 5,
    })
  }

  render() {
    const { data } = this.props;
    return (
      <Layout>
        <div className="contentSpacing">
          <h1 className="headers">Latest Blog Entries</h1>
          {/* <h4>{data.allMarkdownRemark.totalCount} Posts</h4> */}
          {data.allMarkdownRemark.edges.slice(0, this.state.biggestPostIndexToShow).map(({ node }) => (
            <BlogCard key={node.id} post={node}/>
          ))}
          {this.state.biggestPostIndexToShow < data.allMarkdownRemark.edges.length ? <Button variant="contained" onClick={this.handleClick}>Show More</Button> : null}
        </div>
      </Layout>
    )
  }
}

export default Blog;

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