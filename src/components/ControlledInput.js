import React from "react";

class ControlledInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: ''
      };
    
    }
    handleChange = (event) => {
      this.setState({input : event.target.value});
    }
    render() {
        const {input} = this.state;
      return (
        <div>
          <input value={input} onChange={this.handleChange}></input>
  
          <h4>Controlled Input:</h4>
          <p>{input}</p>
        </div>
      );
    }
  };

  export default ControlledInput;