import React from 'react';
import { plansData } from '../../data/plansData';
import whiteTick from '../../assets/whiteTick.png';
import './Plans.css';

const Plans = () => {
  return (
    <div className='plansContainer'>

        <div className='blur plansBlur-1'></div>
        <div className='blur plansBlur-2'></div>

        <div className='programsHeader'>
            <span className='strokeText'>Começe já</span>
            <span>Sua jornada</span>
            <span className='strokeText'>Com a gente</span>
        </div>

        <div className="plans">
          {plansData.map((plan, index) => (
            <div className='plan' key={index}>
              {plan.icon}
              <span>
                {plan.name}
              </span>
              <span>
                $ {plan.price}
              </span>

              <div className="features">
                {plan.features.map((feature, index) => (
                  <div className='feature'>
                    <img src={whiteTick} alt="white-tick" />
                    <span key={index}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className='benefits'>
                <span>Veja mais beneficios -&gt;</span>
                <button className='btn'>Começe agora</button>
              </div>

            </div>
          ))}
        </div>

    </div>
  )
}

export default Plans;
