import React from 'react';

export class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    // this.startTime = this.startTime.bind(this);
    // this.stopTime = this.stopTIme.bind(this);
    // this.resetTime = this.resetTime.bind(this);
  }

  startTime() {
    this.time = setInterval(() =>
      this.setState({
        count: this.state.count + 1, isPaused: false
      }), 1000);
  }

  stopTime() {
    clearInterval(this.time);
  }

  resetTime() {
    this.setState({ count: 0 });
  }

  render() {
    // const isPaused = this.state.isPaused;
    // if (isPaused) {
    return (
      <div className="watch-container">
        <h1>Timer: {this.state.count}</h1>
      </div>
    );
    // }
  }
}
