import { useState } from "react";

const User = ({ name, location, contact }) => {

  console.log('inside: functional component')

  const [count, setCount] = useState(0);

  return (
    <div className="user-details">
      <h4>Count : {count}</h4>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
      <h3>Name : {name}</h3>
      <h3>Location : {location}</h3>
      <h3>Contact : {contact}</h3>
    </div>
  );
};

export default User;
