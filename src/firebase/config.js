import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCsF9aenAzZAfwOlqf2P-tSnd_RIUCiI-Q",
  authDomain: "firegram-app-b88dc.firebaseapp.com",
  databaseURL: "https://firegram-app-b88dc.firebaseio.com",
  projectId: "firegram-app-b88dc",
  storageBucket: "firegram-app-b88dc.appspot.com",
  messagingSenderId: "600292646104",
  appId: "1:600292646104:web:52b654169a392592898bad",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timestamp };
