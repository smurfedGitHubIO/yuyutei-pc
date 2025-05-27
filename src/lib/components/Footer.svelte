<script lang="ts">
  const currentYear = new Date().getFullYear();
</script>

<footer>
  <div class="container">
    <div class="footer-content">
      <div class="footer-logo">
        <span class="guilt">Guilt</span><span class="trip">Trip</span><span class="advisor">Advisor</span>
        <p class="tagline">Revisiting the Golden Era of Infrastructure</p>
      </div>
      
      <div class="footer-links">
        <div class="link-group">
          <h4>Explore</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/infrastructure">Infrastructures</a></li>
            <li><a href="/about">About Us</a></li>
          </ul>
        </div>
        
        <div class="link-group">
          <h4>Featured</h4>
          <ul>
            <li><a href="/infrastructure/san-juanico-bridge">San Juanico Bridge</a></li>
            <li><a href="/infrastructure/cultural-center">Cultural Center</a></li>
            <li><a href="/infrastructure/bataan-nuclear">Bataan Nuclear Plant</a></li>
          </ul>
        </div>
        
        <div class="link-group">
          <h4>Legal</h4>
          <ul>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Disclaimer</a></li>
          </ul>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">
      <p>&copy; {currentYear} GuiltTripAdvisor. This is a satirical site for educational purposes only.</p>
      <p class="disclaimer">All content is fictional and presented as satire. Any resemblance to real reviews is coincidental.</p>
    </div>
  </div>
</footer>

<style>
  footer {
    background-color: var(--dark);
    color: var(--off-white);
    padding: var(--space-4) 0 var(--space-2);
    margin-top: var(--space-5);
  }
  
  .footer-content {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-4);
    margin-bottom: var(--space-4);
  }
  
  .footer-logo {
    flex: 1 1 300px;
  }
  
  .footer-logo span {
    font-family: var(--font-heading);
    font-size: 1.8rem;
    font-weight: 700;
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
  
  .tagline {
    margin-top: var(--space-1);
    font-style: italic;
    color: var(--gray);
  }
  
  .footer-links {
    flex: 2 1 600px;
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-3);
  }
  
  .link-group {
    flex: 1 1 180px;
  }
  
  .link-group h4 {
    color: var(--gold-primary);
    margin-bottom: var(--space-2);
    font-size: 1.2rem;
  }
  
  .link-group ul {
    list-style: none;
  }
  
  .link-group li {
    margin-bottom: var(--space-1);
  }
  
  .link-group a {
    color: var(--gray-light);
    text-decoration: none;
    transition: color var(--transition-fast);
  }
  
  .link-group a:hover {
    color: var(--gold-light);
    text-decoration: underline;
  }
  
  .footer-bottom {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: var(--space-2);
    text-align: center;
    font-size: 0.9rem;
    color: var(--gray);
  }
  
  .disclaimer {
    font-size: 0.8rem;
    margin-top: var(--space-1);
  }
  
  @media (max-width: 768px) {
    .footer-content {
      flex-direction: column;
      gap: var(--space-3);
    }
    
    .footer-links {
      flex-direction: column;
      gap: var(--space-2);
    }
  }
</style>