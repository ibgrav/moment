import { computed, signal } from "@preact/signals";
import { User } from "@supabase/supabase-js";

export const user = signal<User | undefined>(undefined);
user.subscribe(console.log);

export const images = signal<Array<string>>([]);
images.subscribe(console.log);
export const imageIndex = signal(0);
export const imageData = computed(() => images.value[imageIndex.value]);

export const updateImage = (data: string, index?: number) => {
  index ??= imageIndex.value;

  const newImages = Array.from(images.value);
  newImages[index] = data;
  images.value = newImages;
};
