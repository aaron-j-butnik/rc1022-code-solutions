import React from 'react';

export class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggleAppDrawer = this.toggleAppDrawer.bind(this);
  }

  toggleAppDrawer() {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen
    });
  }

  render() {
    const toggleBars = this.state.isOpen ? 'hidden' : 'fa-solid fa-bars';
    const toggleMenu = this.state.isOpen ? 'menu' : 'hidden';
    const toggleBackground = this.state.isOpen ? 'grey-bg' : 'hidden';
    return (
      <div className="main">
        <div className="btn">
          <i className={toggleBars} onClick={this.toggleAppDrawer}></i>
        </div>
        <div className={toggleMenu}>
          <h1>Menu</h1>
          <ul>
            <li onClick={this.toggleAppDrawer}>About</li>
            <li onClick={this.toggleAppDrawer}>Get Started</li>
            <li onClick={this.toggleAppDrawer}>Sign In</li>
          </ul>
        </div>
        <div className={`${toggleBackground}`} onClick={this.toggleAppDrawer}>
        </div>
      </div>
    );
  }
}
