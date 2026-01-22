export function featured() {
    const featured = document.querySelector(".featured")
    featured.innerHTML = `
    <div class="featuredContainer">
        <h2>Featured Works</h2>
        <div class="featuredWorks">
            <div class="featuredWork">
                <img src="images/featured/1.jpg" alt="">
                <div class="featuredWorkText">
                    <h3>Featured Work 1</h3>
                    <p>Featured Work 1</p>
                </div>
            </div>
            <div class="featuredWork">
                <img src="images/featured/2.jpg" alt="">
                <div class="featuredWorkText">
                    <h3>Featured Work 2</h3>
                    <p>Featured Work 2</p>
                </div>
            </div>
            <div class="featuredWork">
                <img src="images/featured/3.jpg" alt="">
                <div class="featuredWorkText">
                    <h3>Featured Work 3</h3>
                    <p>Featured Work 3</p>
                </div>
            </div>
        </div>
    </div>
    `
}