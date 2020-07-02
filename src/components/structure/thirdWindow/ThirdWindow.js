import React from 'react'
import Form from '../../form/Form'
import Button from '../../button/Button'
import MockMap from './../../mockMap/MockMap'

import './ThirdWindow.css'

const ThirdWindow = () => {
    return (
        <div className="third-page">
            <div className="form-page">
            <Form />
            <Button />
            </div>
            <MockMap />
            <Button />
        </div>
    )
}

export default ThirdWindow