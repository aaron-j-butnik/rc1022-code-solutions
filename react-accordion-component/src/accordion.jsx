import React from 'react';

export class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked:
      false,
      id: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isClicked: !this.state.isClicked });
  }

  render() {
    const infoArray = this.props.info;
    const toggleContent = !this.state.isClicked ? 'content hidden' : 'content';
    const infoDisplay = infoArray.map(info =>
      <div className='container' key={info.id}>
        <div className='title' onClick={this.handleClick}>{info.language}</div>
        <div className={toggleContent}>{info.textContent}</div>
      </div>);
    return (
      infoDisplay
    );
  }
}
