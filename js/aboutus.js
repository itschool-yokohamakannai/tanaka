// 監視対象が範囲内に現れたら実行する動作
const showMerits = (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.animate(
            {
                opacity: [0, 1],
                translate: ['100px 0', 0],
            },
            {
                duration: 3000,
                easing: 'ease',
                fill: 'forwards',
            }
            );
        }
    });
};
// 監視ロボットの設定
const merits_observer = new IntersectionObserver(showMerits);

const merits_items = document.querySelectorAll('.merit-ex');
console.log(merits_observer);

// .merit-exを監視するよう指示
merits_items.forEach((item) => {
  merits_observer.observe(item);
});