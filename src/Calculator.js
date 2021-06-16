import React, {Component} from 'react';
import TemperatureInput from './TemperatureInput';



function BoilingVerdict(props) {
	if (props.celsius >= 100) {
	  return <p> Air telah mendidih.</p>;
	}
	return <p> Air belum mendidih </p>;
}

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: ''};
  }

  handleChange(e) {
    this.setState({temperature: e.target.value});
  }

  render() {
  	return(
      <div>
        <TemperatureInput scale="c" />
        <TemperatureInput scale="f" />
      </div>
  	);
  }
}

export default Calculator;