import React from 'react';
import TEST from '../images/TEST.mp4';


const Home = () => {
    return(
        <div className='home'>
            <video autoPlay="autoplay" loop="loop" muted id='home-image'>
                <source src={TEST} type="video/mp4"/>
            </video>
        </div>
    )
}

export default Home;