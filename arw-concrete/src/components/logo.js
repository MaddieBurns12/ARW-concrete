import React from 'react';
import LH from '../images/LH.jpg';


const Logo = () => {
    return(
        <div class='container'>
            <div class='row'>
                <div class='col'></div>
                <a href='/' class='col'>
                    <img src={LH} alt="testing" class='logo'/>
                </a>
                <div class='col'></div>
            </div>
        </div>
    )
}

export default Logo;
