import React from "react"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Layout from '../components/Layout';
import '../styles/learn.scss';

export default function Test({data}) {
    return (
      <section className="learn">
        <Layout>
            <h1 className="learn__title">Learn</h1>
            <div className="learn__content-container">
            {data.allMysqlPerfectblendlearnsection.edges.map(({ node }, index) => (
              <div key={node.id}>
                <p className="learn__section-header">{node.title}</p>
                <p className="learn__section-content">{node.description}</p>
                <AniLink swipe direction="left" to={node.path} className="learn__link">Read more →</AniLink>
              </div>
            ))}
            </div>
        </Layout>
      </section>
    )
}

export const query = graphql `
query MyQuery {
  allMysqlPerfectblendlearnsection(sort: {fields: id}) {
    edges {
      node {
        id
        title
        description
        path
      }
    }
  }
}
`