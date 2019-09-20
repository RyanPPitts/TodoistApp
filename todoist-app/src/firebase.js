// firebase is a real time database.  Real time updates when something has been modified in the database
// import default - import TEST from ADDRESS - import default export from file
// import name values - import { PARAMETER } from ADDRESS - this will import several parameters from the file/source

import firebase from 'firebase/app'; // import default 
import 'firebase/firestore'; // import just firestore

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyAKzzTd6Ta7ux75jburKE73-fKmf2lkytM",
    authDomain: "todoist-clone-627b4.firebaseapp.com",
    databaseURL: "https://todoist-clone-627b4.firebaseio.com",
    projectId: "todoist-clone-627b4",
    storageBucket: "todoist-clone-627b4.appspot.com",
    messagingSenderId: "947154465169",
    appId: "1:947154465169:web:123fdf31ae0bcc3c542a30"
})

// information was from firebase project settings - create app - SDK information

export {firebaseConfig as firebase };
// now we have to import firebase into our package.json file - dependencies
// dependencies are the foundation that other components use to run properly

//export default == export default NAME - default export for file
// export name values == export { PARAMETER}