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
            <form class="contactForm">
                <div class="formGroup">
                    <input type="text" id="name" name="name" placeholder="Your Name" required>
                </div>
                <div class="formGroup">
                    <input type="email" id="email" name="email" placeholder="Your Email" required>
                </div>
                <div class="formGroup">
                    <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>
                </div>
                <button type="submit" class="submitBtn">Send Message</button>
            </form>
            <div class="socialLinks">
                <a href="#" class="socialLink">Instagram</a>
                <a href="#" class="socialLink">Twitter</a>
                <a href="#" class="socialLink">ArtStation</a>
            </div>
        </div>
    </div>
    `
    const contactContainerH2 = document.querySelector(".contactContainerH2")
    if (contactContainerH2) hueRotate(contactContainerH2)

    const contactForm = document.querySelector(".contactForm")
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault()
            
        })
    }
}