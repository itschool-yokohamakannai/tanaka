// news.html の .post-title に対するアニメーション追加
// 監視対象が範囲内に現れたら実行する動作
const showPostTitle = function (entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.animate(
            {
                color: ['transparent', 'black'],
                translate: ['80px 0', 0],
            },
            {
                duration: 2000,
                easing: 'ease',
            }
            );
        }
    });
};
// 監視ロボットの設定
const postTitle_observer = new IntersectionObserver(showPostTitle);
const post_titles = document.querySelectorAll('.post-title');
// .post-titleを監視するよう指示
post_titles.forEach((item) => {
    postTitle_observer.observe(item);
});

// news.htmlの id="second-section" 部分のJavaScript
$(function(){
    $('.process-detail').hover(
        function(){
            // $('.process-detail').css('background-color', 'red');
            $(this).css('background-image', 'url("' + 'images/process-detail.jpeg' + '")').css('background-position', 'center').css('background-repeat', 'no-repeat');
            $(this).text('手続きを開始しますか？');
            $(this).css('color', 'blue').css('font-weight', 'bold');
        },
        function(){
            $(this).css('background-image', 'none');
            $(this).text('テキストテキスト');
            $(this).css('color', 'black').css('font-weight', 'normal');
        }
    );
});

/* 別バージョン
let elements = document.getElementsByClassName("process-detail");

const mymouseover = function (e) {
    let elem = e.target;
    elem.style.color = "white";
    elem.style.backgroundColor = "gray";
};

const mymouseleave = function (e) {
    let elem = e.target;
    elem.style.color = "black";
    elem.style.backgroundColor = "white";
};

for (let i = 0; i < elements.length; i++) {
    elements[i].onmouseover = mymouseover;
    elements[i].onmouseleave = mymouseleave;
}
*/

// news.htmlの id="third-section" のスライドショー
const activity_src = ['images/activity-1.jpg', 'images/activity-2.jpg', 'images/activity-3.jpg'];
let timer = NaN;
let num = -1;

function slideshow () {
    if (num == 2) {
        num = 0;
    } else {
        num++;
    }
    document.getElementById('activity').src = activity_src[num];
};

timer = setInterval(slideshow, 2000);


// news.htmlの「TOPに戻る」ボタンのコード
$(document).ready(function() {
    let pagetop = $('#page-top');
    pagetop.hide();
    $(window).scroll(function() {
        // console.log($(this).scrollTop());
        if ($(this).scrollTop() > 300) {
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function() {
        $('body, html').animate(
            {
            scrollTop: 0,
            },
            {
            duration: 800,
            }
        );
        return false; 
    });
});