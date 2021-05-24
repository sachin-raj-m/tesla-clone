import React from 'react'
import "./Header.css"
import TeslaLogo from '../assets/images/teslaLogoSmall.svg'

const Header = () => {
    return (
        <div className="header">
            <div className="header__logo">
                <img src={TeslaLogo} alt="" />
            </div>

            <div className="header__center">
                <p>MODEL S</p>
                <p>MODEL 3</p>
                <p>MODEL X</p>
                <p>MODEL Y</p>
                <p>SOLAR ROOF</p>
                <p>SOLAR PANELS</p>
            </div>

            <div className="header__right">
                <p>Shop</p>
                <p>Tesla Account</p>
            </div>
            
        </div>  
    )
}

export default Header
