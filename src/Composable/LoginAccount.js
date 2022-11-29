// import { async } from '@firebase/util';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { ref } from 'vue';
import { auth } from '../firebase/config';

let error = ref(null);

let userAccount = async (email, password) => {
	try {
		let res = await signInWithEmailAndPassword(auth, email, password);
		return res;

		console.log(res.user);
	} catch (e) {
		console.log(e.message);
		error.value = e.code;
	}
};

let loginAccount = () => {
	return { error, userAccount };
};
export default loginAccount;
