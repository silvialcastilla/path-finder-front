import React from 'react'
import Logo from '../../logo/Logo'
import Description from '../../description/Description'
import Button from '../../button/Button'

const SecondWindow = () => {
    return (
        <div>
            <Logo />
            <Description />
            {/*Hay que darle funcionalidad al botón*/}
            <Button />        
        </div>
    )
}

export default SecondWindow;