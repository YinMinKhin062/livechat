<template>
	<div class="container">
		<!-- Welcome -->
		<div v-if="showLoginForm">
			<Login @enterChatroom="enterChatroom"></Login>
			<p>Don't have an account? <span @click="showLoginForm = !showLoginForm">Sign Up</span></p>
		</div>
		<div v-else>
			<SignUp @enterChatroom="enterChatroom"></SignUp>
			<p>Already have an account? <span @click="showLoginForm = !showLoginForm">Login</span></p>
		</div>
	</div>
</template>

<script>
import { ref } from '@vue/reactivity';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import { useRouter } from 'vue-router'; //if function use curlybracket because it is object
export default {
	components: {
		Login,
		SignUp,
	},
	setup() {
		let showLoginForm = ref(true);
		let router = useRouter();
		let enterChatroom = () => {
			router.push('chatroom');
		};
		return { showLoginForm, enterChatroom };
	},
};
</script>

<style></style>
