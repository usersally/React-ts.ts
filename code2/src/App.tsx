import React, { Component } from "react";

// Define the state interface
interface CounterState {
  count: number;
}

type CounterProps = Record<string, never>; // Represents an empty object type

class Counter extends Component<CounterProps, CounterState> {
  // State is properly typed with CounterState
  state: CounterState = {
    count: 0,
  };

  // Type-safe increment method
  increment = (): void => {
    // TypeScript ensures count is treated as a number
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
