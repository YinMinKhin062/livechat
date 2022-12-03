<template>
	<nav v-if="accOwner">
		<!-- <router-link :to="Chatroom">Chatroom</router-link> -->
		<div>
			<p>
				Hi! <b>{{ accOwner.displayName }}</b>
			</p>
			<p class="email">{{ accOwner.email }}</p>
		</div>

		<button @click="logout">Logout</button>
	</nav>
</template>

<script>
// import { ref } from '@vue/reactivity';
import logoutFromAccount from '../Composable/LogoutFromAccount';
import getUser from '../Composable/getUser';

export default {
	setup() {
		let { error, logoutAccount } = logoutFromAccount();

		let { accOwner } = getUser();

		let logout = () => {
			logoutAccount();
			// router.push('/');
		};

		return { logout, accOwner };
	},
};
</script>

<style>
/* @import '../assets/global.css'; */
</style>
