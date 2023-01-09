<script lang="ts">
	import "../app.postcss";
	import { onMount } from "svelte";
	import { supabaseClient } from "$lib/supabase";
	import { invalidateAll } from "$app/navigation";

	onMount(() => {
		const {
			data: { subscription }
		} = supabaseClient.auth.onAuthStateChange(() => {
			console.log("auth state changed");
			invalidateAll();
		});

		return () => {
			subscription?.unsubscribe();
		};
	});
</script>

<slot />
