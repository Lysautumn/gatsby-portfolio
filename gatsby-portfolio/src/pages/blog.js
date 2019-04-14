import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";

// establish list of links of blog posts
export default ({ data }) => {
    return (
        <Layout>
          <div>
            <h1>Latest Blog Entries</h1>
            <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
            {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
              <Link to={node.fields.slug}>
                <h3>{node.frontmatter.title} - {node.frontmatter.date}</h3>
              </Link>
            </div>
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
         }
         fields {
           slug
         }
       }
     }
   }
 }
`