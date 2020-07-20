import React from "react";
import './Form.css'

export const myFirstContext = React.createContext()

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            origin: '',
            destiny: '',
            latorigin: '',
            longorigin: '',
            latdestiny: '',
            longdestiny: '',
            resultapi: ''
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


        fetch(`https://primeraapi.herokuapp.com/points?origen=${origin}&destino=${destiny}`, {
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

        fetch(`http://prubeapi.herokuapp.com/`, {
            method: "GET"
        })
            .then(response => {
                return response.json();
            })
            .then(data => {
                data.features[0].geometry.coordinates.map((data) => {
                    this.setState({ ...this.state, resultapi: data });
                    console.log(this.state)
                })
            }).catch((error) => {
                console.error('Error:', error);
            });

    }

    render() {
        return (
            <form className="form"
                onSubmit={this.handleSubmit.bind(this)}> 
                <div className="finder">
                    <div className="icons">
                        <div >
                            <img
                                src={["img/ThirdWindow/CircleForm/CircleForm.svg","img/ThirdWindow/CircleForm/CircleForm.png"]}
                                alt="logo"
                                srcSet="img/ThirdWindow/CircleForm/CircleForm@2x.png 2x, img/ThirdWindow/CircleForm/CircleForm@3x.png 3x"
                                className="icon-form"
                            ></img>
                            <label htmlFor="origin"></label>
                            <input type="text" className="ubication" id="origin" name="origin" value={this.state.origin} placeholder="Tu ubicación" onChange={this.handleInputChange} />
                        </div>
                        <div>
                            <img
                                src={["img/ThirdWindow/AlForm/AlForm.svg","img/ThirdWindow/AlForm/AlForm.png"]}
                                alt="logo"
                                srcSet="img/ThirdWindow/AlForm/AlForm@2x.png 2x, img/ThirdWindow/AlForm/AlForm@3x.png 3x"
                                className="icon-form"
                            ></img>
                            <label htmlFor="destiny"></label>
                            <input type="text" className="ubication" id="destiny" name="destiny" value={this.state.destiny} placeholder="Buscar destino" onChange={this.handleInputChange} />
                            <button type="submit" onClick={this.props.clickHandler} className="button-go-to-destiny"><p className="button-go-to-destiny-p">ir al destino</p></button>
                        </div>
                    </div>
                </div>
            </form>)
    }
}

export default Form
