// ヘッダー部分の背景のスライドショー

/* jQueryのプラグインbgSwitherを使う場合
if (document.getElementById('news')) {
  jQuery(function($) {
    $('#news').bgSwitcher({
        images: ['images/news-bg1.jpg', 'images/news-bg2.jpg', 'images/news-bg3.jpg'],
        interval: 3000,
        loop: true,
        effect: 'fade',
        easing: 'linear',
    });
  });
}
*/

$(document).ready(function() {
  let topBg = $('#top-bg');
  // console.log(topBg);
  // topBg.css('color', 'red');
  let urls = [
    'url("D:/デスクトップ/portfolio2/images/news-bg1.jpg")',
    'url("D:/デスクトップ/portfolio2/images/news-bg2.jpg")',
    'url("D:/デスクトップ/portfolio2/images/news-bg3.jpg")'
  ];
  let i = 0;
  topBg.css('backgroundImage', urls[i]);
  let timerId = setInterval(function() {
    if (i < 2) {
      i++;
      topBg.css('backgroundImage', urls[i]);
    } else if (i >= 2) {
      i = 0;
      topBg.css('backgroundImage', urls[i]);
    }
  }, 2000);
});
