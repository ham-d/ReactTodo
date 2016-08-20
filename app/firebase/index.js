import firebase from 'firebase';

try {
  // Initialize Firebase
    var config = {
        apiKey: "AIzaSyDaNa3vNwrTBfy-Nw2n2CPs0WmVSdkO5C8",
        authDomain: "react-todo-app-bef4d.firebaseapp.com",
        databaseURL: "https://react-todo-app-bef4d.firebaseio.com",
        storageBucket: "react-todo-app-bef4d.appspot.com",
    };
    firebase.initializeApp(config);
} catch(e){
    
}
  
export var firebaseRef = firebase.database().ref();
export default firebase;