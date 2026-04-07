import './Courses.css'

export function Courses() {
  return `
<section class="courses-section">
    <div class="courses-wrapper">

    <div class="courses-header">
        <p class="courses-header__eyebrow highlight">Courses</p>
        <h1 class="courses-header__title">Not Sure Which Course Fits You? Don't Worry — We're Here to Help.</h1>
        <a class="courses-header__cta button-highlight" href="#">Explore <i class="ri-arrow-right-line"></i></a>
    </div>

    <div class="course-card">
        <div class="course-card__image">
            <div class="course-card__image-placeholder"></div>
        </div>
        <div class="course-card__body">
            <div>
            <h2 class="course-card__title">Complete Web Development + DSA + Gen-AI + Aptitude</h2>
            <p class="course-card__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus aliquid provident nulla maxime inventore.</p>
            <ul class="course-card__meta">
                <li><i class="ri-time-line"></i> 7 months</li>
                <li><i class="ri-award-line"></i> Certified</li>
                <li><i class="ri-phone-line"></i> 24/7 Mentor Support</li>
            </ul>
        </div>
        <div class="course-card__footer">
            <p class="course-card__price">Price <strong>Rs25,000</strong> <del>Rs32,000</del> <small>(+GST)</small></p>
            <a class="course-card__btn" href="#">View Course <i class="ri-arrow-right-line"></i></a>
        </div>
        </div>
    </div>

    <div class="course-card">
      <div class="course-card__image">
        <div class="course-card__image-placeholder"></div>
      </div>
      <div class="course-card__body">
        <div>
          <h2 class="course-card__title">Complete Web Development + DSA + Gen-AI + Aptitude</h2>
          <p class="course-card__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus aliquid provident nulla maxime inventore.</p>
          <ul class="course-card__meta">
            <li><i class="ri-time-line"></i> 7 months</li>
            <li><i class="ri-award-line"></i> Certified</li>
            <li><i class="ri-phone-line"></i> 24/7 Mentor Support</li>
          </ul>
        </div>
        <div class="course-card__footer">
          <p class="course-card__price">Price <strong>Rs25,000</strong> <del>Rs32,000</del> <small>(+GST)</small></p>
          <a class="course-card__btn" href="#">View Course <i class="ri-arrow-right-line"></i></a>
        </div>
      </div>
    </div>

    <div class="course-card">
      <div class="course-card__image">
        <div class="course-card__image-placeholder"></div>
      </div>
      <div class="course-card__body">
        <div>
          <h2 class="course-card__title">Complete Web Development + DSA + Gen-AI + Aptitude</h2>
          <p class="course-card__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus aliquid provident nulla maxime inventore.</p>
          <ul class="course-card__meta">
            <li><i class="ri-time-line"></i> 7 months</li>
            <li><i class="ri-award-line"></i> Certified</li>
            <li><i class="ri-phone-line"></i> 24/7 Mentor Support</li>
          </ul>
        </div>
        <div class="course-card__footer">
          <p class="course-card__price">Price <strong>Rs25,000</strong> <del>Rs32,000</del> <small>(+GST)</small></p>
          <a class="course-card__btn" href="#">View Course <i class="ri-arrow-right-line"></i></a>
        </div>
      </div>
    </div>

    <p class="courses-footer-note">Be the part of this journey</p>

  </div>
</section>
  `;
}