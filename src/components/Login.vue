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
					<label class="chkContainer"
						>Show Password
						<input type="checkbox" v-model="checked" name="chkBox" />
						<span class="checkmark"></span>
					</label>
				</div>
				<div class="form-item btn">
					<button>Login</button>
					<i class="fa-solid fa-right-to-bracket"></i>
				</div>
			</form>
			<div class="error" v-if="error">
				<p>{{ error }}</p>
			</div>
		</div>
	</div>
</template>

<script>
import { ref } from '@vue/reactivity';
import loginAccount from '../Composable/LoginAccount';

export default {
	setup(props, context) {
		let email = ref('');
		let password = ref('');
		let checked = ref('');

		let { error, userAccount } = loginAccount();

		let login = async () => {
			error.value = null; //refresh error value whenever page reload
			let userAccRes = await userAccount(email.value, password.value);
			if (userAccRes) {
				context.emit('enterChatroom');
				console.log(userAccRes.user);
			}
		};

		return { email, password, checked, login, error };
	},
};
</script>

<style></style>
