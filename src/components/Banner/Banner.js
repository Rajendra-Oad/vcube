import './Banner.css';
import bannerImg from '../../assets/images/banenr.jpg';

export function Banner() {
  return `
        <section id="banner-container" class="banner-container" style="background-image: radial-gradient(circle at 50% 160%, transparent, black 78%), url(${bannerImg});">
            <div class="banner-content">
                <h2 class="banner-heading">Transform Your Learning Journey Into A Career Breakthrough With <span class="highlight">VCube</span></h2>
                <div class="banner-cta">
                    <a href="#" class="banner-button btn-enroll">Explore Courses <i class="ri-arrow-right-long-line"></i></a> 
                </div>
            </div>
        </section>
    `;
}
