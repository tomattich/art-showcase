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
            <p>Discover a selection of my favorite pieces, each telling a unique story through color and form. These works represent my journey as an artist and my passion for experimental traditional art.</p>
        </div>
        <div class="featuredGallery">
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
                </div>
            `).join('')}
        </div>
    </div>
    `

    const featuredContainerH2 = document.querySelector(".featuredContainerH2")
    hueRotate(featuredContainerH2)
}