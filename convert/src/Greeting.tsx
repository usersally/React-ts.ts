//code 1
import React from "react";

// Define a type (interface) for the component props.

interface GreetingProps {
  name: string;
}

//Apply the props type to the component.

const Greeting = ({ name }: GreetingProps) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;

//code 2
import React, { Component } from "react";

/*
 Step 1: Define the type for the component state.
 The state contains only one property: count (number).
*/
interface CounterState {
  count: number;
}

/*
 Step 2: Extend Component with generics.
 First generic = Props type ({} because no props)
 Second generic = State type
*/
class Counter extends Component<{}, CounterState> {
  
  /*
   Step 3: Initialize state with correct type.
   TypeScript ensures count is a number.
  */
  state: CounterState = {
    count: 0,
  };

  /*
   Step 4: Define increment method.
   Using arrow function to preserve 'this'.
  */
  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  /*
   Render method.
  */
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
