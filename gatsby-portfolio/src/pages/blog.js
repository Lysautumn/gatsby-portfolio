import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import BlogCard from "../components/blog-card";

// establish list of links of blog posts
export default ({ data }) => {
    return (
        <Layout>
          <div className="contentSpacing">
            <h1 className="headers">Latest Blog Entries</h1>
            <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <BlogCard key={node.id} post={node}/>
            // <div key={node.id}>
            //   <Link to={node.fields.slug}>
            //     <h3>{node.frontmatter.title} - {node.frontmatter.date}</h3>
            //     <h4>{node.frontmatter.excerpt}</h4>
            //   </Link>
            // </div>
            ))}
          </div>
        </Layout>
    )
}

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