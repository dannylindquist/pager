import { h, Component } from 'preact'
import { connect } from 'unistore/preact'
import { css } from 'emotion'
import actions from './../actions'
import linkState from 'linkstate'
import { route } from 'preact-router'

class Control extends Component {
  state = {
    number: ''
  }
  addNumber = () => {
    this.props.insertNumber(this.state.number)
    this.setState({ number: '' })
  }
  removeNumber = key => {
    this.props.removeNumber(key)
  }
  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.addNumber()
    }
  }
  componentWillMount() {
    if (!this.props.isLoggedIn) {
      route('/')
    }
  }
  render = ({ numbers }, { number }) => (
    <div className={container}>
      <div className={form}>
        <input
          className={input}
          type="text"
          value={number}
          onInput={linkState(this, 'number')}
          placeholder="number..."
          onKeyPress={this.handleKeyPress}
        />
        <button className={clearButton} onClick={this.addNumber}>
          Add
        </button>
      </div>
      <div>
        {numbers.map(m => (
          <div className={entry} key={m.key}>
            <span>{m.number}</span>
            <button
              className={css`
                ${clearButton};
                color: palevioletred;
              `}
              onClick={this.removeNumber.bind(this, m.key)}
              style="float: right;"
            >
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default connect(
  'numbers,isLoggedIn',
  actions
)(Control)

const container = css`
  margin: 45px auto;
  max-width: 400px;
`

const clearButton = css`
  border: none;
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
const input = css`
  flex: 1 1 0%;
  margin: 10px 10px;
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

const entry = css`
  font-size: 24px;
  font-weight: 400;
  padding: 6px 0px 6px 5px;
  display: flex;
  align-items: center;
  margin-left: 10px;
  position: relative;
  span {
    flex: 1 1 0%;
  }
  :before {
    content: '';
    position: absolute;
    width: 2px;
    background: palegoldenrod;
    height: 70%;
    left: -4px;
  }
`
let form = css`
  display: flex;
  align-items: center;
`
