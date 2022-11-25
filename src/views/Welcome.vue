<template>
	<div class="container">
		<!-- Welcome -->
		<SignUp></SignUp>
		<Login></Login>
	</div>
</template>

<script>
import Login from '../components/Login';
import SignUp from '../components/SignUp';
export default {
	components: {
		Login,
		SignUp,
	},
};
</script>

<style></style>
