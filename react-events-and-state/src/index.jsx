import React from 'react';
import ReactDOM from 'react-dom/client';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isClicked: false };
  }

  handleClick() {
    this.setState({ isClicked: true });
  }

  render() {
    const isClicked = this.state.isClicked;
    const styleBtn = {
      borderColor: 'deepskyblue',
      borderWidth: '4px',
      borderRadius: '6px'
    };
    if (isClicked) {
      return <button style={styleBtn}>Thanks!</button>;
    } else {
      return <button onClick={this.handleClick}>Click Me</button>;
    }
  }
}

const htmlDiv = document.querySelector('#root');
const root = ReactDOM.createRoot(htmlDiv);
const element = <CustomButton />;
root.render(element);
