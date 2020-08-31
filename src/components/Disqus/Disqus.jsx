import React, { useState } from 'react'
import ReactDisqusComments from 'react-disqus-comments'
import urljoin from 'url-join'
import config from '../../../data/SiteConfig'

const Disqus = (props) => {
  const { postNode } = props
  const { frontmatter: post } = postNode
  const url = urljoin(config.siteUrl, config.pathPrefix, postNode.fields.slug)

  const [state, setState] = useState([])

  if (!config.disqusShortname) {
    return null
  }

  const notifyAboutComment = () => {
    setState([...state, { text: 'New comment available!' }])
  }

  return (
    <ReactDisqusComments
      shortname={config.disqusShortname}
      identifier={post.title}
      title={post.title}
      url={url}
      category_id={post.category_id || null}
      onNewComment={notifyAboutComment}
    />
  )
}

export default Disqus
