<script lang="ts">
  import { page } from '$app/stores';
</script>

<div class="error-container">
  <div class="error-content">
    <h1>{$page.status}: {$page.error?.message || 'Error'}</h1>
    
    {#if $page.status === 404}
      <p>Sorry, we couldn't find the page you were looking for.</p>
      <img src="https://images.pexels.com/photos/7516509/pexels-photo-7516509.jpeg" alt="Not Found" class="error-image" />
    {:else}
      <p>Something went wrong. Please try again later.</p>
      <img src="https://images.pexels.com/photos/4439901/pexels-photo-4439901.jpeg" alt="Error" class="error-image" />
    {/if}
    
    <a href="/" class="home-button">Back to Home</a>
  </div>
</div>

<style>
  .error-container {
    min-height: calc(100vh - 60px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--space-4);
  }
  
  .error-content {
    text-align: center;
    max-width: 600px;
  }
  
  h1 {
    color: var(--red-primary);
    margin-bottom: var(--space-2);
  }
  
  p {
    font-size: 1.2rem;
    margin-bottom: var(--space-3);
  }
  
  .error-image {
    max-width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: var(--radius-md);
    margin-bottom: var(--space-3);
  }
  
  .home-button {
    display: inline-block;
    background-color: var(--gold-primary);
    color: var(--dark);
    padding: var(--space-2) var(--space-3);
    border-radius: var(--radius-md);
    font-weight: 600;
    text-decoration: none;
    transition: background-color var(--transition-fast);
  }
  
  .home-button:hover {
    background-color: var(--gold-dark);
    color: white;
  }
</style>