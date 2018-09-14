import React, { Component } from 'react';
import NavBar from './components/navbar'
import './App.css';
import Counters from './components/counters'

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  constructor(props) {
    super(props)
    console.log('App - Constructor')
    this.state = this.props.some
  }

  // perpect place to make Ajax calls to get data from the server
  componentDidMount() {
    // Ajax Call
    this.setState({})
  }

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;

    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    console.log(counters);
    this.setState({ counters });
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(e => e.id !== counterId);
    this.setState({
      counters: counters
    });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar 
          totalCounters={this.state.counters.filter(c => c.value>0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
