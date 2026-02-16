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
    </nav>
    <button class="menuBtn">
        <div class="menuBtnLines">
            <span class="menuBtnLine menuBtnLine0"></span>
            <span class="menuBtnLine menuBtnLine1"></span>
            <span class="menuBtnLine menuBtnLine2"></span>
            <span class="menuBtnLine menuBtnLine3"></span>
            <span class="menuBtnLine menuBtnLine4"></span>
        </div>
    </button>
    <div class="mobileMenu">
        <div class="mobileNav">
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
    </div>`
    const name = document.querySelector(".name");
    const menuBtn = document.querySelector(".menuBtn");
    const mobileMenu = document.querySelector(".mobileMenu");
    document.querySelectorAll(".aboutBtn").forEach(btn => btn.addEventListener("click", () => smoothScroll(".about")));
    document.querySelectorAll(".workBtn").forEach(btn => btn.addEventListener("click", () => smoothScroll(".featured")));
    document.querySelectorAll(".contactBtn").forEach(btn => btn.addEventListener("click", () => smoothScroll(".contact")));
    hueRotate(name);
    menuBtn.addEventListener("click", () => {
        if (mobileMenu.style.display !== "flex") {
            mobileMenu.style.animation = "slideInToLeft .3s ease-in-out";
            mobileMenu.style.display = "flex";
            menuBtn.classList.add("menuBtnLinesActive");
            setTimeout(() => {
                mobileMenu.style.flexDirection = "column";
            }, 200);
        }
        
        else {
            mobileMenu.style.animation = "slideOutToRight .3s ease-in-out";
            menuBtn.classList.remove("menuBtnLinesActive");
            setTimeout(() => {
                mobileMenu.style.display = "none";
            }, 200);
        }
    })
    
}