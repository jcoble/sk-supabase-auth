import "$lib/supabase";
import { getSupabase } from "@supabase/auth-helpers-sveltekit";
import type { Handle } from "@sveltejs/kit";
import { supabaseClient } from "./lib/supabase";

export const handle: Handle = async ({ event, resolve }) => {
	const { session, supabaseClient } = await getSupabase(event);
	event.locals.sb = supabaseClient;
	event.locals.session = session;

	return resolve(event);
};
