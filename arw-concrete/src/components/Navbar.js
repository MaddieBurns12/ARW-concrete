import React from 'react';

const Navbar = () => {
    return (
        <nav className='nav'>
            <div className='container'>
            <div className='row'>
                <h3 className='col select-container'>
                    <a href='./careers' className='page-select'>Careers/Internships</a>
                </h3>
                <h3 className='col select-container'>
                    <a href='./safety' className='page-select'>Safety Page</a>
                </h3>
                <h3 className='col select-container'>
                    <a href='./about' className='page-select'>About Us</a>
                </h3>
                <h3 className='col select-container'>
                    <a href='./services' className='page-select'>Services</a>
                </h3>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;