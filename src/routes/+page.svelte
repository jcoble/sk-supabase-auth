<script type="ts">
	import { enhance, type SubmitFunction } from "$app/forms";
	import { supabaseClient } from "$lib/supabase";
	import type { PageData } from "./$types";

	export let data: PageData;

	const submitLogout: SubmitFunction = async ({ cancel }) => {
		const { error } = await supabaseClient.auth.signOut();

		if (error) {
			alert(error.message);
		}
		cancel();
	};
</script>

<main>
	<h1>SvelteKit & Supabase Auth</h1>
	{#if data.session}
		<!-- content here -->
		<p>Welcome, {data.session.user.email}</p>
		<form action="/logout" method="POST" use:enhance={submitLogout}>
			<button class="btn btn-primary">Logout</button>
		</form>
	{:else}
		<!-- else content here -->
		<p>Let's learn how to register and login users!</p>
		<div class="auth-buttons">
			<a href="/login" class="btn btn-primary">Login</a>
			<a href="/register" class="btn btn-secondary">Register</a>
		</div>
	{/if}
</main>
