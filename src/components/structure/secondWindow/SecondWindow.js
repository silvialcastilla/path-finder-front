import React from 'react'
import Logo from '../../logo/Logo'
import Description from '../../description/Description'
import Button from '../../button/Button'

import './SecondWindow.css'

const SecondWindow = () => {
    return (
        <div className="second-page">
            <Logo />
            <Description />
            {/*Hay que darle funcionalidad al botón*/}
            <Button />        
        </div>
    )
}

export default SecondWindow;