import { cursor } from "./functions.js"
export function main() {
    const main = document.querySelector("main")
    main.innerHTML = `
    <div class="cursor"></div>
    <section class="cover">
        
    </section>
    
    <section class="about">
        
    </section>
    <section class="featured">
        
    </section>
    <section class="contact">

    </section>
    `
    cursor()
}
