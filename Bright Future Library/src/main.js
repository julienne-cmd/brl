const app = `
  <div class="hero" id="top">
    <header class="site-header">
      <a class="brand" href="#top" aria-label="Bright Future Library home">
        <span class="brand-mark" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M4 17.5V7.5C4 6.12 5.12 5 6.5 5H16.5C17.88 5 19 6.12 19 7.5V17.5C19 18.88 17.88 20 16.5 20H6.5C5.12 20 4 18.88 4 17.5Z" stroke="currentColor" stroke-width="1.4"/>
            <path d="M8 9.2H16M8 12.8H14.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
          </svg>
        </span>
        Bright Future Library
      </a>

      <nav class="main-nav" aria-label="Main navigation">
        <ul class="nav-list">
          <li><a class="nav-link" href="#visit">Visit</a></li>
          <li><a class="nav-link" href="#collections">Programs</a></li>
          <li><a class="nav-link" href="#collections">Collections</a></li>
          <li><a class="nav-link" href="#events">Events</a></li>
          <li><a class="nav-link" href="#about">About</a></li>
        </ul>
      </nav>
    </header>

    <div class="hero-content">
      <div class="hero-text">
        <p class="eyebrow">For curious minds</p>
        <h1>Read <span>more</span><br /> imagine brighter.</h1>
        <p class="hero-copy">
          Bright Future Library is a welcoming place to discover stories, grow your knowledge,
          and imagine what's possible.
        </p>
        <a class="button" href="#collections">
          Explore collection
          <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M4.5 10H15.5M15.5 10L10.8 5.3M15.5 10L10.8 14.7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>

      <div class="book-art" aria-hidden="true">
        <div class="book-cover">
          <span class="cover-sun">
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <circle cx="20" cy="20" r="11" stroke="currentColor" stroke-width="2.2"/>
              <path d="M20 4V9M20 31V36M4 20H9M31 20H36M8.5 8.5L12 12M28 28L31.5 31.5M28 12L31.5 8.5M8.5 31.5L12 28" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </span>
          <h2 class="cover-title">Bright<br />Future</h2>
          <p class="cover-subtitle">Library journal</p>
        </div>
      </div>
    </div>
  </div>

  <main>
    <section class="mission" id="about">
      <div class="mission-intro">
        <p class="section-label">Our mission</p>
        <h2>Welcoming every reader to a brighter tomorrow.</h2>
      </div>

      <div class="mission-copy">
        <p>
          We believe libraries are more than places to borrow books—they are spaces to make
          connections, discover new ideas, and build confidence. Every shelf, event, and story
          circle is designed to help neighbors grow together.
        </p>
        <p>
          <strong>Bright Future Library</strong> brings people together through thoughtful
          collections, inclusive programs, and welcoming community spaces that make learning feel
          joyful and accessible.
        </p>
      </div>
    </section>

    <section class="offerings" id="collections">
      <div class="offerings-heading">
        <h2>What makes our library shine</h2>
        <p>From storytime to lifelong learning, we create experiences that spark discovery.</p>
      </div>

      <div class="card-grid">
        <article class="card">
          <span class="card-number">01</span>
          <h3>Story Circles</h3>
          <p>Small-group reading sessions that invite curiosity, conversation, and connection.</p>
        </article>

        <article class="card">
          <span class="card-number">02</span>
          <h3>Young Readers</h3>
          <p>Early learning programs and creative workshops built for growing minds and bright ideas.</p>
        </article>

        <article class="card">
          <span class="card-number">03</span>
          <h3>Community Learning</h3>
          <p>Classes, talks, and resources that help neighbors learn together across every age.</p>
        </article>
      </div>
    </section>

    <section class="events" id="events">
      <div class="events-intro">
        <p class="section-label">Upcoming</p>
        <h2>Ideas, stories, and community.</h2>
        <p>Explore a calendar filled with creative programs, neighborhood gatherings, and hands-on learning.</p>
      </div>

      <div class="event-list" aria-label="Upcoming events">
        <article class="event-item">
          <div class="event-mark" aria-hidden="true">01</div>
          <div>
            <h3>Library Reading Competition</h3>
            <p class="event-date">Saturday, November 7, 2026 · 10:00 AM</p>
            <p class="event-description">Readers of all ages can share a favorite passage and celebrate their love of books in a friendly competition.</p>
          </div>
          <div class="event-kind">All ages</div>
        </article>

        <article class="event-item">
          <div class="event-mark" aria-hidden="true">02</div>
          <div>
            <h3>Children's Storytelling Session</h3>
            <p class="event-date">Wednesday, November 11, 2026 · 9:30 AM</p>
            <p class="event-description">Settle in for lively stories, playful voices, and a little imagination for our youngest readers and their families.</p>
          </div>
          <div class="event-kind">For children</div>
        </article>
      </div>
    </section>

    <section class="featured-book">
      <div class="featured-cover" aria-hidden="true">
        <div class="featured-cover-label">Featured read</div>
        <div class="featured-cover-title">The<br />Golden<br />Hour</div>
        <div class="featured-cover-author">By Maya Hart</div>
      </div>

      <div class="featured-copy">
        <p class="section-label">This month</p>
        <h2>Find your next <em>great adventure</em> in our shelves.</h2>
        <p>
          Discover stories that spark wonder, challenge ideas, and help readers connect with the
          world in new ways. We've curated picks for every mood, age, and curiosity.
        </p>
        <a class="text-link" href="#collections">
          Explore library programs
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>

    <section class="contact" id="visit">
      <p class="section-label">Plan your visit</p>
      <h2>Come in, settle in, and start your next chapter.</h2>
      <p>
        Stop by for a quiet read, join a community program, or explore a new favorite with your
        family.
      </p>
      <a class="contact-home" href="#events">
        Explore upcoming events
        <span aria-hidden="true">→</span>
      </a>
    </section>
  </main>

  <footer class="site-footer">
    <p><span class="footer-name">Bright Future Library</span> • Reading spaces for every chapter.</p>
    <p>
      <a href="#visit">Visit us</a> • <a href="#collections">Programs</a> • <a href="#events">Events</a>
    </p>
  </footer>
`;

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  if (root) {
    root.innerHTML = app;
  }
});
