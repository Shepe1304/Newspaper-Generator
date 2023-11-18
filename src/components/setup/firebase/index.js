import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyDzBGmEF_keWzrcUjdjj_0tKatQH6LnzlE",
  authDomain: "newspaper-generator.firebaseapp.com",
  projectId: "newspaper-generator",
  storageBucket: "newspaper-generator.appspot.com",
  messagingSenderId: "516911273808",
  appId: "1:516911273808:web:cea4840af810d1300afe55",
  measurementId: "G-3PLN54TXDV"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);