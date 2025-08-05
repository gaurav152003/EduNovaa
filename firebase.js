  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAbrpmkK-GFbTLSOVqut2LimayHBMrtJBI",
    authDomain: "edunova-8a552.firebaseapp.com",
    projectId: "edunova-8a552",
    storageBucket: "edunova-8a552.firebasestorage.app",
    messagingSenderId: "567052983166",
    appId: "1:567052983166:web:36424f694f3bfdda60b12f",
    measurementId: "G-0S0F9JRMLJ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
  
//inputs
const name = document.getElementById("name").value;
const email = document.getElementById("emial").value;
const password = document.getElementById("password").value;
const confirm password = document.getElementById("confirm-password").value;
//submit

const submit = document.getElementById("submit");
submit.addEventListener("click", function (event){
  event.preventDefault();
  alert(5)
})