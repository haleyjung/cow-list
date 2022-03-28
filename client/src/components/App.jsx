import React from 'react';
import axios from 'axios';
import Form from './Form.jsx';
import CowList from './CowList.jsx';
import SelectedCow from './SelectedCow.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        isClicked: false,
        cows: [{name: '', description: ''}],
        selectedCow: {name: 'test', description: 'test'}
    }
    this.getCows = this.getCows.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.getCows();
  }

  getCows() {
    axios.get('/api/cows')
      .then(res => {
        console.log('Cows fetched from Server!', res.data);
        this.setState({
          // data.data gives an array
          cows: res.data,
          selectedCow: res[0]
        })
        console.log('Updated state:', this.state)
      })
      .catch(err => {
        console.log('Failed to fetch cows from Server');
      })
  }

  handleClick(newCow) {
    console.log('newCow:', newCow)
    this.setState({
      isClicked: true,
      selectedCow: {
        name: newCow.name,
        description: newCow.description
      }
    })
    console.log('HERE', this.state.selectedCow)
  }

  render() {

    return (
      <div>
        <div>
          {this.state.isClicked
          ? <SelectedCow selectedCow={this.state.selectedCow}/>
          : <div></div>
          }
        </div>

        <h2>Add A Cow</h2>
        <Form
          getCows={this.getCows}
        />

        <h2>Cows List</h2>
        <CowList
          cows={this.state.cows}
          handleClick={this.handleClick}
        />
      </div>
    )
  }
}