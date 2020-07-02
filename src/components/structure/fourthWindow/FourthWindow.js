import React from 'react'
import Form from '../../form/Form'
import Button from '../../button/Button'
import WalkMap from '../../walkMap/WalkMap'

import './FourthWindow.css'

const FourthWindow = () => {
    return (
        <div className="fourth-page">
            <div className="form-page">
            <Form />
            <Button />
            </div>
            <WalkMap />
            <Button />
        </div>
    )
}

export default FourthWindow