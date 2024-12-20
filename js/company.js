const overview_items = document.querySelectorAll('.overview-image');

for (let i = 0; i < overview_items.length; i++) {
    let keyframes = {
        opacity: [0, 1],
        translate: ['0 150px', 0],
    };
    let options = {
        duration: 600,
        delay: i * 300,
        fill: 'forwards',
    };
    overview_items[i].animate(keyframes, options);
}
