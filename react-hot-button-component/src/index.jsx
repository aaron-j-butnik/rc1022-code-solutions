import React from 'react';
import ReactDOM from 'react-dom/client';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    const timesClicked = this.state.counter;
    if (timesClicked < 3) {
      return <button className='normal' onClick={this.handleClick}>Hot Button</button>;
    } else if (timesClicked < 6) {
      return <button className='cold' onClick={this.handleClick}>Hot Button!</button>;
    } else if (timesClicked < 9) {
      return <button className='cool' onClick={this.handleClick}>Hot Button!</button>;
    } else if (timesClicked < 12) {
      return <button className='tepid' onClick={this.handleClick}>Hot Button!</button>;
    } else if (timesClicked < 15) {
      return <button className='warm' onClick={this.handleClick}>Hot Button!</button>;
    } else if (timesClicked < 18) {
      return <button className='hot' onClick={this.handleClick}>Hot Button!</button>;
    } else {
      return <button className='atomic' onClick={this.handleCLick}>Hot Button!</button>;
    }
  }
}
const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
const element = <CustomButton />;
root.render(element);
