import React from 'react';

const Navbar = () => {
    return (
        <nav className="nav" class='container bar'>
            <div class='row'>
                <div class='col'></div>
                
                <p class='col'>
                    <a href='./careers'>Careers/Internships</a>
                </p>
                <p class='col'>
                    <a href='./safety'>Safety Page</a>
                </p>
                <p class='col'>
                    <a href='./about'>About Us</a>
                </p>
                <p class='col'>
                    <a href='./services'>Services</a>
                </p>
                <div class='col'></div>
            </div>
        </nav>
    )
}

export default Navbar;