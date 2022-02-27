import firebase from 'firebase'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyB-6DdHYapRJljJBKuPYD1nQc3RANpgZgE',
  authDomain: 'hesaplan-6bfef.firebaseapp.com',
  projectId: 'hesaplan-6bfef',
  storageBucket: 'hesaplan-6bfef.appspot.com',
  messagingSenderId: '88929230552',
  appId: '1:88929230552:web:adb1129ceae78c9fb441ad',
}
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()
const database = firebase.firestore()
export default database
