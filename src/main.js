// Import Firebase
import { initializeApp } from "firebase/app";

// Import styles (optional)
import './css/login.css';


// ✅ Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCzFtoIOYrFgk63KH8gLsttL-sPol8mSDA",
  authDomain: "project-jewels.firebaseapp.com",
  projectId: "project-jewels",
  storageBucket: "project-jewels.firebasestorage.app",
  messagingSenderId: "333930700718",
  appId: "1:333930700718:web:818a221d15ff7c947f323f"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Test UI and log
document.querySelector('#app').innerHTML = `
  <div style="text-align: center; font-family: sans-serif; padding: 20px;">
    <h1>🔥 Firebase Initialized</h1>
    <p>Project ID: <strong>${firebaseConfig.projectId}</strong></p>
    <button id="testBtn" style="padding: 10px 20px; font-size: 16px;">Click to Test Console</button>
  </div>
`;

document.getElementById('testBtn').addEventListener('click', () => {
  console.log("✅ Firebase is working!");
});
