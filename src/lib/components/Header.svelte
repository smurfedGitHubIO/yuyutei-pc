<script lang="ts">
  import { page } from '$app/stores';
  import { fly } from 'svelte/transition';
  import { onMount } from 'svelte';
  
  let isScrolled = false;
  let isMenuOpen = false;
  
  onMount(() => {
    const handleScroll = () => {
      isScrolled = window.scrollY > 20;
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<header class={isScrolled ? 'scrolled' : ''}>
  <div class="container header-container">
    <a href="/" class="logo">
      <span class="guilt">Guilt</span><span class="trip">Trip</span><span class="advisor">Advisor</span>
    </a>
    
    <button class="menu-toggle" on:click={toggleMenu} aria-label="Toggle menu">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </button>
    
    <nav class={isMenuOpen ? 'open' : ''}>
      <ul>
        <li class:active={$page.url.pathname === '/'}>
          <a href="/">Home</a>
        </li>
        <li class:active={$page.url.pathname.includes('/infrastructure')}>
          <a href="/infrastructure">Infrastructures</a>
        </li>
        <li class:active={$page.url.pathname === '/about'}>
          <a href="/about">About Us</a>
        </li>
      </ul>
    </nav>
  </div>
</header>

<style>
  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    background-color: transparent;
    transition: background-color var(--transition-normal);
    padding: var(--space-2) 0;
  }
  
  header.scrolled {
    background-color: var(--dark);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  }
  
  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .logo {
    font-family: var(--font-heading);
    font-size: 1.8rem;
    font-weight: 700;
    text-decoration: none;
    display: flex;
  }
  
  .guilt {
    color: var(--gold-primary);
  }
  
  .trip {
    color: var(--red-primary);
  }
  
  .advisor {
    color: var(--off-white);
  }
  
  header.scrolled .advisor {
    color: var(--off-white);
  }
  
  nav ul {
    display: flex;
    list-style: none;
    gap: var(--space-3);
  }
  
  nav a {
    color: var(--off-white);
    font-weight: 600;
    font-size: 1.1rem;
    text-decoration: none;
    position: relative;
    padding: var(--space-1) 0;
  }
  
  nav a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--gold-primary);
    transition: width var(--transition-normal);
  }
  
  nav a:hover::after,
  .active a::after {
    width: 100%;
  }
  
  .menu-toggle {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 21px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
  }
  
  .menu-toggle .bar {
    height: 3px;
    width: 100%;
    background-color: var(--off-white);
    border-radius: 10px;
    transition: var(--transition-normal);
  }
  
  @media (max-width: 768px) {
    .menu-toggle {
      display: flex;
    }
    
    nav {
      position: fixed;
      top: 60px;
      left: 0;
      width: 100%;
      background-color: var(--dark);
      padding: var(--space-2);
      transform: translateY(-100%);
      opacity: 0;
      transition: transform var(--transition-normal), opacity var(--transition-normal);
      visibility: hidden;
    }
    
    nav.open {
      transform: translateY(0);
      opacity: 1;
      visibility: visible;
    }
    
    nav ul {
      flex-direction: column;
      gap: var(--space-2);
    }
    
    .menu-toggle.open .bar:nth-child(1) {
      transform: translateY(9px) rotate(45deg);
    }
    
    .menu-toggle.open .bar:nth-child(2) {
      opacity: 0;
    }
    
    .menu-toggle.open .bar:nth-child(3) {
      transform: translateY(-9px) rotate(-45deg);
    }
  }
</style>