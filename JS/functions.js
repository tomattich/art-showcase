export function hueRotate(title) {
        let hue = 0;
        setInterval(() => {
            hue += 1;
            title.style.filter = `hue-rotate(${hue}deg)`
        }, 90)
    }

