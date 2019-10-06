import Firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyBRt_frsJXd7OEnge3RxHv2CT2PxGdw-6k',
  authDomain: 'atioreactfirebase.firebaseapp.com',
  databaseURL: 'https://atioreactfirebase.firebaseio.com',
  projectId: 'atioreactfirebase',
  storageBucket: '',
  messagingSenderId: '546202576803',
  appId: '1:546202576803:android:acf1ea79bee3ac4b021c16',
};

let app = Firebase.initializeApp(firebaseConfig);
export const db = app.database();
