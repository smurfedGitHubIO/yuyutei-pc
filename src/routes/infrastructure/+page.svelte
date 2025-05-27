<script lang="ts">
  import { infrastructures } from "$lib/data/infrastructures";
  import InfrastructureCard from "$lib/components/InfrastructureCard.svelte";
  import { fade, fly } from "svelte/transition";
  import { onMount } from "svelte";
  import SearchBar from "$lib/components/SearchBar.svelte";
  
  let isVisible = false;
  
  onMount(() => {
    setTimeout(() => {
      isVisible = true;
    }, 300);
  });
</script>

<svelte:head>
  <title>Infrastructures | GuiltTripAdvisor</title>
</svelte:head>

<section class="infrastructure-hero">
  <div class="overlay"></div>
  <div class="container">
    <div class="hero-content" in:fade={{ duration: 800 }}>
      <h1>Infrastructure Projects</h1>
      <p class="subtitle">Exploring the architectural and engineering legacies of the Marcos era</p>
      <div class="search-container">
        <SearchBar />
      </div>
    </div>
  </div>
</section>

<section class="container section">
  <div class="infrastructure-grid">
    {#each infrastructures as infra, i}
      {#if isVisible}
        <div in:fly={{ y: 20, duration: 500, delay: 100 * i }}>
          <InfrastructureCard 
            name={infra.name}
            slug={infra.slug}
            location={infra.location}
            image={infra.images[0]}
            rating={infra.rating}
            year={infra.year}
            shortDescription={infra.shortDescription}
          />
        </div>
      {/if}
    {/each}
  </div>
</section>

<style>
  .infrastructure-hero {
    height: 400px;
    background-image: url('https://images.pexels.com/photos/2835436/pexels-photo-2835436.jpeg');
    background-size: cover;
    background-position: center;
    position: relative;
    display: flex;
    align-items: center;
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
  }
  
  .hero-content {
    position: relative;
    z-index: 10;
    text-align: center;
  }
  
  .hero-content h1 {
    font-size: 3rem;
    margin-bottom: var(--space-2);
    color: white;
  }
  
  .subtitle {
    font-size: 1.5rem;
    max-width: 800px;
    margin: 0 auto var(--space-3);
  }
  
  .search-container {
    max-width: 600px;
    margin: 0 auto;
  }
  
  .infrastructure-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-3);
  }
  
  @media (max-width: 992px) {
    .infrastructure-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media (max-width: 768px) {
    .hero-content h1 {
      font-size: 2.5rem;
    }
    
    .subtitle {
      font-size: 1.2rem;
    }
    
    .infrastructure-grid {
      grid-template-columns: 1fr;
    }
  }
</style>