<script>
  let blok;

  import Icon from "@iconify/svelte";
  import { onMount } from 'svelte';
  blok = null;
  import { storyblok } from "$lib/storyblok.js";

  // const res = storyblok.get("cdn/stories/navbar");
  // blok = res.data.story.content;

  onMount(async () => {
    try {
      const res = await storyblok.get("cdn/stories/navbar");
      // console.log(res);
      //
      blok = res.data.story.content.body[0];
      console.log(blok);
    } catch (err) {
      console.error("Storyblok fetch failed:", err);
    }
  });
</script>

{#if blok}
  <header class="text-white shadow-md">
    <div class="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center">
      <!-- Logo -->
      <div class="text-2xl font-semibold">
        <span class="text-white">{blok.logo_text_left}</span>
        <span class="text-gray-300">{blok.logo_text_right}</span>
      </div>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex space-x-8 items-center">
        {#each blok.nav_items || [] as item}
          <a
            href="/"
            class="text-gray-300 hover:text-white transform transition-transform hover:scale-110 duration-200"
          >
            {item}
          </a>
        {/each}
      </nav>

      <!-- Right Section -->
      <div class="flex items-center space-x-4">
        {#if blok.show_login}
          <a
            href="/"
            class="text-gray-300 hover:text-white transform transition-transform duration-200 hover:scale-110"
          >
            Log in
          </a>
        {/if}

        {#if blok.show_cta}
          <button
            class="hidden md:block bg-violet-600 hover:bg-violet-500 text-white px-4 py-2 rounded-lg text-sm font-medium transform transition-transform hover:scale-110 duration-200"
          >
            {blok.cta_label}
          </button>
        {/if}

        <!-- Moon icon for mobile -->
        <button
          class="w-10 h-10 flex items-center justify-center bg-transparent border border-gray-600 rounded-lg hover:border-white transition-colors duration-200 md:hidden"
        >
          <Icon icon="mynaui:moon-solid" class="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  </header>
{/if}
