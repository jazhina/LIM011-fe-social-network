 import { authFace, authGoogle } from './auth-firebase.js'

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
