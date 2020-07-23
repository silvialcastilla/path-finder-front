import React from "react";
import "./Form.css";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      origin: "",
      destiny: "",
      latorigin: "",
      longorigin: "",
      latdestiny: "",
      longdestiny: "",
      resultapi: "",
      steps: "",
      showResults: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  onClick() {
    this.setState({ ...this.state, showResults: true });
  }

  handleSubmit(e) {
    e.preventDefault();

    async function getOrigin(origin) {
      let response = await fetch(
        `https://primeraapi.herokuapp.com/points?origen=${origin}`
      );
      let data = await response.json();
      return data;
    }

    async function getDestiny(destiny) {
      let response = await fetch(
        `https://segundaapi.herokuapp.com/points?destino=${destiny}`
      );
      let data = await response.json();
      return data;
    }


    async function takeCoord(latorigin, longorigin, latdestiny, longdestiny) {
      let response = await fetch(
        
        `https://nuestraapi.herokuapp.com/points?latorigin=${latorigin}&lonorigin=${longorigin}&latdestiny=${latdestiny}0&londestiny=${longdestiny}`
      );
      let data = await response.json();
      return data;
    }

    getOrigin(this.state.origin).then((data) => {
      console.log(data)
      this.setState({
        ...this.state, 
        latorigin: data.lat,
        longorigin: data.lng
      })
      console.log(data)
    }).then(() => getDestiny(this.state.destiny)
      .then((data) => {
        console.log(data)
        this.setState({
          ...this.state,
          latdestiny: data.lat,
          longdestiny: data.lng
        });
        console.log(this.state)
      })
      .then(() => 
        takeCoord(this.state.latorigin, this.state.longorigin, this.state.latdestiny, this.state.longdestiny)
          .then((data) => {
            console.log(data)
            this.setState({
              ...this.state,
              resultapi: data.features[0].geometry.coordinates, 
              steps: data.features[0].properties.segments[0]
            });
            this.setState({ ...this.state, showResults: false });
          }).then(() => 
              this.props.clickHandler(this.state.resultapi, this.state.steps)
      )));

  
  }

  render() {
    return (
      <div>
        {this.state.showResults ? (
          <form className="form" onSubmit={this.handleSubmit.bind(this)}>
            <div className="finder">
              <div className="icons">
                <div>
                  <div className="div-first">
                <label htmlFor="origin" className="ubication-label"></label>
                  <input
                    type="text"
                    className="ubication"
                    id="origin"
                    name="origin"
                    value={this.state.origin}
                    placeholder="Tu ubicación"
                    onChange={this.handleInputChange}
                  />
                  </div>
                  <div className="div-second">
                  <label htmlFor="destiny"></label>
                  <input
                    type="text"
                    className="destiny"
                    id="destiny"
                    name="destiny"
                    value={this.state.destiny}
                    placeholder="Buscar destino"
                    onChange={this.handleInputChange}
                  />
                  </div>
                  <div className="div-third">
                  <button
                    type="submit"
                    className="button-go-to-destiny"
                  >
                    <p className="button-go-to-destiny-p">ir al destino</p>
                  </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        ) : (
          <input
            onClick={this.onClick}
            type="text"
            className="first-form"
            id="origin"
            name="origin"
            placeholder="Buscar ubicación"
          />
        )}
      </div>
    );
  }
}

export default Form;
