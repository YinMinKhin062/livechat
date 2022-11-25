<template>
	<div class="SignUp_In">
		<div class="title">
			<h2>Login</h2>
		</div>

		<div class="form">
			<form @submit.prevent="login">
				<div class="form-item">
					<input type="email" placeholder="YOUR EMAIL" v-model="email" required />
					<i class="fa-solid fa-envelope"></i>
				</div>
				<div class="form-item">
					<input v-if="checked" type="text" v-model="password" placeholder="********" required />
					<input v-else type="password" v-model="password" placeholder="********" required />
					<i class="fa-solid fa-lock"></i>
				</div>

				<div class="form-item chBox">
					<input type="checkbox" v-model="checked" name="chkBox" /><label for="chkBox"
						>Show Password</label
					>
				</div>
				<div class="form-item btn">
					<button>Login</button>
					<i class="fa-solid fa-right-to-bracket"></i>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import { ref } from '@vue/reactivity';

export default {
	setup() {
		let email = ref('');
		let password = ref('');
		let checked = ref('');

		let login = () => {
			console.log(password.value);
			console.log(email.value);
		};

		return { email, password, checked, login };
	},
};
</script>

<style></style>
