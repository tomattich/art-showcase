import { hueRotate } from "./functions.js"

export async function featured() {
    const featured = document.querySelector(".featured")

    let artworks = [];
    try {
        const response = await fetch('./data/artworks.json');
        artworks = await response.json();
    } catch (error) {
        console.error("Error loading artworks:", error);
    }

    featured.innerHTML = `
    <div class="featuredContainer">
        <div class="featuredContainerText">
            <h2 class="featuredContainerH2">Featured Works</h2>
            <p>Discover a selection of my favorite pieces, each telling a unique story through colour and form. These works represent my journey as an artist and my passion for experimental traditional art.</p>
        </div>
        ${artworks.map((artwork, index) => `
            <div class="featuredWorkContainer featuredWorkContainer${index + 1}">
                <div class="artworkImageContainer">
                    <img src="${artwork.link}" alt="${artwork.title}" class="artworkImage">
                </div>
                <div class="artworkDetails">
                    <h3>${artwork.title}</h3>
                    <p class="artworkDate">${artwork.date}</p>
                    <p class="artworkMaterials">${artwork.materials}</p>
                    <p class="artworkDescription">${artwork.description}</p>
                </div>
                <button class="artworkExpandButton">Expand</button>
            </div>
        `).join('')}
    </div>
    `

    const featuredContainerH2 = document.querySelector(".featuredContainerH2")
    const artworkImage = document.querySelectorAll(".artworkImage")
    hueRotate(featuredContainerH2)
    artworkImage.forEach((artworkImage) => {
        hueRotate(artworkImage)
    })

    const featuredWorkContainer = document.querySelectorAll(".featuredWorkContainer")
    window.addEventListener("click", () => {
        if (window.matchMedia("only screen and (max-width: 1080px) and (orientation: portrait)").matches) {
            featuredWorkContainer.style.mixBlendMode = "normal"
        } else {
            featuredWorkContainer.style.mixBlendMode = "hard-light"
        }
    })

    const expandButtons = document.querySelectorAll(".artworkExpandButton");
    expandButtons.forEach((button, index) => {
        hueRotate(button);
        button.addEventListener("click", (e) => {
            e.stopPropagation();
            const artwork = artworks[index];
            if (artwork) openArtworkModal(artwork);
        });
    });

    function openArtworkModal(artwork) {
        const overlay = document.createElement("div");
        overlay.className = "artworkExpandedOverlay";

        overlay.innerHTML = `
            <div class="artworkExpandedContainer">
                <button class="artworkExpandedCloseButton">
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
                <div class="artworkExpandedImageContainer">
                    <img src="${artwork.link}" alt="${artwork.title}" class="artworkExpandedImage">
                </div>
                <div class="artworkExpandedDetails">
                    <h3 class="artworkExpandedTitle">${artwork.title}</h3>
                    <p class="artworkExpandedDate">Date: ${artwork.date}</p>
                    <p class="artworkExpandedMaterials">Materials: ${artwork.materials}</p>
                    <p class="artworkExpandedDescription">${artwork.description}</p>
                    <a href="${artwork.link}" download="${artwork.title}" class="artworkExpandedDownloadButton">Download</a>
                </div>
            </div>
        `;

        document.body.appendChild(overlay);
        document.body.style.overflow = "hidden";

        const downloadButton = overlay.querySelector(".artworkExpandedDownloadButton");
        hueRotate(downloadButton);

        const closeButton = overlay.querySelector(".artworkExpandedCloseButton");
        closeButton.addEventListener("click", () => {
            overlay.remove();
            document.body.style.overflow = "";
        });

        overlay.addEventListener("click", (e) => {
            if (e.target === overlay) {
                overlay.remove();
                document.body.style.overflow = "";
            }
        });
    }
}
