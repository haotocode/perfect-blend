import React from 'react';
import { graphql } from 'gatsby';
import AniLink from "gatsby-plugin-transition-link/AniLink";
import BackgroundSlider from 'react-background-slider';
import '../styles/index.scss';
import DownArrow from '../assets/images/icons/down-arrow.svg'
import Image1 from '../assets/images/home-bg/bg1.jpg'
import Image2 from '../assets/images/home-bg/bg2.jpg'
import Image3 from '../assets/images/home-bg/bg3.jpg'
import Image4 from '../assets/images/home-bg/bg4.jpg'
import Image5 from '../assets/images/home-bg/bg5.jpg'
import Image6 from '../assets/images/home-bg/bg6.jpg'

const Home = ({data}) => {

  const imageArray = [Image1, Image2, Image3, Image4, Image5, Image6]
 
  // randomize array here

  return (
    <div className="home">
      <BackgroundSlider
      images={[Image1, Image2, Image3, Image4, Image5, Image6]}
      duration={15} transition={5}
      />
      <div className="home__title-container">
        <p className="home__title">{data.site.siteMetadata.title}</p>
      </div>
      <AniLink swipe direction="down" to="/main" className="home__link arrow bounce">
        <img src={DownArrow} alt="down arrow"/>
      </AniLink>
    </div>
  )
}

export const query = graphql`
  query HomePageTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default Home;

