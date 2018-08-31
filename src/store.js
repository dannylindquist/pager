import createStore from 'unistore'
import { auth, db } from './firebase'

var store = createStore({
  isLoggedIn: false,
  isControl: false,
  isDisplay: false,
  checkingLogin: true,
  userId: '',
  numbers: []
})

if (typeof window !== 'undefined') {
  auth.onAuthStateChanged(user => {
    if (user && !store.isLoggedIn) {
      store.setState({ isLoggedIn: true, userId: user.uid })
      db.ref(`${user.uid}/numbers`).on('value', snapshot => {
        store.setState({ numbers: snapshotToArray(snapshot) })
      })
    }
    store.setState({ checkingLogin: false })
  })
}

export const snapshotToArray = snapshot => {
  let returnArr = []

  snapshot.forEach(childSnapshot => {
    let item = childSnapshot.val()
    item.key = childSnapshot.key
    returnArr.push(item)
  })

  return returnArr
}

export default store
