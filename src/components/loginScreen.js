import { h, Component } from 'preact'
import { connect } from 'unistore/preact'
import actions from './../actions'
import linkState from 'linkstate'
import { css } from 'emotion'

class LoginScreen extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }
  handleLogin = () => {
    let { email, password } = this.state
    this.setState({ password: '' })
    this.props.tryLogin(email, password)
  }
  handleSignup = () => {
    let { email, password } = this.state
    this.setState({ password: '' })
    this.props.trySignup(email, password)
  }
  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.handleLogin()
    }
  }
  render(props, { password }) {
    return (
      <div className={container}>
        <div className={content}>
          <h1
            css={`
              color: palevioletred;
              font-weight: 200;
              font-size: 3em;
            `}
          >
            Login
          </h1>
          <input
            className={inputs}
            type="email"
            placeholder="email"
            value={this.state.email}
            onInput={linkState(this, 'email')}
          />
          <input
            className={inputs}
            type="password"
            value={password}
            placeholder="password"
            onInput={linkState(this, 'password')}
            onKeyPress={this.handleKeyPress}
          />
          <button className={button} onClick={this.handleLogin}>
            Login
          </button>
          <button className={signup} onClick={this.handleLogin}>
            Sign up
          </button>
        </div>
      </div>
    )
  }
}

export default connect(
  '',
  actions
)(LoginScreen)

let container = css`
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: 70px;
`
let content = css`
  display: block;
  width: 400px;
  align-self: flex-start;
  padding: 45px;
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.32);
  box-shadow: 0px 1px 3px rgba(255, 255, 255, 0.33);
`
let inputs = css`
  display: block;
  width: 100%;
  margin: 10px 0;
  padding: 10px 10px;
  background: black;
  color: rgba(255, 255, 255, 0.65);
  font-size: 16px;
  border: 1px solid rgba(255, 255, 255, 0.32);
  border-radius: 3px;
  :focus {
    outline: none;
    border: 1px solid rgba(175, 238, 238, 0.55);
  }
  :active {
    box-shadow: 0px 0px 1px paleturquoise;
  }
`
let button = css`
  float: right;
  font-size: 16px;
  background: black;
  color: paleturquoise;
  padding: 10px 15px;
  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: 2px;
  :hover,
  :active {
    border: 1px solid paleturquoise;
    box-shadow: 0px 0px 1px paleturquoise;
  }
`

let signup = css`
  ${button};
  float: left;
`
