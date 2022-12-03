import { auth } from '../firebase/config';
import { async } from '@firebase/util';

import { ref } from 'vue';
import { signOut } from 'firebase/auth';

let error = ref('');
let logoutAccount = async () => {
	try {
		await signOut(auth);

		console.log('logout');
	} catch (e) {
		console.log(e.message);
		error.value = e.message;
	}
};

let logoutFromAccount = () => {
	return { error, logoutAccount };
};
export default logoutFromAccount;
