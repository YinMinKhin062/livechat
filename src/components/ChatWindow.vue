<template>
	<!-- <h2>welcome to chatwindow</h2> -->
	<div class="chatcontainer">
		<div class="messages">
			<div class="single" v-for="message in messageDocs" :key="message.id">
				<span class="name">{{ message.name }}</span>
				<p class="message">
					{{ message.message }}
				</p>
				<span class="created_at">{{ message.created_at }}</span>
			</div>
		</div>
	</div>
</template>

<script>
import { collection, onSnapshot, orderBy, query } from '@firebase/firestore';
import { db } from '../firebase/config';
import { ref } from '@vue/reactivity';

export default {
	setup() {
		let messageDocs = ref([]);
		let q = query(collection(db, 'messages'), orderBy('created_at'));
		onSnapshot(q, qsnap => {
			messageDocs.value = qsnap.docs.map(doc => {
				return { id: doc.id, ...doc.data() };
				console.log(messageDocs.value);
				// console.log(doc.data());
			});
		});
		return { messageDocs };
	},
};
</script>

<style></style>
