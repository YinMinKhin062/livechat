import { async } from '@firebase/util';
import { auth } from '../firebase/config';
import { ref } from 'vue';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

let error = ref(null);

let newAccount = async (displayName, email, password) => {
	try {
		let res = await createUserWithEmailAndPassword(auth, email, password);
		updateProfile(auth.currentUser, { displayName: displayName });

		return res;
		// console.log(res.user);
	} catch (e) {
		error.value = e.code;
		console.log(e.message);
	}
};

let createAccount = () => {
	return { error, newAccount };
};
export default createAccount;
