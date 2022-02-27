// Import the functions you need from the SDKs you need
import * as firebase from 'firebase'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB-6DdHYapRJljJBKuPYD1nQc3RANpgZgE',
  authDomain: 'hesaplan-6bfef.firebaseapp.com',
  projectId: 'hesaplan-6bfef',
  storageBucket: 'hesaplan-6bfef.appspot.com',
  messagingSenderId: '88929230552',
  appId: '1:88929230552:web:adb1129ceae78c9fb441ad',
}

// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const auth = firebase.auth()

export { auth }
