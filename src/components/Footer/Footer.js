import "./Footer.css";

export function Footer() {
  return `
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
    `;
}
