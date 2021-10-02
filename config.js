import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyAlo68jwKdgwGMdd5ymIQ05aLTNYw3iiYU",
  authDomain: "complaint-forum-6c50b.firebaseapp.com",
  projectId: "complaint-forum-6c50b",
  storageBucket: "complaint-forum-6c50b.appspot.com",
  messagingSenderId: "716792402900",
  appId: "1:716792402900:web:325213f985a89984fcbc41" 
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

