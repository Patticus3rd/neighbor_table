import * as firebase from 'firebase';

  var config = {
    apiKey: "AIzaSyDWdCgHsbCz01LFnJ2E4b9pEA7ZiuRo8j8",
    authDomain: "neighbortable-99308.firebaseapp.com",
    databaseURL: "https://neighbortable-99308.firebaseio.com",
    projectId: "neighbortable-99308",
    storageBucket: "neighbortable-99308.appspot.com",
    messagingSenderId: "447056510173"
  };
  firebase.initializeApp(config);

 export const auth = firebase.auth();
 //this is the auth path creating a new auth with a login
 export const googleProvider = new firebase.auth.GoogleAuthProvider();