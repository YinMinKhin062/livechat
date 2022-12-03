<template>
	<!-- <h2>welcome to chat</h2> -->
	<div class="container">
		<Navbar></Navbar>
		<ChatWindow></ChatWindow>
		<ChatForm></ChatForm>
	</div>
</template>

<script>
import ChatWindow from '../components/ChatWindow';
import ChatForm from '../components/ChatForm';
import Navbar from '../components/Navbar';
import getUser from '../Composable/getUser';
import { useRouter } from 'vue-router';
import { watch } from 'vue';

export default {
	components: {
		ChatWindow,
		ChatForm,
		Navbar,
	},
	setup() {
		let { accOwner } = getUser();
		let router = useRouter();
		// console.log(accOwner.value);
		watch(accOwner, () => {
			if (!accOwner.value) {
				router.push('/'); //redirect to home
			}
		});
	},
};
</script>

<style></style>
