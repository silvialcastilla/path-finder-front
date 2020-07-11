import React from 'react'
import './FirstWindow.css'

class FirstWindow extends React.Component {
    constructor () {
        super()
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (e) => {
        e.preventDefault()
        console.log('pulse')
        this.props.history.push('/presentation');
    }

    render(){
        return (
            <div className="first-page">
            <img src="img/logo.png" alt="logo" className="logo" onClick={this.handleClick}></img>
            </div>
        )
    }
}

export default FirstWindow