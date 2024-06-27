import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js"
import { addDoc, collection, getFirestore, onSnapshot,deleteDoc,doc,getDoc } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js"
const firebaseConfig = {
  apiKey: "AIzaSyCJQ8LB6FqxjpcwPp6JRwZAFZYEODaI8kg",
  authDomain: "semillas-99d01.firebaseapp.com",
  projectId: "semillas-99d01",
  storageBucket: "semillas-99d01.appspot.com",
  messagingSenderId: "706702274325",
  appId: "1:706702274325:web:bbb561436b29b24193431c"
};

  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)
  export const save = (sem) => {
    
    addDoc(collection(db, 'Semillas'), sem)
}
export const getData = (data) =>{
    
    onSnapshot(collection(db,'Semillas'),data)
}
export const remove = (id)=> {
    deleteDoc(doc(db,'Semillas',id))
}
export const getDocumento =(id)=> getDoc(doc(db,'Semillas',id))
