import firebase from 'firebase';

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBV2PEFZPVLJQ9pvBpMMTqet2Sx-dVtp7Q",
    authDomain: "login-auth098.firebaseapp.com",
    databaseURL: "https://login-auth098.firebaseio.com",
    projectId: "login-auth098",
    storageBucket: "login-auth098.appspot.com",
    messagingSenderId: "206961419087",
    appId: "1:206961419087:web:3f3aa09b86aa966d551b3a"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;