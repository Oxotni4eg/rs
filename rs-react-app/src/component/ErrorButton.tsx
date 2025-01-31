import React from 'react';

type State = {
  counter: number;
};

class ErrorButton extends React.Component {
  state: State = {
    counter: 0,
  };

  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  render() {
    if (this.state.counter === 1) {
      // Simulate an error!
      throw new Error('Simulated error.');
    }
    return (
      <div className="block-btn-error">
        <button onClick={this.handleClick}>Click me to throw an error</button>
      </div>
    );
  }
}

export default ErrorButton;
