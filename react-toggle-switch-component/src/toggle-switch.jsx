import React from 'react';

export class CustomSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { switchOff: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      switchOff: !this.state.switchOff
    });
  }

  render() {
    const switchOff = this.state.switchOff;
    if (switchOff) {
      return (
        <div>
          <div className='container-switch-off'>
            <button className='off' onClick={this.handleClick}></button>
          </div>
          <div className='container-text'>
            <span>OFF</span>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className='container-switch-on'>
            <button className='on' onClick={this.handleClick}></button>
          </div>
          <div className='container-text'>
            <span>ON</span>
          </div>
        </div>
      );
    }
  }
}
