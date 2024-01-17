import React, {useState} from 'react'
import './Header.css';
import { Link } from 'react-scroll';

import Logo from '../../assets/logo.png';
import Bars from '../../assets/bars.png';

const Header = () => {

  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpend, setMenuOpend] = React.useState(false);

  return (
    <div className='header'>

        <img src={Logo} alt='logo' className='logo' />

        {menuOpend === false && mobile === true ? (
          <div
            style={
              {
                backgroundColor: 'var(--appColor)',
                padding:'0.5rem', 
                borderRadius:'10px'
              }}
            onClick={() => setMenuOpend(true)}
          >
            <img 
              src={Bars} 
              alt="bars" 
              style={{width:'1.5rem', height:'1.5rem'}}
            />
          </div>
        ) : (
          <ul className='headerMenu'>
            <li>
              <Link
                onClick={() => setMenuOpend(false)}
                to='home'
                span={true}
                smooth={true}
              >
                Home
              </Link>  
            </li> 
            <li>
                <Link
                  onClick={() => setMenuOpend(false)}
                  to='Programs'
                  span={true}
                  smooth={true}
                >
                  Programas
              </Link>  
            </li> 
            <li>
              <Link
                 onClick={() => setMenuOpend(false)}
                 to='reasons'
                 span={true}
                 smooth={true}
              >
                Por que nós?
              </Link>    
            </li> 
            <li>
              <Link
                 onClick={() => setMenuOpend(false)}
                 to='plans'
                 span={true}
                 smooth={true}
              >
                Planos
              </Link>  
            </li> 
            <li>
              <Link
                onClick={() => setMenuOpend(false)}
                to='testimonials'
                span={true}
                smooth={true}
              >
                Depoimentos
              </Link>  
            </li> 
        </ul>
        )}
    </div>
  )
}

export default Header;
