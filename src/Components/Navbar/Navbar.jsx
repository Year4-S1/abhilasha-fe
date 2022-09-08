import React from 'react'
import logo from '../../Assets/logo.png'
import '../Navbar/Navbar.scss'

const Navbar = () => {
    return (
        <div>
            <div className='navbar-custom'>

                <div>
                    <img src={logo} alt='logo' className='nav-logo'/>
                </div>
                <div className='menu-custom center-items-v'>
                    <div className='menu-item'>Home</div>
                    <div className='menu-item' >Our Sevices</div>
                    <div className='menu-item'>About us</div>
                </div>
                <div className='center-items-h upgrade-btn-div'>
                    <div className='upgrade-btn center-items-v '>
                        Upgrade to Pro
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar