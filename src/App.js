import React, { Component } from "react";

import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  constructor() {
    super();
    console.log("App - Constructor");
  }

  componentDidMount() {
    console.log("App - Mounted");
  }

  handleIncrement = counter => {
    const counters = [...this.state.counters]; //spread operater to clone the array
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    //  counters[0].value++;//never use this!!
    this.setState({ counters });
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters]; //spread operater to clone the array
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;

    //  counters[0].value++;//never use this!!
    this.setState({ counters });
  };

  handleDelete = counterId => {
    console.log("Event handle called", counterId);
    const counters = this.state.counters.filter(c => c.id != counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  render() {
    console.log("App - Rendered");
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
