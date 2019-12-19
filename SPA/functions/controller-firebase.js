 import { authFace, authGoogle, outUser } from './auth-firebase.js';

 export const promAuthFace = () => {
     authFace().then((result)=>{
         console.log(result.user.displayName);
         return firebase.firestore().collection("users").add({
           email : result.user.email,
           name: result.user.displayName,
           photo: result.user.photoURL
         })
       });
 };
       
 export const promAuthGoogle = () => {
     authGoogle().then((result)=>{
         console.log(result.user.displayName);
         return firebase.firestore().collection("users").add({
            email : result.user.email,
            name: result.user.displayName,
            photo: result.user.photoURL
          })
       });
 };

 export const userActual = () => {
    let infoUserActual;
    var user = firebase.auth().currentUser;
    var name, email, photoUrl;
    
    if (user != null) {
      infoUserActual = {
      name : user.displayName,
      email : user.email,
      photoUrl : user.photoURL,
      uid : user.uid
      }
    }
    return infoUserActual;
 };

export const promOutUser = () => {
  outUser().then(function() {
    console.log('Sign-out successful');
  }).catch(function(error) {
    console.log('An error happened');
  });
}
