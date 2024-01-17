import React from 'react'
import './Programs.css';

import RightArrow from '../../assets/rightArrow.png';
import { programsData } from '../../data/programsData';

const Programs = () => {
  return (
    <div>
        <div className="Programs" id="Programs">

            <div className="programsHeader">
                <span className='strokeText'>
                    Explore nossos
                </span>
                <span>
                    Programas
                </span>
                <span className='strokeText'>
                    para meter o shape
                </span>
            </div>

            <div className="programCategories">
                {programsData.map((program) => (
                    <div className="category">
                        
                        {program.image}
                        <span>
                            {program.heading}
                        </span>
                        <span>
                            {program.details}
                        </span>

                        <div className="joinNow">
                            <span>
                                Entre agora
                            </span>
                            <img src={RightArrow} alt="Right Arrow"/>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    </div>
  )
}

export default Programs;
