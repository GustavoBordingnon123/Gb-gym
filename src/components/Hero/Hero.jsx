import React from 'react'
import Header from '../Header/Header';
import './Hero.css';

import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';

const Hero = () => {
  return (
    <div className='hero'>

        <div className='left-h'>
            <Header />
            <div className="theBestAd">
                <div></div>
                <span>A melhor academia da cidade!</span>
            </div>

           <div className="heroText">

                <div>
                    <span className='strokeText'>Shape </span>
                    <span>Your</span>
                </div>
                <div>
                    <span>Ideal body</span>
                </div>
                <div>
                    <span>
                    Aqui, nós ajudaremos você a moldar e construir o seu corpo ideal e a viver a sua vida ao máximo.
                    </span>
                </div>
            </div> 

            <div className="figures">
                
                <div>
                    <span>+140</span>
                    <span>EXPERT COACHES</span>
                </div>

                <div>
                    <span>+978</span>
                    <span>MEMBERS JOINED</span>
                </div>

                <div>
                    <span>+50</span>
                    <span>FITNESS PROGRAMS</span>
                </div>

            </div>

            <div className="heroButtons">
                <button className='btn'>Comece ja</button>
                <button className='btn'>Saiba mais</button>
            </div>
        </div>
        
        <div className='right-h'>
            <button className='btn'>Join now</button>

            <div className="heartRate">
                <img src={Heart} alt="Heart" />
                <span>Heart rate</span>
                <span>116 bpm</span>
            </div>

            <img src={hero_image} alt="Hero" className='heroImage' />

            <img src={hero_image_back} alt="Hero" className='heroImageBack' />

            <div className="calories">
                <img src={Calories} alt="Calories" />

                <div>
                    <span>Calories</span>
                    <span>640 kcal</span>
                </div>
             
            </div>

        </div>

    </div>
  )
}

export default Hero;
