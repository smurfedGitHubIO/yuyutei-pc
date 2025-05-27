<script lang="ts">
  export let rating: number;
  export let max: number = 5;
  
  let stars: number[] = [];
  
  $: {
    stars = [];
    for (let i = 1; i <= max; i++) {
      if (i <= rating) {
        stars.push(1); // full star
      } else if (i - 0.5 <= rating) {
        stars.push(0.5); // half star
      } else {
        stars.push(0); // empty star
      }
    }
  }
</script>

<div class="star-rating">
  {#each stars as starValue, i}
    {#if starValue === 1}
      <span class="star">★</span>
    {:else if starValue === 0.5}
      <span class="star half">★</span>
    {:else}
      <span class="star empty">☆</span>
    {/if}
  {/each}
</div>

<style>
  .star-rating {
    display: inline-flex;
  }
  
  .star {
    color: var(--gold-primary);
  }
  
  .star.half {
    position: relative;
    color: var(--gray-light);
  }
  
  .star.half::before {
    content: "★";
    position: absolute;
    color: var(--gold-primary);
    width: 50%;
    overflow: hidden;
  }
  
  .star.empty {
    color: var(--gray-light);
  }
</style>