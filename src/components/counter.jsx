import React, { Component } from "react";

class Counter extends Component {
  // state = {
  // value: this.props.counter.value,
  //tags: []
  //};

  //renderTags() {
  //if (this.state.tags.length === 0) return <p>No products available.</p>;

  //  return (
  //     <ul>
  //       {this.state.tags.map(tag => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  //constructor(){
  //    super();
  //    this.handleIncrement = this.handleIncrement.bind(this);
  //}

  // handleIncrement = product => {
  //   console.log(product);
  //   this.setState({ value: this.state.value + 1 });
  // };

  render() {
    // console.log("props", this.props);

    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter; // this.state; //object destructuring
    return count === 0 ? "Zero" : count;
    //return this.state.count === 0 ? <h1>Zero</h1> : this.state.count;
    //return this.state.count === 0 ? "Zero" : this.state.count;
  }
}

export default Counter;
