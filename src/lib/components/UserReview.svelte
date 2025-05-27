<script lang="ts">
  import StarRating from './StarRating.svelte';
  import { fade } from 'svelte/transition';
  
  export let name: string;
  export let avatar: string;
  export let date: string;
  export let rating: number;
  export let comment: string;
  export let helpful: number;
</script>

<div class="review" transition:fade={{ duration: 300 }}>
  <div class="review-header">
    <div class="reviewer">
      <img src={avatar} alt={name} class="avatar" />
      <div class="reviewer-info">
        <h4 class="reviewer-name">{name}</h4>
        <div class="review-meta">
          <span class="review-date">{date}</span>
        </div>
      </div>
    </div>
    <div class="rating">
      <StarRating rating={rating} />
    </div>
  </div>
  
  <div class="review-content">
    <p>{comment}</p>
  </div>
  
  <div class="review-footer">
    <div class="helpful">
      <span>{helpful} people found this helpful</span>
    </div>
    <button class="helpful-button">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
      </svg>
      Helpful
    </button>
  </div>
</div>

<style>
  .review {
    background-color: white;
    border: 1px solid var(--gray-light);
    border-radius: var(--radius-md);
    padding: var(--space-3);
    margin-bottom: var(--space-3);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  }
  
  .review-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: var(--space-2);
    flex-wrap: wrap;
    gap: var(--space-1);
  }
  
  .reviewer {
    display: flex;
    align-items: center;
  }
  
  .avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin-right: var(--space-2);
    object-fit: cover;
    border: 2px solid var(--gold-light);
  }
  
  .reviewer-name {
    margin: 0;
    font-size: 1.1rem;
  }
  
  .review-meta {
    font-size: 0.9rem;
    color: var(--gray);
  }
  
  .review-content {
    margin-bottom: var(--space-2);
  }
  
  .review-content p {
    margin-bottom: 0;
    line-height: 1.6;
  }
  
  .review-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: var(--space-2);
    border-top: 1px solid var(--gray-light);
    font-size: 0.9rem;
  }
  
  .helpful {
    color: var(--gray);
  }
  
  .helpful-button {
    display: flex;
    align-items: center;
    gap: 4px;
    background-color: transparent;
    border: 1px solid var(--gray-light);
    color: var(--gray);
    padding: 6px 12px;
    border-radius: var(--radius-sm);
    transition: all var(--transition-fast);
  }
  
  .helpful-button:hover {
    background-color: var(--gold-light);
    color: var(--brown-dark);
    border-color: var(--gold-dark);
  }
  
  @media (max-width: 768px) {
    .review-header {
      flex-direction: column;
      align-items: flex-start;
    }
    
    .rating {
      margin-top: var(--space-1);
    }
  }
</style>