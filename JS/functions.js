export function hueRotate(title) {
    let hue = 0;
    setInterval(() => {
        hue += 1;
        title.style.filter = `hue-rotate(${hue}deg)`
    }, 90)
    if (hue >= 360) {
        hue = hue - 360 ;
    } 
}

export function cursor() {
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
        setTimeout(() => {
            cursor.style.transform = "translate(-50%, -50%) scale(2)";
        }, 100);
    });
    if (window.matchMedia("only screen and (max-width: 1080px) and (orientation: portrait)").matches) {
        window.addEventListener("mousedown", () => {
            cursor.style.display = "block";
            cursor.style.transform = "translate(-50%, -50%) scale(1)";
            setTimeout(() => {
                cursor.style.transform = "translate(-50%, -50%) scale(2)";
            }, 100);
        });
        window.addEventListener("mouseup", () => {
            setTimeout(() => {
                cursor.style.transform = "translate(-50%, -50%) scale(1)";
            }, 100);
            setTimeout(() => {
                cursor.style.display = "none";
            }, 400);
        });
    }
}

export function smoothScroll(selector) {
    const target = document.querySelector(selector);
    if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
    }
}
