export function header(){
    const header = document.querySelector("header")

    header.innerHTML = `
    <button class="name">TomaTTich</button>
    <nav class="navigation">
        <div>
            <button class="navBtnCont">ABOUT</button>
            <hr class="underline">
        </div>
        <div class="navBtnCont">
            <button>CONTACT</button>
            <hr class="underline">
        </div>
        <div class="navBtnCont">
            <button>FEATURED WORKS</button>
            <hr class="underline">
        </div>
    </nav>`
    
}