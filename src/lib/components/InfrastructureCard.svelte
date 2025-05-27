<script lang="ts">
  import StarRating from './StarRating.svelte';
  import { fade } from 'svelte/transition';
  
  export let name: string;
  export let slug: string;
  export let location: string;
  export let image: string;
  export let rating: number;
  export let year: string;
  export let shortDescription: string;
</script>

<a href={`/infrastructure/${slug}`} class="card-link">
  <div class="card" transition:fade={{ duration: 300 }}>
    <div class="card-image">
      <img src={image} alt={name} />
      <div class="card-year">{year}</div>
    </div>
    <div class="card-content">
      <h3>{name}</h3>
      <p class="location">{location}</p>
      <div class="rating">
        <StarRating rating={rating} />
        <span class="rating-value">{rating.toFixed(1)}</span>
      </div>
      <p class="description">{shortDescription}</p>
      <button class="view-button">View Details</button>
    </div>
  </div>
</a>

<style>
  .card-link {
    text-decoration: none;
    color: inherit;
    display: block;
  }
  
  .card {
    background-color: white;
    border: 1px solid var(--gold-dark);
    border-radius: var(--radius-md);
    overflow: hidden;
    transition: transform var(--transition-normal), box-shadow var(--transition-normal);
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  
  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }
  
  .card-image {
    position: relative;
    height: 200px;
    overflow: hidden;
  }
  
  .card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform var(--transition-normal);
  }
  
  .card:hover .card-image img {
    transform: scale(1.05);
  }
  
  .card-year {
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: var(--gold-primary);
    color: var(--dark);
    padding: 4px 8px;
    font-weight: 600;
    font-size: 0.8rem;
  }
  
  .card-content {
    padding: var(--space-2);
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  
  h3 {
    margin-top: 0;
    margin-bottom: 4px;
    font-size: 1.3rem;
  }
  
  .location {
    color: var(--gray);
    font-size: 0.9rem;
    margin-bottom: var(--space-1);
  }
  
  .rating {
    display: flex;
    align-items: center;
    margin-bottom: var(--space-1);
  }
  
  .rating-value {
    margin-left: var(--space-1);
    font-weight: 600;
  }
  
  .description {
    margin-bottom: var(--space-2);
    font-size: 0.95rem;
    color: var(--brown-dark);
    flex: 1;
  }
  
  .view-button {
    align-self: flex-start;
    background-color: var(--gold-primary);
    color: var(--dark);
    border: none;
    padding: 8px 16px;
    border-radius: var(--radius-sm);
    font-weight: 600;
    cursor: pointer;
    transition: background-color var(--transition-fast);
  }
  
  .view-button:hover {
    background-color: var(--gold-dark);
    color: white;
  }
</style>