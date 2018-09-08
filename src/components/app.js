import { h, Component } from 'preact'
import { Router } from 'preact-router'
import { css, injectGlobal } from 'emotion'
import store from './../store'
import { Provider } from 'unistore/preact'
import Viewer from './viewer'
import Display from './display'
import Control from './control'
import Header from './header'

export default class App extends Component {
  handleRoute = e => {
    this.currentUrl = e.url
  }

  render() {
    return (
      <div
        id="app"
        class={css`
          height: 100%;
        `}
      >
        <Provider store={store}>
          <div
            class={css`
              height: 100%;
            `}
          >
            <Header />
            <Router onChange={this.handleRoute}>
              <Viewer path="/" />
              <Control path="/control" />
              <Display path="/display" />
            </Router>
          </div>
        </Provider>
      </div>
    )
  }
}

injectGlobal`
body {
  font-weight: 100;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #000;
  color: #fff;
}
html, body {margin: 0; height: 100%; overflow: hidden}
* {
  box-sizing: border-box;
}
`

if (module.hot) {
  require('preact/debug')
}
