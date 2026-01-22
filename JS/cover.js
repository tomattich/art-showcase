import { hueRotate } from "./functions.js"
export function cover() {
    const cover = document.querySelector(".cover")
    cover.innerHTML = `
    <div class="coverText">
            <h2 class="coverTextH2">Welcome to my showcase !</h2>
            <p class="coverTextP">and remember... don't make it stop spinning...</p>
        </div>
        `
    const coverTextH2 = document.querySelector(".coverTextH2")
    const coverTextP = document.querySelector(".coverTextP")
    hueRotate(coverTextH2)
    hueRotate(coverTextP)
}