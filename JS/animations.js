export function animations() {
    const sr = ScrollReveal({
        origin: 'top',
        distance: '2rem',
        duration: 2500,
        delay: 300,
        reset: true
    });

    sr.reveal('.coverTextH2Container', { origin: 'left' });
    sr.reveal('.coverTextPContainer', { origin: 'right' });
    sr.reveal('.aboutContainerText', { origin: 'left' , delay: 0});
    sr.reveal('.featuredWorks', { origin: 'bottom' , distance: '10rem',interval: 200 });
    sr.reveal('.contactContainer', { origin: 'bottom' });
    sr.reveal('.testingDivImgContainer1', { origin: 'left' , distance: '10rem', delay: 0});
    sr.reveal('.testingDivImgContainer2', { origin: 'top' , distance: '10rem', delay: 0});
    sr.reveal('.testingDivImgContainer3', { origin: 'right' , distance: '10rem', delay: 0});
    sr.reveal('.testingDivImgContainer4', { origin: 'left' , distance: '10rem', delay: 0});
    sr.reveal('.testingDivImgContainer5', { origin: 'bottom' , distance: '10rem', delay: 0});
    sr.reveal('.testingDivImgContainer6', { origin: 'right' , distance: '10rem', delay: 0});
}
