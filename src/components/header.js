import { h, Component } from 'preact'
import { Link } from 'preact-router/match'
import { css } from 'emotion'
import { connect } from 'unistore/preact'

import actions from './../actions'

export default connect(
  'isControl,isDisplay,isLoggedIn',
  actions
)(({ isControl, isDisplay, isLoggedIn, logout, clearView }) => (
  <div
    className={navigation}
    style={
      !isLoggedIn
        ? 'display: none;'
        : isDisplay
          ? 'position: absolute; z-index: 99; color: rgba(255, 255, 255, 0.65);'
          : ''
    }
  >
    <div className={lSeperator}>
      {isLoggedIn && (
        <button className={cButton} onClick={logout}>
          logout
        </button>
      )}
      {(isControl || isDisplay) && (
        <button className={cButton} onClick={clearView}>
          back
        </button>
      )}
    </div>
    <span
      className={title}
      style={isDisplay ? 'color: rgba(255, 255, 255, 0.55);' : ''}
    >
      Pager
    </span>
    <div className={RSeperator} />
  </div>
))

let title = css`
  color: white;
  font-weight: 300;
  font-size: 24px;
`

let lSeperator = css`
  text-align: left;
  flex: 1 1 0%;
`

let RSeperator = css`
  flex: 1 1 0%;
`

let navigation = css`
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  text-align: center;
`

let cButton = css`
  font-size: 16px;
  background: black;
  color: rgba(255, 255, 255, 0.65);
  padding: 5px 10px;
  border: none;
  :hover,
  :active {
    color: paleturquoise;
    text-decoration: underline;
  }
`
