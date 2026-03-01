import React from "react";

// Define the props interface
interface GreetingProps {
  name: string;
}

// The component accepts props of type GreetingProps
const Greeting: React.FC<GreetingProps> = (props) => {
  // Access the name property from props
  return <div>Hello, {props.name}!</div>;
};

export default Greeting;
