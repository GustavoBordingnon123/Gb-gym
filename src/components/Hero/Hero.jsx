import React from 'react'
import Header from '../Header/Header';
import './Hero.css';

import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';

import NumberCounter from 'number-counter';

import { motion } from 'framer-motion';

const Hero = () => {

    const transition = {type:'spring', duration : 3}
    const mobile = window.innerWidth <= 768 ? true : false;

    return (
        <div className='hero' id='home'>

            <div className='blur heroBlur'></div>

            <div className='left-h'>
                <Header />
                <div className="theBestAd">
                    <motion.div
                        initial={{left: mobile ? '140px' : '200'}}
                        whileInView={{left:'8px'}}
                        transition={{...transition, type:'tween'}}
                    ></motion.div>
                    <span>A melhor academia da cidade!</span>
                </div>

            <div className="heroText">

                    <div>
                        <span className='strokeText'>Construa </span>
                        <span>Seu</span>
                    </div>
                    <div>
                        <span>Corpo ideal</span>
                    </div>
                    <div>
                        <span>
                        Aqui, nós ajudaremos você a moldar e construir o seu corpo ideal e a viver a sua vida ao máximo.
                        </span>
                    </div>
                </div> 

                <div className="figures">
                    
                    <div>
                        <span>
                            <NumberCounter end={140} start={100} delay='4' preFix="+" />
                        </span>
                        <span>TREINADORES EXPERIENTES</span>
                    </div>

                    <div>
                        <span>
                            <NumberCounter end={978} start={200} delay='4' preFix="+" />
                        </span>
                        <span>MENBROS ATIVOS</span>
                    </div>

                    <div>
                        <span>
                            <NumberCounter end={50} start={0} delay='4' preFix="+" />
                        </span>
                        <span>PROGRAMAS FITNESS</span>
                    </div>

                </div>

                <div className="heroButtons">
                    <button className='btn'>Comece ja</button>
                    <button className='btn'>Saiba mais</button>
                </div>
            </div>
            
            <div className='right-h'>
                <button className='btn'>Comece já</button>

                <motion.div 
                    className="heartRate"
                    initial={{right:'-1rem'}}
                    whileInView={{right:'4rem'}}
                    transition={transition}

                >
                    <img src={Heart} alt="Heart" />
                    <span>Heart rate</span>
                    <span>116 bpm</span>
                </motion.div>

                <img src={hero_image} alt="Hero" className='heroImage' />

                <motion.img 
                    src={hero_image_back} 
                    alt="Hero" 
                    className='heroImageBack' 
                    initial={{right:'11rem'}}
                    whileInView={{right:'20rem'}}
                    transition={transition}
                />

                <motion.div 
                    className="calories"
                    initial={{right:'37rem'}}
                    whileInView={{right:'28rem'}}
                    transition={transition}
                >
                    <img src={Calories} alt="Calories" />

                    <div>
                        <span>Calorias Queimadas</span>
                        <span>640 kcal</span>
                    </div>
                
                </motion.div>

            </div>

        </div>
    )
}

export default Hero;
