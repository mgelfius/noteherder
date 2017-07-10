import Rebase from 're-base'
import firebase from 'firebase/app'
import database from 'firebase/database'

const app = firebase.initializeApp({
    apiKey: "API KEY",
    authDomain: "AUTH KEY",
    databaseURL: "DB URL",
    projectId: "PROJECT ID",
    storageBucket: "STORAGE BUCKET",
    messagingSenderId: "SENDER ID"
})

const db = database(app)

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const auth = app.auth()

Rebase.createClass(db)

export default Rebase.createClass(db)