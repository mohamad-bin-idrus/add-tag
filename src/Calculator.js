import React, {Component} from 'react';

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
  	const temperature = this.state.temperature;
  	return(
  	<fieldset>
  	  <legend> Masukkan suhu dalam celsius:</legend>
  	  <input 
  	    value={temperature}
  	    onChange={this.handleChange} />
  	  <BoilingVerdict
  	    celsius={parseFloat(temperature)} />
  	</fieldset>
  	);
  }
}

export default Calculator;