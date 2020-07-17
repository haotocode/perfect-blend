import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default function Test({data}) {
    return (
        <Layout>
            <h1>Learn</h1>
            <div>
            {data.allMysqlPerfectblendlearnsection.edges.map(({ node }, index) => (
              <div key={node.id}>
                <p>{node.title}</p>
                <p>{node.description}</p>
                <Link to={node.path} >Read more</Link>
              </div>
            ))}
            </div>
        </Layout>
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