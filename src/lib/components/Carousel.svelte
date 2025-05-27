<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { quintOut } from 'svelte/easing';
  import { fade, slide } from 'svelte/transition';
  
  export let items: {image: string, title: string}[] = [];
  export let autoplay = true;
  export let interval = 5000;
  export let showControls = true;
  export let showIndicators = true;
  
  let currentIndex = 0;
  let intervalId: ReturnType<typeof setInterval> | null = null;
  let touchStartX = 0;
  let touchEndX = 0;
  
  function next() {
    currentIndex = (currentIndex + 1) % items.length;
    resetInterval();
  }
  
  function prev() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    resetInterval();
  }
  
  function setIndex(index: number) {
    currentIndex = index;
    resetInterval();
  }
  
  function resetInterval() {
    if (autoplay) {
      if (intervalId) clearInterval(intervalId);
      intervalId = setInterval(next, interval);
    }
  }
  
  function handleTouchStart(event: TouchEvent) {
    touchStartX = event.touches[0].clientX;
  }
  
  function handleTouchEnd(event: TouchEvent) {
    touchEndX = event.changedTouches[0].clientX;
    handleSwipe();
  }
  
  function handleSwipe() {
    if (touchEndX - touchStartX > 50) {
      // Swipe right
      prev();
    } else if (touchStartX - touchEndX > 50) {
      // Swipe left
      next();
    }
  }
  
  onMount(() => {
    if (autoplay) {
      intervalId = setInterval(next, interval);
    }
  });
  
  onDestroy(() => {
    if (intervalId) clearInterval(intervalId);
  });
</script>

<div 
  class="carousel"
  on:touchstart={handleTouchStart}
  on:touchend={handleTouchEnd}
>
  <div class="carousel-inner">
    {#each items as item, i}
      {#if i === currentIndex}
        <div 
          class="carousel-item active" 
          in:fade={{ duration: 800, easing: quintOut }}
        >
          <img src={item.image} alt={item.title} />
          {#if item.title}
            <div class="caption">
              <h3>{item.title}</h3>
            </div>
          {/if}
        </div>
      {/if}
    {/each}
  </div>
  
  {#if showControls}
    <button class="control prev" on:click={prev} aria-label="Previous slide">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="15 18 9 12 15 6"></polyline>
      </svg>
    </button>
    <button class="control next" on:click={next} aria-label="Next slide">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    </button>
  {/if}
  
  {#if showIndicators && items.length > 1}
    <div class="indicators">
      {#each items as _, i}
        <button 
          class="indicator" 
          class:active={i === currentIndex} 
          on:click={() => setIndex(i)}
          aria-label={`Go to slide ${i + 1}`}
        ></button>
      {/each}
    </div>
  {/if}
</div>

<style>
  .carousel {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: var(--radius-md);
  }
  
  .carousel-inner {
    width: 100%;
    height: 100%;
    position: relative;
  }
  
  .carousel-item {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
  }
  
  .carousel-item.active {
    display: block;
  }
  
  .carousel-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .caption {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: var(--space-2);
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
    color: white;
    text-align: center;
  }
  
  .caption h3 {
    margin: 0;
    color: white;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  }
  
  .control {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0.7;
    transition: opacity var(--transition-fast);
  }
  
  .control:hover {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.7);
  }
  
  .prev {
    left: var(--space-2);
  }
  
  .next {
    right: var(--space-2);
  }
  
  .indicators {
    position: absolute;
    bottom: var(--space-2);
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 8px;
  }
  
  .indicator {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.5);
    border: none;
    padding: 0;
    cursor: pointer;
    transition: background-color var(--transition-fast), transform var(--transition-fast);
  }
  
  .indicator.active {
    background-color: var(--gold-primary);
    transform: scale(1.2);
  }
</style>