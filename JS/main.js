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

    const cursor = document.querySelector(".cursor");
    window.addEventListener("mousemove", (e) => {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
    });
    window.addEventListener("click", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(2)";
        setTimeout(() => {
            cursor.style.transform = "translate(-50%, -50%) scale(1)";
        }, 75);
    });
    window.addEventListener("mousedown", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(2)";
        
    });
}
