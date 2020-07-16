import React from "react";
import './Form.css'


class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            origin: '',
            destiny: '',
            latorigin: '',
            longorigin: '',
            latdestiny: '',
            longdestiny: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event) {

        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
          });
          }

          handleSubmit(e) {
            e.preventDefault();
            let origin = this.state.origin;
            let destiny = this.state.destiny;
            console.log(origin)
            console.log(destiny)
    
    
            fetch(`http://prubeapi.herokuapp.com/${origin}/${destiny}`, {
                method: "GET"
            })
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data)
                    this.setState({ ...this.state, latorigin: data.bbox[0], longorigin: data.bbox[1], latdestiny: data.bbox[2], longdestiny: data.bbox[3] });
            }).catch((error) => {
                console.error('Error:', error);
            });
    
            let latorigin = this.state.latorigin
            let longorigin = this.state.longorigin
            let latdestiny = this.state.latdestiny
            let longdestiny = this.state.longdestiny
    
            fetch(`http://prubeapi.herokuapp.com/${latorigin}/${longorigin}/${latdestiny}/${longdestiny}`, {
                method: "GET"
            })
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data)
            }).catch((error) => {
                console.error('Error:', error);
            });
    
        }
    
        render() {
                return (
        <form className="form"
        onSubmit={this.handleSubmit.bind(this)}>
            <div className="finder">
            <label htmlFor="origin"></label>
                <input type="text" id="origin" name="origin" value={this.state.origin} onChange={this.handleInputChange} />
                <label htmlFor="destiny"></label>
                <input type="text" id="destiny" name="destiny" value={this.state.destiny} onChange={this.handleInputChange} />
                <button type="submit">Ir</button>
                </div>
        </form>) 
}}

export default Form;
