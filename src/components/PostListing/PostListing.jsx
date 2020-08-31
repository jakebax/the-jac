import React from 'react'
import { Link } from 'gatsby'

const PostListing = (props) => {
  const { postEdges } = props

  const postList = postEdges.map((post) => ({
    path: post.node.fields.slug,
    title: post.node.frontmatter.title,
  }))

  return (
    <div>
      {
        /* Your post list here. */
        postList.map((post) => (
          <Link to={post.path} key={post.title}>
            <h1>{post.title}</h1>
          </Link>
        ))
      }
    </div>
  )
}

export default PostListing
