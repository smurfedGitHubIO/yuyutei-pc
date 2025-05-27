<script lang="ts">
  import { onMount } from 'svelte';
  import SearchBar from './SearchBar.svelte';
  
  export let title: string;
  export let subtitle: string;
  export let backgroundImage: string;
  
  let isLoaded = false;
  
  onMount(() => {
    // Simulate image load
    setTimeout(() => {
      isLoaded = true;
    }, 300);
  });
</script>

<div class="hero" style="background-image: url({backgroundImage})">
  <div class="overlay" class:loaded={isLoaded}></div>
  <div class="hero-content container" class:loaded={isLoaded}>
    <h1>{title}</h1>
    <p class="subtitle">{subtitle}</p>
    <div class="search-container">
      <SearchBar />
    </div>
  </div>
</div>

<style>
  .hero {
    height: 80vh;
    min-height: 500px;
    position: relative;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    margin-bottom: var(--space-5);
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    opacity: 0;
    transition: opacity 1s ease;
  }
  
  .overlay.loaded {
    opacity: 1;
  }
  
  .hero-content {
    position: relative;
    z-index: 10;
    max-width: 800px;
    padding: 0 var(--space-2);
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 1s ease, transform 1s ease;
  }
  
  .hero-content.loaded {
    opacity: 1;
    transform: translateY(0);
  }
  
  h1 {
    font-size: 3.5rem;
    margin-bottom: var(--space-2);
    color: white;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }
  
  .subtitle {
    font-size: 1.5rem;
    margin-bottom: var(--space-4);
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .search-container {
    margin-top: var(--space-4);
  }
  
  @media (max-width: 768px) {
    .hero {
      height: 70vh;
    }
    
    h1 {
      font-size: 2.5rem;
    }
    
    .subtitle {
      font-size: 1.2rem;
    }
  }
</style>