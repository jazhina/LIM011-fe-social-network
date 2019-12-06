// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: 'AIzaSyCWcMXxzjobz04VQNsyAY63IvuBXz9Kd4s',
    authDomain: 'pet-lovers-cc610.firebase.com',
    projectId: 'pet-lovers-cc610'
  });
  
  var db = firebase.firestore();
  const email = document.getElementById('email').value;
  const key = document.getElementById('key').value;


  db.collection("users").add({
    first: email,
    last: key,
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});