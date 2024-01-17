import React, {useState} from 'react';
import './Testimonials.css';
import { testimonialsData } from '../../data/testimonialsData';
import  leftArrow  from '../../assets/leftArrow.png';
import  rightArrow  from '../../assets/rightArrow.png';

const Testimonials = () => {

    const [selected, setSelected] = useState(0);
    const tLength = testimonialsData.length;

    return (
        <div className='Testimonials'>
            <div className='left-t'> 
                <span>Testemunhas</span>
                <span  className='strokeText'>Oque elas</span>
                <span>dizem sobre a gente</span>
                <span>
                    {testimonialsData[selected].review}
                </span>
                <span>
                    <span style={{color:'var(--orange)'}}>
                        {testimonialsData[selected].name}
                    </span>{" "}
                        - {testimonialsData[selected].status}
                </span>
            </div>

            <div className='right-t'>

                <div className='borderOrange'></div>
                <div></div>

                <img src={testimonialsData[selected].image} alt="testimonialsImage" />

                <div className="arrows">
                    <img 
                        src={leftArrow} 
                        alt="leftArrrow"
                        onClick={()=>{
                            selected === 0?selected(tLength -1):
                            setSelected((prev)=>prev -1)
                        }}
                    />
                    <img 
                        src={rightArrow} 
                        alt="rigthArrow" 
                        onClick={() => {
                            selected === tLength -1
                            ? setSelected(0)
                            : setSelected((prev) => prev +1)
                        }}
                    />
                </div>

            </div>

        </div>
    )
}

export default Testimonials;
