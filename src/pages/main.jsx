import React from 'react';
import { graphql } from "gatsby";
import '../styles/main.scss';
import Layout from '../components/Layout';

function Main({data}) {

    console.log(data.allMysqlPerfectblendmainquotessection.edges);

   const index = data.allMysqlPerfectblendmainquotessection.edges;
   console.log(index)

    const randomIndex = index[Math.floor(Math.random() * index.length)];
    console.log(randomIndex);
    
    return (
        <div className="homepage">
            <Layout>
                <div className="homepage__hero-text-container">
                    <p className="homepage__hero-quote">{randomIndex.node.quote_content}</p>
                    <p className="homepage__hero-quote-person">- {randomIndex.node.quote_person}</p>
                </div>
            </Layout>
        </div>
    )
}

export default Main

export const query = graphql `
query QueryQuoteMainSection {
    allMysqlPerfectblendmainquotessection {
      edges {
        node {
          quote_id
          quote_content
          quote_person
        }
      }
    }
  }
`