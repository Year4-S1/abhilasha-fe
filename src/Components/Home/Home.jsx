import { React, useState } from 'react'
import logo from '../../Assets/logo.png'
import '../Home/Home.scss'

const Home = () => {
    return (
        <div>
            <div className='logo-home'>
                <img src={logo} alt='logo' style={{ height: '180px' }} />
            </div>
            <div className=' txt-div'>
                <div className=' txt-area' style={{height:'100%'}}>
                    <div className='txt-box-container'>
                        <input className='txt-box' />
                        <div className='center-items-h upgrade-btn-div'>
                    <div className='upgrade-btn center-items-v '>
                        Check Spelling & Grammar
                    </div>
                </div>
                    </div>
                    <div className='txt-box-container'>
                        
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home