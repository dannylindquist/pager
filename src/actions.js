import { auth, db } from './firebase'
import { route } from 'preact-router'

const actions = store => ({
  tryLogin(state, email, password) {
    store.setState({ checkingLogin: true })
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('login succeed')
        store.setState({ checkingLogin: false })
      })
      .catch(err => {
        store.setState({ isLoggedIn: false, checkingLogin: false })
        console.error(err)
      })
  },
  trySignup(state, email, password) {
    store.setState({ checkingLogin: true })
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('login succeed')
        store.setState({ checkingLogin: false })
      })
      .catch(err => {
        store.setState({ isLoggedIn: false, checkingLogin: false })
        console.error(err)
      })
  },

  logout(state) {
    auth
      .signOut()
      .then(() => {
        store.setState({ isLoggedIn: false })
        console.log('success')
      })
      .catch(err => {
        console.error(err)
      })
  },
  setControl(state) {
    store.setState({ isControl: true, isDisplay: false })
    route('/control')
  },
  setDisplay(state) {
    store.setState({ isControl: false, isDisplay: true })
    route('/display')
  },
  clearView(state) {
    store.setState({ isControl: false, isDisplay: false })
    route('/')
  },
  insertNumber(state, number) {
    db.ref(`${state.userId}/numbers`)
      .push()
      .set({
        number: number.toUpperCase(),
        date: Date.now()
      })
  },
  removeNumber(state, key) {
    db.ref(`${state.userId}/numbers/${key}`).remove(err => {
      if (err) {
        console.error(err)
      }
    })
  }
})

export default actions
