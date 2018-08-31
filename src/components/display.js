import { h, Component } from 'preact'
import { connect } from 'unistore/preact'
import { css } from 'emotion'
import { route } from 'preact-router'
import actions from './../actions'

class Display extends Component {
  state = {
    index: 0
  }
  props = {
    timer: null
  }
  componentWillMount() {
    if (!this.props.isLoggedIn) {
      route('/')
    }
  }
  componentDidMount() {
    this.props.timer = setInterval(() => {
      if (!this.props.numbers) return
      if (this.props.numbers.length - 1 > this.state.index) {
        this.setState({ index: this.state.index + 1 })
      } else if (this.state.index !== 0) {
        this.setState({ index: 0 })
      }
    }, 5000)
  }
  componentWillUnmount() {
    clearInterval(this.props.timer)
  }
  render = ({ numbers }, { index }) => (
    <div className={container}>
      {numbers &&
        numbers.length > 0 && (
          <span className={styles}>{numbers[index].number.toUpperCase()}</span>
        )}
    </div>
  )
}

export default connect(
  'numbers, isLoggedIn',
  actions
)(Display)

const styles = css`
  font-size: 150px;
  font-size: 40vw;
`
const container = css`
  display: flex;
  justify-content: center;
  align-items: center;
`
