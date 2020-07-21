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

    let origin = this.state.origin;
    let destiny = this.state.destiny;
    console.log(origin);
    console.log(destiny);

    async function getCoord(origin, destiny) {
      let response = await fetch(
        `https://primeraapi.herokuapp.com/points?origen=${origin}&destino=${destiny}`
      );
      let data = await response.json();
      return data;
    }

    getCoord(origin, destiny).then((data) => {
      console.log(data);
      this.setState({
        ...this.state,
        latorigin: data.bbox[0],
        longorigin: data.bbox[1],
        latdestiny: data.bbox[2],
        longdestiny: data.bbox[3],
      });
    });

    let latorigin = this.state.latorigin;
    let longorigin = this.state.longorigin;
    let latdestiny = this.state.latdestiny;
    let longdestiny = this.state.longdestiny;

    async function takeCoord() {
      let response = await fetch(
        `http://prubeapi.herokuapp.com/${latorigin}/${longorigin}/${latdestiny}/${longdestiny}`
      );
      let data = await response.json();
      return data;
    }

    takeCoord(origin, destiny).then((data) => {
      console.log(data)
      this.setState({
        ...this.state,
        resultapi: data.features[0].geometry.coordinates,
      });
      this.setState({ ...this.state, showResults: false });
    }).then(
      () => this.props.clickHandler(this.state.resultapi)
    );
  }

  render() {
    return (
      <div>
        {this.state.showResults ? (
          <form className="form" onSubmit={this.handleSubmit.bind(this)}>
            <div className="finder">
              <div className="icons">
                <div>
                  <img
                    src="img/ThirdWindow/CircleForm/CircleForm.svg"
                    src="img/ThirdWindow/CircleForm/CircleForm.png"
                    alt="logo"
                    srcSet="img/ThirdWindow/CircleForm/CircleForm@2x.png 2x, img/ThirdWindow/CircleForm/CircleForm@3x.png 3x"
                    className="icon-form"
                  ></img>
                  <label htmlFor="origin"></label>
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
                <div>
                  <img
                    src="img/ThirdWindow/AlForm/AlForm.svg"
                    src="img/ThirdWindow/AlForm/AlForm.png"
                    alt="logo"
                    srcSet="img/ThirdWindow/AlForm/AlForm@2x.png 2x, img/ThirdWindow/AlForm/AlForm@3x.png 3x"
                    className="icon-form"
                  ></img>
                  <label htmlFor="destiny"></label>
                  <input
                    type="text"
                    className="ubication"
                    id="destiny"
                    name="destiny"
                    value={this.state.destiny}
                    placeholder="Buscar destino"
                    onChange={this.handleInputChange}
                  />
                  <button
                    type="submit"
                    className="button-go-to-destiny"
                  >
                    <p className="button-go-to-destiny-p">ir al destino</p>
                  </button>
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
