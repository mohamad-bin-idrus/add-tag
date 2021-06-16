import React,{Component} from 'react';
class EssayForm extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
  	  value: 'Terserah mau nulis apa'
  	};

  	this.handleChange = this.handleChange.bind(this);
  	this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
  	this.setState({value: event.target.value});
  }

  handleSubmit(event) {
  	alert('Tulisan yang terkirim: ' + this.state.value);
  	event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Tulisan:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
  	);
  }
} 

export default EssayForm;