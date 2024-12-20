// sdgs.html
const showSDGs = (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.animate(
            {
                opacity: [0, 1],
                translate: ['0 150px', 0],
            },
            {
                duration: 600,
                easing: 'ease',
                fill: 'forwards',
            }
            );
        }
    });
};
  
const sdgs_observer = new IntersectionObserver(showSDGs);
const sdgs_items = document.querySelectorAll('.item');
sdgs_items.forEach((item) => {
    sdgs_observer.observe(item);
});