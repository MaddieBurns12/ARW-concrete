import React from 'react';
import LH from '../images/LH.jpg';


const Logo = () => {
    return(
        <div className='container'>
            <div className='row'>
                <div className='col'></div>
                <a href='/' className='col'>
                    <img src={LH} alt="testing" className='logo'/>
                </a>
                <div className='col'></div>
            </div>
        </div>
    )
}

export default Logo;
