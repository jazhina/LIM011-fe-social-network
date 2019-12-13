export const authEmail = () => {
    console.log('funciona email :) !');
    const db = firebase.firestore();
    const correo = document.getElementById('e-mail').value;
    const contraseña = document.getElementById('password').value;
    console.log(correo);
    console.log(contraseña);

  db.collection("users").add({
    e_mail : correo,
    password: contraseña,
  })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        document.getElementById('e-mail').value = '';
        document.getElementById('password').value = '';
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
};

export const authFace = () => {
    console.log('funciona Facebook :) !');
    var provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('user_birthday');
    firebase.auth().signInWithRedirect(provider);
    firebase.auth().getRedirectResult().then(function(result) {
      if (result.credential) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // ...
      }
      // The signed-in user info.
      var user = result.user;
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
};

export const authGoogle = () => {
    console.log('funciona google :) !');
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    firebase.auth().signInWithRedirect(provider);
    firebase.auth().getRedirectResult().then(function(result) {
      if (result.credential) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // ...
      }
      // The signed-in user info.
      var user = result.user;
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
};
