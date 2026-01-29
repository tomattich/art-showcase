import { smoothScroll } from "./functions.js"
import { hueRotate } from "./functions.js"
export function header() {
    const header = document.querySelector("header")

    header.innerHTML = `
    <button class="name">TomaTTich</button>
    <nav class="navigation">
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
    </nav>`
    const name = document.querySelector(".name");

    document.querySelector(".aboutBtn").addEventListener("click", () => smoothScroll(".about"));
    document.querySelector(".workBtn").addEventListener("click", () => smoothScroll(".featured"));
    document.querySelector(".contactBtn").addEventListener("click", () => smoothScroll(".contact"));
    hueRotate(name);
}