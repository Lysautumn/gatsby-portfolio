/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 const { createFilePath } = require(`gatsby-source-filesystem`);
 const path = require(`path`);

 // programmatically create slugs to markdown files
 // and add it to create field on node in MarkdownRemark
exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type === `MarkdownRemark`) {
        const slug = (createFilePath({ node, getNode, basePath: `pages` }));
        createNodeField({
            node,
            name: `slug`,
            value: slug
        })
    }
}

// to create pages
exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    return graphql(`
        {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `).then(result => {
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
            createPage({
                path: node.fields.slug,
                component: path.resolve(`./src/templates/blog-post.js`),
                context: {
                    slug: node.fields.slug,
                },
            })
        })
    })
}