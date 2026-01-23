import { hueRotate } from "./functions.js"

export function about() {
    const about = document.querySelector(".about")
    about.innerHTML = `
    <div class="aboutContainer">
        <div class="aboutContainerText">
            <h2 class="aboutContainerH2">About me !</h2>
            <p>Hello there!, am TomaTTich, a algerian traditional artist specializing in pseudo-psychedelic and abstract art, i mostly create pieces on a whim and i love to experiment with colors and techniques to create something unique and eye-catching.</p>
        </div>
        <div class="testingDiv">
            <div class="testingDivImgContainer testingDivImgContainer1">
            </div>
            <div class="testingDivImgContainer testingDivImgContainer2">
            </div>
            <div class="testingDivImgContainer testingDivImgContainer3">
            </div>
            <div class="testingDivImgContainer testingDivImgContainer4">
            </div>
            <div class="testingDivImgContainer testingDivImgContainer5">
            </div>
            <div class="testingDivImgContainer testingDivImgContainer6">
            </div>
        </div>
    </div>
    `
    const aboutContainerH2 = document.querySelector(".aboutContainerH2")
    hueRotate(aboutContainerH2)

}

