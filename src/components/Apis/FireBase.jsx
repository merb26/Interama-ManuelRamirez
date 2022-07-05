import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAtkjOU_QfVoCfr8j5xw4YtPA2I-QAZ_rA",
  authDomain: "interama-c2028.firebaseapp.com",
  projectId: "interama-c2028",
  storageBucket: "interama-c2028.appspot.com",
  messagingSenderId: "43345180743",
  appId: "1:43345180743:web:556d175193be38bd1dd962"
};

export const initializeFireBase = () => {
    return initializeApp(firebaseConfig)
}