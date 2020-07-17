import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function Test({data}) {
    return (
        <Layout>
            <h1>Test own gatsby</h1>
            <div>
            {data.allMysqlLibrary.edges.map(({ node }, index) => (
              <tr key={index}>
                <p>{node.idlibrary}</p>
                <p>{node.libraryname}</p>
              </tr>
            ))}
            </div>
        </Layout>
    )
}


export const query = graphql`
query MyQuery {
  allMysqlLibrary(sort: {fields: id}) {
    edges {
      node {
        idlibrary
        libraryname
      }
    }
  }
}
`