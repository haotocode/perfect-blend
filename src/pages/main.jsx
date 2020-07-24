import React from 'react';
import { graphql } from "gatsby";
import Typist from 'react-typist';

import '../styles/main.scss';
import Layout from '../components/Layout';

function Main({data}) {

    // console.log(data.allMysqlPerfectblendmainquotessection.edges);

   const index = data.allMysqlPerfectblendmainquotessection.edges;
//    console.log(index)

    const randomIndex = index[Math.floor(Math.random() * index.length)];
    // console.log(randomIndex);
    
    return (
        <div className="main">
            <Layout>
                <div className="main__hero-text-container" >
                    <Typist avgTypingDelay={40} cursor={{ hideWhenDone: true, hideWhenDoneDelay: 400, show: false }} className="Typist">
                        <span className="main__quote">
                            {randomIndex.node.quote_content}
                        </span>
                        <br />
                        <span className="main__quote-person">
                            - {randomIndex.node.quote_person}
                        </span>
                    </Typist>
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