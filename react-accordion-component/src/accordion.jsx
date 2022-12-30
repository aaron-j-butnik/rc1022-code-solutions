import React from 'react';

export class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked:
      null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (event.target.id === this.state.isClicked) {
      this.setState({ isClicked: null });
    } else {
      this.setState({ isClicked: event.target.id });
    }

  }

  render() {
    const infoArray = this.props.info;
    const infoDisplay = infoArray.map(info => {
      const toggleContent = this.state.isClicked === info.number ? 'content' : 'content hidden';
      return (
        <div className='container' key={info.number}>
          <div className='title' id={info.number} onClick={this.handleClick}>{info.language}</div>
          <div className={toggleContent}>{info.content}</div>
        </div>
      );
    });
    return (
      infoDisplay
    );
  }
}
