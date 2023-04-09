import React from "react";

const scaleNames = {
    c: 'Цельсий',
    f: 'Фарингейтов'
  };

class TemperatureInput extends React.Component {
    constructor(props) {
      super(props);
    }
  
    handleChange = e => {
      this.props.onTemperatureChange(e.target.value);
    }
  
    render() {
      const temperature = this.props.temperature;
      const scale = this.props.scale;
      return (
        <fieldset>
          <legend>Напиши сюда температуру {scaleNames[scale]}:</legend>
          <input value={temperature}
                 onChange={this.handleChange} />
        </fieldset>
      );
    }
  }

  export default TemperatureInput