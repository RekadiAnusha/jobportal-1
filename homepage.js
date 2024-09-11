import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import {getAuth, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import{getFirestore, getDoc, doc} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js"

const firebaseConfig = {
    apiKey: "AIzaSyAQ6T56JSoU3Oilnl4S1dR5SFhNefjixxM",
    authDomain: "login-form-1a1cb.firebaseapp.com",
    projectId: "login-form-1a1cb",
    storageBucket: "login-form-1a1cb.appspot.com",
    messagingSenderId: "642596913955",
    appId: "1:642596913955:web:ddd0d74e79407e018dc296"
  };
 

 
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const auth=getAuth();
  const db=getFirestore();
//   


fetch('homepage.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('signup').innerHTML = data;
    })
    .catch(error => console.error('Error fetching the HTML file:', error));










// 

  onAuthStateChanged(auth, (user)=>{
    const loggedInUserId=localStorage.getItem('loggedInUserId');
    if(loggedInUserId){
        console.log(user);
        const docRef = doc(db, "users", loggedInUserId);
        getDoc(docRef)
        .then((docSnap)=>{
            if(docSnap.exists()){
                // const userData=docSnap.data();
                // document.getElementById('loggedUserFName').innerText=userData.firstName;
                // document.getElementById('loggedUserEmail').innerText=userData.email;
                // document.getElementById('loggedUserLName').innerText=userData.lastName;
                document.getElementById('container').innerHTML = data;
            }
            else{
                console.log("no document found matching id")
            }
        })
        .catch((error)=>{
            console.log("Error getting document");
        })
    }
    else{
        console.log("User Id not Found in Local storage")
    }
  })

  const logoutButton=document.getElementById('logout');

  logoutButton.addEventListener('click',()=>{
    localStorage.removeItem('loggedInUserId');
    signOut(auth)
    .then(()=>{
        window.location.href='index.html';
    })
    .catch((error)=>{
        console.error('Error Signing out:', error);
    })
  })