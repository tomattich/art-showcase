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
        <h3>Navigation</h3>
            <div class="footerNavGroup">
                <div class="navBtnCont">
                    <button class="aboutBtn">ABOUT</button>
                    <hr class="underline">
                </div>
                <div class="navBtnCont">
                    <button class="workBtn">WORKS</button>
                    <hr class="underline">
                </div>
                <div class="navBtnCont">
                    <button class="contactBtn">CONTACT</button>
                    <hr class="underline">
                </div>
            </div>
        </nav>
        <div class="footerBottom">
            <p>&copy; ${new Date().getFullYear()} TomaTTich Art. Internalized Experimentalism.</p>
            <p>All rights reserved.</p>
        </div>
    </div>
    <div class="orbit1">
        <div class="orbit1Inner">
            <div class="orbit1InnerInner"></div>
        </div>
    </div>
    <div class="orbit2">
        <div class="orbit2Inner">
            <div class="orbit2InnerInner"></div>
        </div>
    </div>
    <div class="orbit3">
        <div class="orbit3Inner">
            <div class="orbit3InnerInner"></div>
        </div>
    </div>
    `

    const footerLogo = footer.querySelector(".footerLogo")
    const NavigationTitle = footer.querySelector(".footerNav h3")
    hueRotate(footerLogo)
    hueRotate(NavigationTitle)


    // Add pseudo-element content for glow effect on navigation heading
    const navHeading = footer.querySelector(".footerNavGroup h3")
    if (navHeading) {
        const text = navHeading.textContent
        navHeading.style.setProperty('--heading-text', `"${text}"`)
    }

    footer.querySelector(".footerLogo").addEventListener("click", () => smoothScroll(".cover"))

    footer.querySelector(".aboutBtn").addEventListener("click", () => smoothScroll(".about"))
    footer.querySelector(".workBtn").addEventListener("click", () => smoothScroll(".featured"))
    footer.querySelector(".contactBtn").addEventListener("click", () => smoothScroll(".contact"))

    const orbit1 = footer.querySelector(".orbit1")
    const orbit2 = footer.querySelector(".orbit2")
    const orbit3 = footer.querySelector(".orbit3")
    hueRotate(orbit1)
    hueRotate(orbit2)
    hueRotate(orbit3)
    function orbit() {
            const sunRect = orbit1.getBoundingClientRect()
            const sunCenterX = sunRect.left + sunRect.width / 2
            const sunCenterY = sunRect.top + sunRect.height / 2

            orbit2.forEach(otherButton => {
                if (otherButton !== orbit1) {
                    const planetRect = otherButton.getBoundingClientRect()
                    const planetCenterX = planetRect.left + planetRect.width / 2
                    const planetCenterY = planetRect.top + planetRect.height / 2

                    const deltaX = sunCenterX - planetCenterX
                    const deltaY = sunCenterY - planetCenterY

                    otherButton.style.transformOrigin = `${deltaX + otherButton.offsetWidth / 2}px ${deltaY + otherButton.offsetHeight / 2}px`
                    otherButton.classList.add("is-orbiting")
                }
            })

            orbit2.forEach(otherButton => {
                otherButton.classList.remove("is-orbiting")
                otherButton.style.transformOrigin = ""
            })
        }
}
