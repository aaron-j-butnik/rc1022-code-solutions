import React from 'react';

export class PasswordInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ''
    };
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  errorMessage() {
    const { password } = this.state;
    if (password === '') {
      return 'A password is required.';
    } else if (password.length < 8) {
      return 'Your password is too short.';
    }
  }

  render() {
    const errorMessage = this.errorMessage();
    const xOrCheck = this.state.password === '' || this.state.password.length < 8 ? 'fa-x' : 'fa-check';
    return (
      <div>
        <div>
          <label htmlFor='password'> Password:</label>
        </div>
        <div className="password">
          <input id='password' type="password" value={this.state.password} onChange={this.handlePasswordChange} />
        </div>
        <div className='icon'>
          <i className={`fa-solid ${xOrCheck}`}></i>
        </div>
        <div>
          <p className='error-message'>
            {errorMessage}
          </p>
        </div>
      </div>
    );
  }
}
