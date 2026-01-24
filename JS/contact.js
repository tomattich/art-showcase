import { hueRotate } from "./functions.js"

export function contact() {
    const contact = document.querySelector(".contact")
    contact.innerHTML = `
    <div class="contactContainer">
        <div class="contactContainerText">
            <h2 class="contactContainerH2">Get in Touch</h2>
            <p>Interested in a commission/art piece or just want to say hello? I'm always open to discussing new projects, artistic opportunities, or experimental collaborations.</p>
        </div>
        <div class="contactFormContainer">
            <div class="socialLinks">
                <a href="#" class="socialButtons" aria-label="Discord">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037 13.48 13.48 0 0 0-.598 1.227A18.428 18.428 0 0 0 9.248 4.12c-.2.003-.396.009-.59.02a13.48 13.48 0 0 0-.598-1.226.073.073 0 0 0-.078-.037 19.791 19.791 0 0 0-4.885 1.515.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01 19.392 19.392 0 0 0 13.085 0 .074.074 0 0 1 .078.01c.123.098.248.195.373.292a.077.077 0 0 1-.006.128 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-2.028-9.117-2.028-9.117a.075.075 0 0 0-.032-.027ZM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.956 2.419-2.157 2.419Zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.946 2.419-2.157 2.419Z"/>
                    </svg>
                </a>
                <a href="#" class="socialButtons" aria-label="Telegram">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                </a>
                <a href="#" class="socialButtons" aria-label="Github">
                    <svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github [#142]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"> </path> </g> </g> </g> </g></svg>
                </a>
            </div>
        </div>
    </div>
    `
    const contactContainerH2 = document.querySelector(".contactContainerH2")
    if (contactContainerH2) hueRotate(contactContainerH2)

    const socialButtons = document.querySelectorAll(".socialButtons")
    socialButtons.forEach(button => {
        hueRotate(button)

        button.addEventListener("mouseenter", () => {
            const sunRect = button.getBoundingClientRect()
            const sunCenterX = sunRect.left + sunRect.width / 2
            const sunCenterY = sunRect.top + sunRect.height / 2

            socialButtons.forEach(otherButton => {
                if (otherButton !== button) {
                    const planetRect = otherButton.getBoundingClientRect()
                    const planetCenterX = planetRect.left + planetRect.width / 2
                    const planetCenterY = planetRect.top + planetRect.height / 2

                    const deltaX = sunCenterX - planetCenterX
                    const deltaY = sunCenterY - planetCenterY

                    otherButton.style.transformOrigin = `${deltaX + otherButton.offsetWidth / 2}px ${deltaY + otherButton.offsetHeight / 2}px`
                    otherButton.classList.add("is-orbiting")
                }
            })
        })

        button.addEventListener("mouseleave", () => {
            socialButtons.forEach(otherButton => {
                otherButton.classList.remove("is-orbiting")
                otherButton.style.transformOrigin = ""
            })
        })
    })
}