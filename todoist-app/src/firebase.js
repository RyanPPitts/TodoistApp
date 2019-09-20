// firebase is a real time database.  Real time updates when something has been modified in the database

const firebaseConfig = firebase.initializeApp({
    apiKey:'',
    authDomain:'',
    databaseURL:'',
    projectId:'',
    storageBucket:'',
    messageSenderId:'',
    apiId:'',
})

export {firebaseConfig as firebase };
// now we have to import firebase