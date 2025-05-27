<script lang="ts">
  import "../app.css";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import { fly } from "svelte/transition";
  import { page } from '$app/stores';
  import { browser } from '$app/environment';
  
  // Update the page title based on the current route
  $: {
    if (browser) {
      if ($page.route.id === '/') {
        document.title = 'GuiltTripAdvisor | Revisiting the Golden Era';
      } else if ($page.route.id === '/about') {
        document.title = 'About Us | GuiltTripAdvisor';
      } else if ($page.route.id?.includes('/infrastructure')) {
        // Will be updated in the page component for specific infrastructure
        document.title = 'Infrastructure | GuiltTripAdvisor';
      }
    }
  }
</script>

<Header />

<main in:fly={{ y: 20, duration: 500, delay: 300 }}>
  <slot />
</main>

<Footer />

<style>
  main {
    min-height: calc(100vh - 60px);
    margin-top: 60px;
  }
</style>