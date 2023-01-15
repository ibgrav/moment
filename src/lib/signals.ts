import { signal } from "@preact/signals";
import { User } from "@supabase/supabase-js";

export const user = signal<User | undefined>(undefined);

user.subscribe(console.log);
