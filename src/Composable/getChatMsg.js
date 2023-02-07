import { async } from '@firebase/util';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { ref } from 'vue';

let error = ref('');
let chatMsg = async () => {
	let q = query(collection(db, 'messages'), orderBy('created_at'));
	onSnapshot(q, qsnap => {
		messageDocs.value = qsnap.docs.map(doc => {
			// if (doc.created_at) {
			return { ...doc.data(), id: doc.id };
			// }

			console.log(messageDocs.value);

			// console.log(doc.data());
		});
	});
};

let getChatMsg = () => {
	return { error, chatMsg };
};
export default getChatMsg;
