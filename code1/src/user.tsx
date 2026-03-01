import React from "react";

interface GreetingProps {
  name: string;
}

const Greeting: React.FC<GreetingProps> = (props) => {
  return <div>Hello, {props.name}!</div>;
};

export default Greeting;
