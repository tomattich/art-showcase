export function animations() {
    const sr = ScrollReveal({
        origin: 'top',
        distance: '2rem',
        duration: 2500,
        delay: 200,
        reset: true
    });

    sr.reveal('.coverText', { origin: 'left' });
    sr.reveal('.aboutContainerText', { origin: 'right' });
    sr.reveal('.aboutContainerImage', { origin: 'left' });
    sr.reveal('.featuredWorks', { interval: 200 });
    sr.reveal('.contactContainer', { origin: 'bottom' });
}
