import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js"
import { addDoc, collection, getFirestore, onSnapshot,deleteDoc,doc,getDoc } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js"
const firebaseConfig = {
    apiKey: "AIzaSyD245otRrFgaAT-PjwXBWM1hY82HLoU2Rw",
    authDomain: "mlv4-6229f.firebaseapp.com",
    projectId: "mlv4-6229f",
    storageBucket: "mlv4-6229f.appspot.com",
    messagingSenderId: "592652486698",
    appId: "1:592652486698:web:810eb2b4c5b21067035b53",
    measurementId: "G-70E8D9NXBP"
  }
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