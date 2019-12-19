import { authFace } from './auth-firebase.js'

export const promAuthFace = () => {
    authFace().then((result)=>{
        console.log(result.user.displayName);
        db.collection("infoUserfacebook").add({
          email : result.user.email,
          name: result.user.displayName,
          photo: result.user.photoURL
        })
      });
};