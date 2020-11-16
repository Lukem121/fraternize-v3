import firebase from 'firebase/app'
import 'firebase/auth'

// The configuration below is not sensitive data. You can serenely add your config here
const config = {
  apiKey: 'AIzaSyDb_QyaAapepiJ0ZVkZfijaWOzhUakUiEw',
  authDomain: 'frat-bento.firebaseapp.com',
  databaseURL: 'https://frat-bento.firebaseio.com',
  projectId: 'frat-bento',
  storageBucket: 'frat-bento.appspot.com',
  messagingSenderId: '714838745662',
  appId: '1:714838745662:web:0505c893511feb5969e76f',
  measurementId: 'G-4F7WH7RZ21'
}

firebase.initializeApp(config)
