<template>
	<div class="SignUp_In">
		<div class="title">
			<h2>Sign Up</h2>
		</div>

		<div class="form">
			<form @submit.prevent="SignUp">
				<div class="form-item">
					<input type="text" placeholder="YOUR NAME" v-model="displayName" required />
					<i class="fa-solid fa-user"></i>
				</div>
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
					<button>Sign Up</button>
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
import createAccount from '../Composable/CreateAccount';
export default {
	setup() {
		let displayName = ref('');
		let email = ref('');
		let password = ref('');
		let checked = ref('');

		//destructuring
		let { error, newAccount } = createAccount();

		let SignUp = async () => {
			error.value = null; //refresh error value whenever page reload
			let account = await newAccount(displayName.value, email.value, password.value);
			if (account) console.log(account.user);
			else console.log(error.value);
		};

		return { displayName, email, password, checked, SignUp, error };
	},
};
</script>

<style></style>
