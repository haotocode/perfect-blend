import React, {useState} from 'react';
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Typist from 'react-typist';
import ItemsCarousel from 'react-items-carousel';
import CoffeeReco from '../../assets/images/images/coffee-reco.png';
import './Recommendation.scss';

export default function Recommendation() {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    return (
        <div className="recommendation">
            <p>We think you'll like some of our recommendations:</p>
            <ItemsCarousel
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            numberOfCards={1}
            gutter={20}
            infiniteLoop={true}
            leftChevron={<button>{'<'}</button>}
            rightChevron={<button>{'>'}</button>}
            outsideChevron={false}
            className="recommendation__card-animation-wrapper"
            >
                <div className="recommendation__card">
                    <img src={CoffeeReco} alt="generic coffee packaging image" className="recommendation__card--image"/>
                    <div className="recommendation__card--coffee-info-container">
                        <p className="recommendation__card--coffee-title">Coffee Blend</p>
                        <p className="recommendation__card--coffee-description">This syrupy and sweet blend is perfect for those that like their coffee that says "coffee without sugar is no good". </p>
                    </div>
                    <AniLink className="recommendation__card--link" to='/shop'>Find Out More →</AniLink>
                </div>
                <div className="recommendation__card">
                    <img src={CoffeeReco} alt="generic coffee packaging image" className="recommendation__card--image"/>
                    <div className="recommendation__card--coffee-info-container">
                        <p className="recommendation__card--coffee-title">Coffee Blend</p>
                        <p className="recommendation__card--coffee-description">This syrupy and sweet blend is perfect for those that like their coffee that says "coffee without sugar is no good".</p>
                    </div>
                    <AniLink className="recommendation__card--link" to='/shop'>Find Out More →</AniLink>
                </div>
                <div className="recommendation__card">
                    <img src={CoffeeReco} alt="generic coffee packaging image" className="recommendation__card--image"/>
                    <div className="recommendation__card--coffee-info-container">
                        <p className="recommendation__card--coffee-title">Coffee Blend</p>
                        <p className="recommendation__card--coffee-description">This syrupy and sweet blend is perfect for those that like their coffee that says "coffee without sugar is no good".</p>
                    </div>
                    <AniLink className="recommendation__card--link" to='/shop'>Find Out More →</AniLink>
                </div>
            </ItemsCarousel>
            <div className="recommendation__btn-container">
                <AniLink to='/main' paintDrip duration={1}>
                    <button className="recommendation__btn">Home</button>
                </AniLink>
            </div>
        </div>
    )
}