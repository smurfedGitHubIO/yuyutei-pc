<script lang="ts">
  import { onMount } from 'svelte';
  
  export let images: string[] = [];
  export let name: string;
  
  let currentIndex = 0;
  let lightboxOpen = false;
  let touchStartX = 0;
  let touchEndX = 0;
  
  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
  }
  
  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
  }
  
  function openLightbox(index: number) {
    currentIndex = index;
    lightboxOpen = true;
    document.body.style.overflow = 'hidden';
  }
  
  function closeLightbox() {
    lightboxOpen = false;
    document.body.style.overflow = '';
  }
  
  function handleKeydown(event: KeyboardEvent) {
    if (!lightboxOpen) return;
    
    if (event.key === 'Escape') {
      closeLightbox();
    } else if (event.key === 'ArrowRight') {
      nextImage();
    } else if (event.key === 'ArrowLeft') {
      prevImage();
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
      prevImage();
    } else if (touchStartX - touchEndX > 50) {
      // Swipe left
      nextImage();
    }
  }
  
  onMount(() => {
    window.addEventListener('keydown', handleKeydown);
    
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  });
</script>

<svelte:head>
  {#if lightboxOpen}
    <title>Gallery: {name} | GuiltTripAdvisor</title>
  {/if}
</svelte:head>

<div class="gallery">
  <div class="main-image">
    <img 
      src={images[0]} 
      alt={`${name} - Main Image`} 
      on:click={() => openLightbox(0)}
    />
    <div class="image-overlay">
      <span>View Gallery</span>
    </div>
  </div>
  
  <div class="thumbnail-grid">
    {#each images.slice(1, 5) as image, i}
      <div class="thumbnail" on:click={() => openLightbox(i + 1)}>
        <img src={image} alt={`${name} - Image ${i + 2}`} />
      </div>
    {/each}
    
    {#if images.length > 5}
      <div class="thumbnail more" on:click={() => openLightbox(5)}>
        <img src={images[5]} alt={`${name} - Image 6`} />
        <div class="more-overlay">
          <span>+{images.length - 5} more</span>
        </div>
      </div>
    {/if}
  </div>
</div>

{#if lightboxOpen}
  <div 
    class="lightbox"
    on:click={closeLightbox}
    on:touchstart={handleTouchStart}
    on:touchend={handleTouchEnd}
  >
    <div class="lightbox-content" on:click|stopPropagation>
      <button class="close-button" on:click={closeLightbox} aria-label="Close gallery">×</button>
      
      <div class="lightbox-image-container">
        <img 
          src={images[currentIndex]} 
          alt={`${name} - Image ${currentIndex + 1}`} 
          class="lightbox-image" 
        />
      </div>
      
      <div class="lightbox-controls">
        <button class="control-button prev" on:click={prevImage} aria-label="Previous image">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        
        <div class="image-counter">
          {currentIndex + 1} / {images.length}
        </div>
        
        <button class="control-button next" on:click={nextImage} aria-label="Next image">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
      
      <div class="thumbnail-strip">
        {#each images as image, i}
          <div 
            class="strip-thumbnail" 
            class:active={i === currentIndex}
            on:click={() => (currentIndex = i)}
          >
            <img src={image} alt={`${name} - Thumbnail ${i + 1}`} />
          </div>
        {/each}
      </div>
    </div>
  </div>
{/if}

<style>
  .gallery {
    display: flex;
    flex-direction: column;
    gap: var(--space-1);
    margin-bottom: var(--space-3);
  }
  
  .main-image {
    position: relative;
    height: 400px;
    width: 100%;
    border-radius: var(--radius-md);
    overflow: hidden;
    cursor: pointer;
  }
  
  .main-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform var(--transition-normal);
  }
  
  .main-image:hover img {
    transform: scale(1.05);
  }
  
  .image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    opacity: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity var(--transition-normal);
  }
  
  .image-overlay span {
    color: white;
    font-size: 1.2rem;
    font-weight: 600;
    padding: 8px 16px;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: var(--radius-sm);
  }
  
  .main-image:hover .image-overlay {
    opacity: 1;
  }
  
  .thumbnail-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: var(--space-1);
  }
  
  .thumbnail {
    height: 100px;
    overflow: hidden;
    border-radius: var(--radius-sm);
    cursor: pointer;
    position: relative;
  }
  
  .thumbnail img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform var(--transition-fast);
  }
  
  .thumbnail:hover img {
    transform: scale(1.05);
  }
  
  .more-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .more-overlay span {
    color: white;
    font-weight: 600;
  }
  
  .lightbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .lightbox-content {
    width: 90%;
    max-width: 1200px;
    height: 90%;
    position: relative;
    display: flex;
    flex-direction: column;
  }
  
  .close-button {
    position: absolute;
    top: -40px;
    right: 0;
    background: transparent;
    border: none;
    color: white;
    font-size: 2rem;
    cursor: pointer;
    z-index: 10;
  }
  
  .lightbox-image-container {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  
  .lightbox-image {
    max-width: 100%;
    max-height: calc(90vh - 100px);
    object-fit: contain;
  }
  
  .lightbox-controls {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--space-2) 0;
  }
  
  .control-button {
    background: transparent;
    border: none;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .image-counter {
    color: white;
    font-size: 1rem;
  }
  
  .thumbnail-strip {
    display: flex;
    gap: var(--space-1);
    overflow-x: auto;
    padding-bottom: var(--space-1);
  }
  
  .strip-thumbnail {
    width: 60px;
    height: 60px;
    flex-shrink: 0;
    border-radius: var(--radius-sm);
    overflow: hidden;
    cursor: pointer;
    opacity: 0.6;
    transition: opacity var(--transition-fast);
  }
  
  .strip-thumbnail img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .strip-thumbnail.active,
  .strip-thumbnail:hover {
    opacity: 1;
  }
  
  @media (max-width: 768px) {
    .main-image {
      height: 250px;
    }
    
    .thumbnail-grid {
      grid-template-columns: repeat(3, 1fr);
    }
    
    .thumbnail {
      height: 80px;
    }
    
    .lightbox-image {
      max-height: calc(90vh - 150px);
    }
    
    .strip-thumbnail {
      width: 50px;
      height: 50px;
    }
  }
</style>