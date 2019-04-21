// This component creates each of the cards for the blog post list

import React from "react";
import { Link } from "gatsby";

const BlogCard = ({ post }) => (
    <div className="blogCard">
        <Link className="blogCardTitle" to={post.fields.slug}><h3>{post.frontmatter.title}</h3></Link>
        <h5>{post.frontmatter.date}</h5 >
        <p className="blogExcerpt">{post.frontmatter.excerpt}</p>
    </div>
)

export default BlogCard;