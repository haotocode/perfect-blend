import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink";

const BlogLayout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1>
        <AniLink
        paintDrip duration={1}
        hex="#E0D3C3"
        style={{textDecoration: `none`, color: `black`}}

          to={`/`}
        >
          {title}
        </AniLink>
      </h1>
    )
  } else {
    header = (
      <h3>
        <AniLink
        paintDrip duration={1}
        hex="#E0D3C3"
        style={{textDecoration: `none`, color: `black`}}
          to={`/`}
        >
          {title}
        </AniLink>
      </h3>
    )
  }
  return (
    <div>
      <header>{header}</header>
      <main>{children}</main>
    </div>
  )
}

export default BlogLayout
