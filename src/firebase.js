import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import { firebaseKey } from '../secret'

var config = {
  apiKey: firebaseKey,
  authDomain: 'imprint-pager.firebaseapp.com',
  databaseURL: 'https://imprint-pager.firebaseio.com',
  projectId: 'imprint-pager'
}
var initialized = false

if (typeof window !== 'undefined') {
  firebase.initializeApp(config)
  initialized = true
}
export const auth = initialized ? firebase.auth() : null
export const db = initialized ? firebase.database() : null
