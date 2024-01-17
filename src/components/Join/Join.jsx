import React, { useRef } from 'react'
import './Join.css';

// import emailJs from '@emailjs/browser';

const Join = () => {

    const form = useRef();

    // const sendEmail = (e) => {
    //     e.preventDefault();
    
    //     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    //       .then((result) => {
    //           console.log(result.text);
    //       }, (error) => {
    //           console.log(error.text);
    //       });
    // };

    return (
        <div className='Join' id='join-us'>
            
            <div className='left-j'>
                <hr />
                <div>
                    <span className='strokeText'>Preparado para </span>
                    <span>Evoluir</span>
                </div>
                <div>
                    <span>Seu corpo </span>
                    <span className='strokeText'>Com a gente</span>
                </div>

            </div>

            <div className='right-j'>

                <form ref={form} className='emailContainer'>
                    <input 
                        type="email" 
                        name='userEmail' 
                        placeholder='Digite seu email...'
                    />
                    <button className='btn btn-j'>
                        Começe já
                    </button>
                </form>

            </div>

        </div>
    )
}

export default Join;
