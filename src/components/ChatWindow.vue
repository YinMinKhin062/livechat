<template>
	<!-- <h2>welcome to chatwindow</h2> -->
	<div class="chatcontainer" ref="msgBox">
		<div class="messages">
			<div class="single" v-for="message in dateFormatMsgDocs" :key="message.id">
				<span class="name">{{ message.name }}</span>
				<p class="message">
					<!-- <span class="name">{{ message.name }} </span> -->
					{{ message.message }}
				</p>
				<span class="created_at" v-if="message.created_at">{{ message.created_at }}</span>
			</div>
			<!-- <span class="created_at" v-if="message.created_at">{{ message.created_at }}</span> -->
		</div>
	</div>
</template>

<script>
import { collection, onSnapshot, orderBy, query } from '@firebase/firestore';
import { db } from '../firebase/config';
import { ref } from '@vue/reactivity';
import { computed, onUpdated } from '@vue/runtime-core';
import { formatDistanceToNow } from 'date-fns';

export default {
	setup() {
		let messageDocs = ref([]);
		let msgBox = ref(null);

		// ==========auto scrolling feature========
		(() => {
			// console.log(msgBox.value.scrollHeight);
			msgBox.value.scrollTop = msgBox.value.scrollHeight;
		});
		// let dateFormatMsgDocs;

		//=========== date format============
		let dateFormatMsgDocs = computed(() => {
			return messageDocs.value.map(msg => {
				// if (msg.created_at) {
				let formatTime = formatDistanceToNow(msg.created_at.toDate());

				return { ...msg, created_at: formatTime };
				// }
			});
		});

		let q = query(collection(db, 'messages'), orderBy('created_at'));
		onSnapshot(q, qsnap => {
			// messageDocs.value = qsnap.docs.map(doc => {
			// 	if (doc.data().created_at) {
			// 		return { ...doc.data(), id: doc.id };
			// 	}
			// console.log(messageDocs.value);
			// console.log(doc.data());
			// });

			// using foreach
			let results = [];
			qsnap.docs.forEach(doc => {
				let document = { ...doc.data(), id: doc.id };
				if (doc.data().created_at) {
					results.push(document);
				}
			});
			messageDocs.value = results;
		});

		return { messageDocs, dateFormatMsgDocs, msgBox };
	},
};
</script>

<style></style>
