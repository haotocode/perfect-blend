import React from 'react';
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { graphql } from "gatsby";
import Typist from 'react-typist';
import '../styles/main.scss';
import Layout from '../components/Layout';

function Main({data}) {

   const index = data.allMysqlPerfectblendmainquotessection.edges;

    const randomIndex = index[Math.floor(Math.random() * index.length)];
    
    return (
        <div className="main">
            <Layout>
                <div className="main__hero-text-container" >
                    <p className="main__hero-text">Never be scared about trying a new blend of coffee again!</p>
                    <AniLink to="/explore" className="main__hero-link">Explore Your Perfect Blend →</AniLink>
                </div>
                <Typist avgTypingDelay={40} cursor={{ hideWhenDone: true, hideWhenDoneDelay: 400, show: false }} className="MainQuoteTypist">
                    <span className="main__quote">
                        {randomIndex.node.quote_content}
                    </span>
                    <br />
                    <span className="main__quote-person">
                        - {randomIndex.node.quote_person}
                    </span>
                </Typist>
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