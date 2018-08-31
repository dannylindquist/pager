import { h } from 'preact'
import { connect } from 'unistore/preact'
import linkState from 'linkstate'
import { css } from 'emotion'
import actions from './../actions'

export default connect(
  'isControl, isDisplay',
  actions
)(({ setControl, setDisplay }) => (
  <div className={selector}>
    <button className={sButton} onClick={setDisplay}>
      Display
    </button>
    <button className={redButton} onClick={setControl}>
      Control
    </button>
  </div>
))

let selector = css`
  text-align: center;
`

let sButton = css`
  display: block;
  border: none;
  font-size: 16px;
  font-size: 10vw;
  width: 50vw;
  font-weight: 200;
  margin: 15px auto;

  background: black;
  color: palegreen;
  padding: 10px 20px;
  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: 2px;
  :hover,
  :active {
    border: 2px solid palegreen;
    box-shadow: 0px 0px 1px palegreen;
  }
`
let redButton = css`
  ${sButton};
  color: palevioletred;
  :hover,
  :active {
    border: 2px solid palevioletred;
    box-shadow: 0px 0px 1px palevioletred;
  }
`
