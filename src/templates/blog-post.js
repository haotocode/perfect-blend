import React from "react"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Bio from "../components/bio"
import BlogLayout from "../components/bloglayout"
import SEO from "../components/seo"
// import { rhythm, scale } from "../utils/typography"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <BlogLayout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article>
        <header>
          <h1
            // style={{
            //   marginTop: rhythm(1),
            //   marginBottom: 0,
            // }}
          >
            {post.frontmatter.title}
          </h1>
          <p
            // style={{
            //   ...scale(-1 / 5),
            //   display: `block`,
            //   marginBottom: rhythm(1),
            // }}
          >
            {post.frontmatter.date}
          </p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          // style={{
          //   marginBottom: rhythm(1),
          // }}
        />
        <footer>
          <Bio />
        </footer>
      </article>

      <nav>
        <ul
          // style={{
          //   display: `flex`,
          //   flexWrap: `wrap`,
          //   justifyContent: `space-between`,
          //   listStyle: `none`,
          //   padding: 0,
          // }}
        >
          <li>
            {previous && (
              <AniLink swipe direction="right" to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </AniLink>
            )}
          </li>
          <li>
            {next && (
              <AniLink swipe direction="left" to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </AniLink>
            )}
          </li>
        </ul>
      </nav>
    </BlogLayout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
// export const pageQuery = graphql`
//   query BlogPostBySlug($slug: String!) {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       id
//       excerpt(pruneLength: 160)
//       html
//       frontmatter {
//         title
//         date(formatString: "MMMM DD, YYYY")
//         description
//       }
//     }
//   }
// `
