import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyCF9Xf7zi8PLfI7vvdksWHLcJMakWd-uc4",
    authDomain: "my-box-f2a0e.firebaseapp.com",
    projectId: "my-box-f2a0e",
    storageBucket: "my-box-f2a0e.appspot.com",
    messagingSenderId: "815326642393",
    appId: "1:815326642393:web:48a91bf8ddf10eeacebec8",
    measurementId: "G-WLRGNZT9N0"
  };
  const app = initializeApp(firebaseConfig);
  const auth= getAuth(app);
  const provider =new GoogleAuthProvider();
  export{auth,provider}