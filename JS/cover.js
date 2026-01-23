import { hueRotate } from "./functions.js"
export function cover() {
    const cover = document.querySelector(".cover")
    cover.innerHTML = `
    <div class="coverText">
        <div class="coverTextH2Container">
            <h2 class="coverTextH2">Welcome to my showcase !</h2>
        </div>
        <div class="coverTextPContainer">
            <p class="coverTextP">and remember... don't let it stop spinning...</p>
        </div>
    </div>
        `
    const coverTextH2 = document.querySelector(".coverTextH2")
    const coverTextP = document.querySelector(".coverTextP")
    hueRotate(coverTextH2)
    hueRotate(coverTextP)
}