import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
      count2: 90,
    };
    console.log('inside: class component constructor')
  }

  componentDidMount() {
    console.log('inside: class component componentDidMount');
  }

  render() {
    console.log('inside: class component render')
  
    const { name, location, contact } = this.props;
    const { count } = this.state;
    // console.log(this.state); 
    return (
      <div className="user-details">
        <h4>Count - {count}</h4>
        <button
          onClick={() => {
            this.setState({
              count: count + 1,
            });
          }}
        >
          Click
        </button>
        <h3>Name : {name}</h3>
        <h3>Location : {location}</h3>
        <h3>Contact : {contact}</h3>
      </div>
    );
  }
}

export default UserClass;
