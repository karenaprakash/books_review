import firebase from 'firebase/app';
import 'firebase/storage';


let firebaseConfig = {
    apiKey: "AIzaSyBQyJUdzSNoqvF57H0kL2xl1svlAtfi84g",
    authDomain: "booksreview-4122b.firebaseapp.com",
    databaseURL: "https://booksreview-4122b.firebaseio.com",
    projectId: "booksreview-4122b",
    storageBucket: "booksreview-4122b.appspot.com",
    messagingSenderId: "225638829365",
    appId: "1:225638829365:web:9ca5d276a1b794865a107c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

  let storage = firebase.storage();
  
  let API_URL = 'gs://booksreview-4122b.appspot.com';
  
  export{
      storage,
      API_URL,
      firebase 
  };