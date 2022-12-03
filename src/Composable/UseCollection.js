import { addDoc, collection } from 'firebase/firestore';
import { ref } from 'vue';
import { db } from '../firebase/config';

let error = ref(null);

let createDoc = async (newcollection, doc) => {
	try {
		let collRef = collection(db, newcollection);
		await addDoc(collRef, doc);
	} catch (err) {
		console.log(err.message);
		error.value = 'could not send the message';
	}
};

let useCollection = () => {
	return { error, createDoc };
};
export default useCollection;
