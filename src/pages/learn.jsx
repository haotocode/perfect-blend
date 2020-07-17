import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function Test({data}) {
    return (
        <Layout>
            <h1>Learn</h1>
            <div>
            {data.allMysqlPerfectblendlearnsection.edges.map(({ node }, index) => (
              <tr key={index}>
                <p>{node.title}</p>
                <p>{node.description}</p>
              </tr>
            ))}
            </div>
        </Layout>
    )
}

export const query = graphql `
query MyQuery {
  allMysqlPerfectblendlearnsection {
    edges {
      node {
        id
        title
        description
      }
    }
  }
}
`