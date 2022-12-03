<template>
	<!-- <h1>new Chat</h1> -->
	<div class="chatform">
		<form>
			<textarea
				name=""
				id=""
				cols="10"
				rows="2"
				v-model="message"
				@keypress.enter="handleMessage"
				placeholder="Type Here"
			></textarea>
		</form>
	</div>
</template>

<script>
import { ref } from '@vue/reactivity';
import getUser from '../Composable/getUser';
import { serverTimestamp } from '@firebase/firestore';
import useCollection from '../Composable/UseCollection';
export default {
	setup() {
		let message = ref('');
		let { accOwner } = getUser();
		let { error, createDoc } = useCollection();

		let handleMessage = async () => {
			let chatmessage = {
				message: message.value,
				name: accOwner.value.displayName,
				created_at: serverTimestamp(),
			};
			console.log(chatmessage);
			message.value = '';
			try {
				await createDoc('messages', chatmessage);
			} catch (e) {
				console.log(e.message);
			}
		};
		return { message, handleMessage };
	},
};
</script>

<style></style>
