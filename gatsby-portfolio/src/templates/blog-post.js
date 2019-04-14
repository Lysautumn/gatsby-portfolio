import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

// establish template for blog posts
export default ({ data }) => {
    const post = data.markdownRemark
    return (
        <Layout>
            <div className="contentSpacing">
                <h1 className="headers">{post.frontmatter.title}</h1>
                <h4>{post.frontmatter.date}</h4>
                <div dangerouslySetInnerHTML={{__html: post.html}} />
            </div>
        </Layout>
    )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`