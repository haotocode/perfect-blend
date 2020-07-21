import React from "react"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Bio from "../components/bio"
import Layout from '../components/Layout';
import SEO from "../components/seo";
import { rhythm } from "../utils/typography";
import '../styles/blog.scss';

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <section className="blog">
      <Layout location={location} title={siteTitle}>
        <div className="blog__main-section">
          <h1 className="blog__header-title">Blog</h1>          
          {/* <SEO title="All posts" />
          <Bio /> */}
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <article key={node.fields.slug} className="blog__entry">
                <header className="blog__title-date">
                  <h3 
                  className="blog__titles"
                    // style={{
                    //   marginBottom: rhythm(1 / 4),
                    // }}
                  >
                    <AniLink swipe direction="left" style={{ boxShadow: `none` }} to={node.fields.slug} className="blog__links">
                      {title}
                    </AniLink>
                  </h3>
                  <p className="blog__date">{node.frontmatter.date}</p>
                </header>
                <section>
                  <p 
                  className="blog__excerpt"
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
                </section>
              </article>
            )
          })}
        </div>
      </Layout>
    </section>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
