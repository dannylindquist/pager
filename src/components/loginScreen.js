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
    localStorage.setItem('email', email)
    this.props.tryLogin(email, password)
  }
  handleSignup = () => {
    let { email, password } = this.state
    this.setState({ password: '' })
    localStorage.setItem('email', email)
    this.props.trySignup(email, password)
  }
  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.handleLogin()
    }
  }
  componentDidMount() {
    var email = localStorage.getItem('email')
    console.log(email)
    if (email) {
      this.setState({ email: email })
    }
  }
  render(props, { password }) {
    return (
      <div className={container}>
        <div className={content}>
          <h1
            css={`
              color: rgba(255, 255, 255, 0.75);
              font-weight: 400;
              font-size: 3em;
            `}
          >
            Pager
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
  border-top: 2px solid palevioletred;
  border-bottom: 2px solid paleturquoise;
  border-left: 2px solid palegoldenrod;
  border-right: 2px solid palegreen;
  border-radius: 6px;
`
let inputs = css`
  display: block;
  width: 100%;
  margin: 10px 0;
  padding: 10px 10px;
  background: black;
  color: rgba(255, 255, 255, 0.75);
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
