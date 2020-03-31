import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDGRID,
    appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default }
// child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });
//
// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });
//
// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot,
//             ...childSnapshot.val()
//         })
//     });
//     console.log(expenses);
// });

// database.ref('expenses').push({
//     description: 'Rent',
//     note: '',
//     amount: 400000,
//     createdAt: 1585649895
// });
//
// database.ref('expenses').push({
//     description: 'Phone bill',
//     note: '',
//     amount: 275000,
//     createdAt: 1585649895
// });
//
// database.ref('expenses').push({
//     description: 'coffee',
//     note: '',
//     amount: 300,
//     createdAt: 1585649895
// });

// database.ref('notes/-M3k3hfyEgGNNqyab5Fe').remove();

// database.ref('notes').push({
//     title: 'Second note!',
//     body: 'This is my note'
// });

// const firebaseNotes = {
//     notes: {
//         something1: {
//             title: 'First note!',
//             body: 'This is my note'
//         },
//         something2: {
//             title: 'Second note!',
//             body: 'This is my note'
//         }
//     }
// };

// database.ref('notes').set(notes);

// database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error with data fetching: ', e)
// });

// database.ref().once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {console.log(e)});

// database.ref().set({
//     name: 'Avraam Nikolaou',
//     age: 32,
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'Avlos'
//     },
//     location: {
//         city: 'Katerini',
//         country: 'Greece'
//     }
// }).then(() => {
//     console.log('Data saved!')
// }).catch((e) => {
//     console.log('Failed with reason:', e)
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Thessaloniki'
// });

// database.ref().update({
//     age: 33,
//     location: {
//         city: 'Thessaloniki'
//     }
// });

// database.ref('isSingle').remove()
//     .then(() => {console.log('Removed')})
//     .catch((e) => {console.log(e)});

