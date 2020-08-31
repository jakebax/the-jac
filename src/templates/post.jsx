import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../layout'
import UserInfo from '../components/UserInfo/UserInfo'
import Disqus from '../components/Disqus/Disqus'
import PostTags from '../components/PostTags/PostTags'
import SocialLinks from '../components/SocialLinks/SocialLinks'
import SEO from '../components/SEO/SEO'
import Footer from '../components/Footer/Footer'
import config from '../../data/SiteConfig'
import './b16-tomorrow-dark.css'
import './post.css'

const PostTemplate = (props) => {
  const {
    data: { markdownRemark: postNode },
    pageContext: { slug },
  } = props
  const {
    frontmatter: { tags, title },
  } = postNode

  return (
    <Layout>
      <div>
        <Helmet>
          <title>{`${title} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <div>
          <h1>{title}</h1>
          <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
          <div className='post-meta'>
            <PostTags tags={tags} />
            <SocialLinks postPath={slug} postNode={postNode} />
          </div>
          <UserInfo config={config} />
          <Disqus postNode={postNode} />
          <Footer config={config} />
        </div>
      </div>
    </Layout>
  )
}

export default PostTemplate

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        date
        category
        tags
      }
      fields {
        slug
        date
      }
    }
  }
`
