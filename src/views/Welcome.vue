<template>
	<div class="container">
		<!-- Welcome -->
		<div v-if="showLoginForm">
			<Login></Login>
			<p>Don't have an account? <span @click="showLoginForm = !showLoginForm">Sign Up</span></p>
		</div>
		<div v-else>
			<SignUp></SignUp>
			<p>Already have an account? <span @click="showLoginForm = !showLoginForm">Login</span></p>
		</div>
	</div>
</template>

<script>
import { ref } from '@vue/reactivity';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
export default {
	components: {
		Login,
		SignUp,
	},
	setup() {
		let showLoginForm = ref(true);
		return { showLoginForm };
	},
};
</script>

<style></style>
