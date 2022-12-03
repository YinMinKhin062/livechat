import { auth } from '../firebase/config';
import { onAuthStateChanged } from 'firebase/auth';
import { ref } from 'vue';

let accOwner = ref(auth.currentUser);
onAuthStateChanged(auth, user => {
	// console.log('auth state change user is', user);
	accOwner.value = user;
});

let getUser = () => {
	return { accOwner };
};
export default getUser;
