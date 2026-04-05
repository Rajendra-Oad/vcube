import "./Navbar.css";

export function Navbar() {
  return `
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
  `;
}
