import firebase, { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import 'firebase/auth';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyCcsdgBkM7pExfQBoCE8Ip9Y6GRfejCng8',
	authDomain: 'vue-blog-project-34a99.firebaseapp.com',
	projectId: 'vue-blog-project-34a99',
	storageBucket: 'vue-blog-project-34a99.appspot.com',
	messagingSenderId: '684747029638',
	appId: '1:684747029638:web:4b53ecde3a143a63d1e507',
};

//initialize app
const app = initializeApp(firebaseConfig);

// database
const db = getFirestore(firebase);

// get auth
const auth = getAuth(app);
export { db, auth };
