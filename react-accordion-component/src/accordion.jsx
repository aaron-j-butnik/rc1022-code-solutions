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
    // console.log(infoArray);
    const infoDisplay = infoArray.map(info =>
      <div className='container' key={info.id} onClick={this.handleClick}>
        <div className='title'>{info.language}</div>
        <div className='content'>{info.textContent}</div>
      </div>);
    return (
      infoDisplay
    );
  }
}
