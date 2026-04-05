import "./Hero.css";

export function Hero() {
  return `
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
    `;
}
