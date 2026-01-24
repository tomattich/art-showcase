import { hueRotate, smoothScroll } from "./functions.js"

export function footer() {
    const footer = document.querySelector("footer")

    footer.innerHTML = `
    <div class="footerContainer">
        <div class="footerBrand">
            <button class="footerLogo">TomaTTich</button>
            <p class="footerTagline">Visualizing the experimental through traditional mediums.</p>
            <p>I also made this website !</p>
        </div>
        <nav class="footerNav">
            <div class="footerNavGroup">
                <h3>Navigation</h3>
                <button class="footerLink about-link">About</button>
                <button class="footerLink works-link">Works</button>
                <button class="footerLink contact-link">Contact</button>
            </div>
        </nav>
        <div class="footerBottom">
            <p>&copy; ${new Date().getFullYear()} TomaTTich Art. Internalized Experimentalism.</p>
            <p>All rights reserved.</p>
        </div>
    </div>
    `

    const footerLogo = footer.querySelector(".footerLogo")
    hueRotate(footerLogo)

    footer.querySelector(".footerLogo").addEventListener("click", () => smoothScroll(".cover"))
    footer.querySelector(".about-link").addEventListener("click", () => smoothScroll(".about"))
    footer.querySelector(".works-link").addEventListener("click", () => smoothScroll(".featured"))
    footer.querySelector(".contact-link").addEventListener("click", () => smoothScroll(".contact"))
}
