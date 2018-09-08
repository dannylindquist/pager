import { h, Component } from 'preact'
import { connect } from 'unistore/preact'
import { css } from 'emotion'
import { route } from 'preact-router'
import actions from './../actions'
import fitty from 'fitty'

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
    this.fittyBox = fitty('#fittyBox', {
      maxSize: 1000
    })
  }
  componentDidUpdate() {
    console.log('updated')
    this.fittyBox = fitty('#fittyBox')
    if (this.fittyBox && this.fittyBox.length >= 1) {
      this.fittyBox[0].fit()
    } else {
      this.fittyBox = fitty('#fittyBox', {
        maxSize: 1000
      })
    }
  }
  componentWillUnmount() {
    clearInterval(this.props.timer)
    if (this.fittyBox && this.fittyBox.length >= 1) {
      this.fittyBox[0].unsubscribe()
    }
  }
  render = ({ numbers }, { index }) => (
    <div className={container}>
      {numbers &&
        numbers.length > 0 && (
          <div className={styles}>
            <div className={fit} id="fittyBox">
              {numbers[index].number.toUpperCase()}
            </div>
          </div>
        )}
    </div>
  )
}

export default connect(
  'numbers, isLoggedIn',
  actions
)(Display)

const fit = css`
  margin-top: -30px;
  padding-top: 10px;
`

const styles = css`
  font-weight: 300;
  margin-top: 0;
  margin-bottom: 0;
  padding-top: -50px;
  height: 100%;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`
const container = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-top: 0;
`
