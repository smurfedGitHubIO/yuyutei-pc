<script lang="ts">
  import { goto } from '$app/navigation';
  import { infrastructures } from '$lib/data/infrastructures';
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  
  let searchTerm = '';
  let results: typeof infrastructures = [];
  let isResultsVisible = false;
  let searchInput: HTMLInputElement;
  
  function search() {
    if (searchTerm.length < 2) {
      results = [];
      isResultsVisible = false;
      return;
    }
    
    const term = searchTerm.toLowerCase();
    results = infrastructures.filter(
      infra => infra.name.toLowerCase().includes(term) || 
               infra.location.toLowerCase().includes(term) ||
               infra.description.toLowerCase().includes(term)
    );
    
    isResultsVisible = true;
  }
  
  function handleSelect(slug: string) {
    searchTerm = '';
    isResultsVisible = false;
    goto(`/infrastructure/${slug}`);
  }
  
  function handleClickOutside(event: MouseEvent) {
    if (isResultsVisible && !event.composedPath().includes(searchInput)) {
      isResultsVisible = false;
    }
  }
  
  onMount(() => {
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });
</script>

<div class="search-container">
  <div class="search-box">
    <input
      bind:this={searchInput}
      bind:value={searchTerm}
      on:input={search}
      type="text"
      placeholder="Search historic infrastructures..."
      aria-label="Search infrastructures"
    />
    <button class="search-button" aria-label="Search">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    </button>
  </div>
  
  {#if isResultsVisible && results.length > 0}
    <div class="search-results" transition:fade={{ duration: 200 }}>
      <ul>
        {#each results as result}
          <li>
            <button on:click={() => handleSelect(result.slug)} class="result-item">
              <img src={result.images[0]} alt={result.name} class="result-image" />
              <div class="result-content">
                <h4>{result.name}</h4>
                <p>{result.location}</p>
              </div>
            </button>
          </li>
        {/each}
      </ul>
    </div>
  {:else if isResultsVisible && searchTerm.length >= 2}
    <div class="search-results" transition:fade={{ duration: 200 }}>
      <p class="no-results">No results found for "{searchTerm}"</p>
    </div>
  {/if}
</div>

<style>
  .search-container {
    position: relative;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
  }
  
  .search-box {
    display: flex;
    align-items: center;
    background-color: white;
    border: 2px solid var(--gold-primary);
    border-radius: var(--radius-md);
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  input {
    flex: 1;
    padding: var(--space-2);
    border: none;
    outline: none;
    font-size: 1rem;
    font-family: var(--font-body);
  }
  
  .search-button {
    background-color: var(--gold-primary);
    color: var(--dark);
    padding: var(--space-2);
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .search-results {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: white;
    border: 2px solid var(--gold-dark);
    border-top: none;
    border-radius: 0 0 var(--radius-md) var(--radius-md);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    z-index: 10;
    max-height: 400px;
    overflow-y: auto;
  }
  
  .search-results ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .result-item {
    display: flex;
    align-items: center;
    padding: var(--space-2);
    border-bottom: 1px solid var(--gray-light);
    width: 100%;
    text-align: left;
    background: none;
    cursor: pointer;
    transition: background-color var(--transition-fast);
  }
  
  .result-item:hover {
    background-color: var(--gold-light);
  }
  
  .result-image {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: var(--radius-sm);
    margin-right: var(--space-2);
  }
  
  .result-content {
    flex: 1;
  }
  
  .result-content h4 {
    margin: 0 0 4px;
    font-size: 1rem;
  }
  
  .result-content p {
    margin: 0;
    font-size: 0.9rem;
    color: var(--gray);
  }
  
  .no-results {
    padding: var(--space-2);
    text-align: center;
    color: var(--gray);
  }
</style>