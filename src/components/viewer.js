import { h } from 'preact'
import LoginScreen from './loginScreen'
import Selector from './selector'
import { connect } from 'unistore/preact'
import actions from './../actions'
import { css } from 'emotion'

export default connect('isLoggedIn, checkingLogin', actions)(
  ({ isLoggedIn, checkingLogin, logout }) => (
    <div className={container}>
      {checkingLogin ? null : !isLoggedIn ? <LoginScreen /> : <Selector />}
    </div>
  )
)

const container = css`
  height: 100vh;
`
