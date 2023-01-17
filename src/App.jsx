import * as firebase from 'firebase/auth'
import { GoogleAuthProvider } from 'firebase/auth'
import {auth, db} from './firebase.js'
import * as firestore from 'firebase/firestore'
import { collection } from 'firebase/firestore'
import { useState } from 'react'


export default function App() {

const [name, setName] = useState('')
const [lastName, setlastName] = useState('')

const sendData = () => {
  firestore.addDoc(collection(db, 'users'), {
    name: name,
    lastName: lastName,
}).then(res => console.log(res))
 
}

let currentUser

auth.onAuthStateChanged((user) => {
  currentUser = user.photoURL
  console.log(currentUser)
})

  const Auth  = () => {
    const provider = new firebase.GoogleAuthProvider()
    console.log(provider)
    firebase.signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });}  
    

    const getName = (e) => {
      setName(e.target.value)
    }

    const getLastName = (e) => {
      setlastName(e.target.value)
    }

  return (
    <>
<div className='flex flex-col'>
  <h1 className='text-5xl font-bold'>Firebase</h1>
  
    <input onChange={getName} type="text" className='border border-black m-5 ' placeholder='name'/>
    <input onChange={getLastName} type="text" className='border border-black m-5 ' placeholder='lastName'/>
    <button onClick={sendData}>Submit</button>

  <img src={currentUser} alt="" height={100} width={100}/>
  <button onClick={Auth} className='border border-gray-900 mx-auto px-2 py-2 hover:bg-green-400'>Login with google</button>
</div>
    </>
   
  )
}