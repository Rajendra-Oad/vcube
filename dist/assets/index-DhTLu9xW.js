(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(){return`
  <nav class="navbar">
    <div class="nav-logo">
        <a href="#">VQ</a>
    </div>
    <div class="nav-nav">
      <div class="nav-border" >
        <ol class="nav-list" id="menu">
            <li><a href="#" class="active-nav">Home</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">Placements</a></li>
            <li ><a href="#">Request Callback</a></li>
            <li class="mobile-sign">
            <div class="hover-container">
              <a href="#" class="signup-btn">
                <div class="text-wrapper">
                  <span class="original-text">Sign In</span>
                  <span class="new-text">Sign Up</span>
                </div>
              </a>
            </div>
              
            </li>
        </ol>
      </div>
    </div>
    <div class="nav-sign">
     <div class="hover-container">
              <a href="#">
                <div class="text-wrapper">
                  <span class="original-text">Sign In</span>
                  <span class="new-text">Sign In</span>
                </div>
              </a>
            </div>
    </div>
    <div class="menu">
      <span><i class="ri-menu-line"></i></span>
    </div>
  </nav>
  `}function t(){return`
        <div class="section" id="hero-container" class="hero-container">
            <div class="hero-content">
                <p class="hero-text">LEARN. BUILD. GET PLACED.</p>
                <h1 class="hero-heading">From Beginner to Software Developer Even Without Coding Experience</h1>
                <p class="hero-subheading">Learn Java, Python & Full Stack with real projects and placement support.</p>
                <div class="hero-points">
                    <ul>
                        <li><i class="ri-check-line"></i> Real-time Projects</li>
                        <li><i class="ri-check-line"></i> Placement Support</li>
                        <li><i class="ri-check-line"></i> Industry-Ready Skills</li>
                    </ul>
                </div>
                <div class="hero-cta">
                    <a href="#" class="hero-button btn-enroll">Enroll Now</a>
                    <a href="#" class="hero-button btn-demo"><i class="ri-play-line"></i> Book Demo</a>
                </div>
                <p class="hero-text-muted">500+ Students • 300+ Placements</p>
            </div>
        </div>
    `}var n=`/vcube/assets/companiesLogo-CPe4tXAE.png`;function r(){return`
    <div class="marquee-container">
        <div class="marquee">
            <img src="${n}" alt="Company Logo" class="marquee-image">
            <img src="${n}" alt="Company Logo" class="marquee-image">
            <img src="${n}" alt="Company Logo" class="marquee-image">
            <img src="${n}" alt="Company Logo" class="marquee-image">
            <img src="${n}" alt="Company Logo" class="marquee-image">
            <img src="${n}" alt="Company Logo" class="marquee-image">
            <img src="${n}" alt="Company Logo" class="marquee-image">
            <img src="${n}" alt="Company Logo" class="marquee-image">
        </div>
    </div>
    `}function i(){return`
   <footer class="footer">
  <div class="footer__brand">
    <h1 class="footer__brand-title">Vcube <span>Software Solutions</span></h1>
  </div>

  <div class="footer__bottom">
    <div class="footer__social">
      <ul class="footer__social-list">
        <li><a href="#"><i class="ri-instagram-line"></i></a></li>
        <li><a href="#"><i class="ri-linkedin-box-fill"></i></a></li>
        <li><a href="#"><i class="ri-discord-fill"></i></a></li>
        <li><a href="#"><i class="ri-youtube-fill"></i></a></li>
        <li><a href="#"><i class="ri-twitter-x-fill"></i></a></li>
      </ul>
    </div>

    <nav class="footer__nav-groups" aria-label="Footer navigation">

      <div class="footer__nav-group">
        <ul>
          <li><p class="footer__nav-heading">About Us</p></li>
          <li><a href="#">Support</a></li>
          <li><a href="#">Terms and Conditions</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Submit Projects</a></li>
        </ul>
      </div>

      <div class="footer__nav-group">
        <ul>
          <li><p class="footer__nav-heading">Company</p></li>
          <li><a href="#">Hire From Us</a></li>
          <li><a href="#">Discord</a></li>
          <li><a href="#">Pricing and Refund</a></li>
          <li><a href="#">Jobs</a></li>
          <li><a href="#">Feedback</a></li>
        </ul>
      </div>

      <div class="footer__nav-group">
        <ul>
          <li><p class="footer__nav-heading">Contact</p></li>
          <li>
            <a href="#" class="footer__contact-item">
              <span>Timing: 8am – 6pm</span>
              <span>Call: +91 98232 39874</span>
            </a>
          </li>
          <li><a href="#">Email:VcubeSol@gmail.com</a></li>
          <li><a href="#">Address:  KPHB, Phase-1, Kukatpally, Hyderabad​</a></li>
        </ul>
      </div>

    </nav>
  </div>
  <div class="footer__copyright">
    <span>&copy; 2026</span>
    <span class="footer__copyright-brand">Vcube Software Solutions.</span>
    <span>All rights reserved.</span>
  </div>
</footer>
    `}var a=document.querySelector(`#app`);function o(){a.innerHTML=`
    ${e()}
    ${t()}
    ${r()}
    ${i()}
    
    `}o();var s=document.querySelector(`.menu`),c=document.querySelector(`#menu`);s.addEventListener(`click`,()=>{c.classList.toggle(`show`)});