import './ImageMarquee.css';
import logo from '../../assets/images/companiesLogo.png';

export function ImageMarquee() {
    return `
    <div class="marquee-container">
        <div class="marquee">
            <img src="${logo}" alt="Company Logo" class="marquee-image">
            <img src="${logo}" alt="Company Logo" class="marquee-image">
            <img src="${logo}" alt="Company Logo" class="marquee-image">
            <img src="${logo}" alt="Company Logo" class="marquee-image">
            <img src="${logo}" alt="Company Logo" class="marquee-image">
            <img src="${logo}" alt="Company Logo" class="marquee-image">
            <img src="${logo}" alt="Company Logo" class="marquee-image">
            <img src="${logo}" alt="Company Logo" class="marquee-image">
        </div>
    </div>
    `;      
}