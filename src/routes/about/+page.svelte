<script lang="ts">
  import { teamMembers } from "$lib/data/teamMembers";
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";
  
  let isVisible = false;
  
  onMount(() => {
    setTimeout(() => {
      isVisible = true;
    }, 300);
  });
</script>

<svelte:head>
  <title>About Us | GuiltTripAdvisor</title>
</svelte:head>

<section class="about-hero">
  <div class="overlay"></div>
  <div class="container">
    <div class="hero-content" in:fade={{ duration: 800 }}>
      <h1>About GuiltTripAdvisor</h1>
      <p class="subtitle">Exploring the Complex Legacy of the Marcos Era Infrastructure</p>
    </div>
  </div>
</section>

<section class="container section">
  <div class="about-content">
    <div class="mission-section">
      <h2>Our Mission</h2>
      <div class="gold-separator"></div>
      <p>
        GuiltTripAdvisor was founded with a commitment to examine the infrastructure projects of the Marcos administration through a nuanced lens. We believe that understanding this complex period in Philippine history requires looking beyond simplistic narratives of either pure vilification or uncritical nostalgia.
      </p>
      <p>
        Our goal is to document and contextualize these architectural and engineering legacies, acknowledging both their aesthetic and functional achievements while not shying away from questions about their costs—financial, social, and ethical.
      </p>
      <p>
        We seek to create a space for reflection on how societies remember contested pasts and what we can learn from them as we shape our future infrastructure priorities.
      </p>
    </div>
    
    <div class="values-section">
      <h2>Our Values</h2>
      <div class="gold-separator"></div>
      <div class="values-grid">
        <div class="value-card">
          <h3>Historical Accuracy</h3>
          <p>We are committed to factual reporting and thorough research, avoiding both romanticization and demonization.</p>
        </div>
        <div class="value-card">
          <h3>Contextual Understanding</h3>
          <p>We place each infrastructure project within its historical, economic, and social context.</p>
        </div>
        <div class="value-card">
          <h3>Multiple Perspectives</h3>
          <p>We acknowledge that these projects are viewed differently by various stakeholders and generations.</p>
        </div>
        <div class="value-card">
          <h3>Critical Engagement</h3>
          <p>We encourage viewers to think critically about the relationship between politics, aesthetics, and public works.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="vintage-section">
  <div class="container">
    <h2>The Name: Why "GuiltTripAdvisor"?</h2>
    <div class="gold-separator"></div>
    <p>
      Our name is a play on words that acknowledges the complicated emotions many Filipinos feel when confronting this era. Some infrastructures from this period remain functional and even iconic, yet were built during a regime now widely recognized for corruption and human rights abuses.
    </p>
    <p>
      The term "guilt trip" reflects the emotional complexity of appreciating beautiful or useful structures while acknowledging their problematic origins—a tension that defines many societies' relationships with their architectural heritage.
    </p>
    <p>
      By reclaiming this tension through satire, we hope to create space for more honest conversations about history, memory, and the physical spaces we inherit.
    </p>
  </div>
</section>

<section class="container section">
  <h2 class="text-center">Meet Our Team</h2>
  <div class="gold-separator center"></div>
  <p class="team-intro">
    Our diverse team brings together expertise in history, architecture, photography, design, and community engagement to create a multifaceted exploration of these historical infrastructures.
  </p>
  
  <div class="team-grid">
    {#each teamMembers as member, i}
      {#if isVisible}
        <div class="team-card" in:fly={{ y: 30, duration: 500, delay: 200 * i }}>
          <div class="team-image">
            <img src={member.image} alt={member.name} />
          </div>
          <div class="team-info">
            <h3>{member.name}</h3>
            <p class="team-role">{member.role}</p>
            <p class="team-bio">{member.bio}</p>
          </div>
        </div>
      {/if}
    {/each}
  </div>
</section>

<section class="disclaimer-section">
  <div class="container">
    <h2>Disclaimer</h2>
    <div class="gold-separator"></div>
    <p>
      GuiltTripAdvisor is a fictional educational project created to explore the complex legacy of infrastructure projects from a specific historical period. All reviews, ratings, and user comments are fictional and created for illustrative purposes only.
    </p>
    <p>
      This site does not aim to promote or condemn any political figures or ideologies, but rather to encourage critical thinking about how societies remember and continue to use contested heritage sites.
    </p>
    <p>
      We acknowledge that the term "golden age" is itself contested when applied to this period of Philippine history, and we use it critically and within quotation marks to denote its controversial nature.
    </p>
  </div>
</section>

<style>
  .about-hero {
    height: 400px;
    background-image: url('https://images.pexels.com/photos/2129796/pexels-photo-2129796.jpeg');
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
    margin: 0 auto;
  }
  
  .about-content {
    max-width: 900px;
    margin: 0 auto;
  }
  
  .mission-section,
  .values-section {
    margin-bottom: var(--space-5);
  }
  
  h2 {
    color: var(--brown-dark);
    margin-bottom: var(--space-2);
  }
  
  .gold-separator {
    width: 80px;
    height: 3px;
    background-color: var(--gold-primary);
    margin-bottom: var(--space-3);
  }
  
  .gold-separator.center {
    margin-left: auto;
    margin-right: auto;
  }
  
  .values-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-3);
    margin-top: var(--space-3);
  }
  
  .value-card {
    background-color: white;
    padding: var(--space-3);
    border-radius: var(--radius-md);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    border-left: 3px solid var(--gold-primary);
  }
  
  .value-card h3 {
    color: var(--brown-dark);
    margin-bottom: var(--space-1);
    font-size: 1.3rem;
  }
  
  .vintage-section {
    background-color: var(--cream);
    padding: var(--space-5) 0;
    margin: var(--space-5) 0;
  }
  
  .vintage-section .container {
    max-width: 900px;
  }
  
  .team-intro {
    text-align: center;
    max-width: 700px;
    margin: 0 auto var(--space-4);
  }
  
  .team-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-4);
  }
  
  .team-card {
    display: flex;
    background-color: white;
    border-radius: var(--radius-md);
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  .team-image {
    flex: 0 0 120px;
  }
  
  .team-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .team-info {
    flex: 1;
    padding: var(--space-2);
  }
  
  .team-info h3 {
    margin-top: 0;
    margin-bottom: 4px;
    font-size: 1.2rem;
  }
  
  .team-role {
    color: var(--gold-dark);
    font-weight: 600;
    margin-bottom: var(--space-1);
    font-size: 0.9rem;
  }
  
  .team-bio {
    font-size: 0.9rem;
    margin-bottom: 0;
  }
  
  .disclaimer-section {
    background-color: var(--off-white);
    padding: var(--space-4) 0;
    margin-top: var(--space-5);
  }
  
  .disclaimer-section .container {
    max-width: 900px;
  }
  
  @media (max-width: 992px) {
    .team-grid {
      grid-template-columns: 1fr;
      gap: var(--space-3);
    }
  }
  
  @media (max-width: 768px) {
    .hero-content h1 {
      font-size: 2.5rem;
    }
    
    .subtitle {
      font-size: 1.2rem;
    }
    
    .values-grid {
      grid-template-columns: 1fr;
    }
    
    .team-card {
      flex-direction: column;
    }
    
    .team-image {
      height: 200px;
    }
  }
</style>