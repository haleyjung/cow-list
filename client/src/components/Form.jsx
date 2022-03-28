import React from 'react';
import axios from 'axios';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    console.log(e.target.name, e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let newCow = {

    }
    axios.post('/api/cows', this.state)
    .then(res => {
      console.log('Successfully sent a new cow:', res.data);
      this.props.getCows();
      })
      .catch(err => {
        console.log('Failed to send a new cow:', err)
      })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          placeholder='Cow Name'
          name='name'
          value={this.name}
          onChange={this.handleInputChange}
        />
        <input
          type='text'
          placeholder='Cow Description'
          name='description'
          value={this.description}
          onChange={this.handleInputChange}
        />
        <input
          type='submit'
          value='Submit'
        />
      </form>
    )
  }
}