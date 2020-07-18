import React from 'react';
import { Link } from 'gatsby';
import BackgroundSlider from 'react-background-slider'
import '../styles/index.scss';
import Image1 from '../assets/images/home-bg/bg1.jpg'
import Image2 from '../assets/images/home-bg/bg2.jpg'
import Image3 from '../assets/images/home-bg/bg3.jpg'

const Home = () => {

  return (
    <div>
      <BackgroundSlider
      images={[Image1, Image2, Image3]}
      duration={15} transition={5}
      />
      <div>
        <h1>Home page picture slide show</h1>
        <Link to="/main" >Continue</Link>
      </div>
    </div>
  )
}

export default Home;