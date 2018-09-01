/*这一部分是自适应使用rem
  当屏幕大于640时，Html为font-size:100px 6.4rem=640px
  */
 (function (doc,win) {
    var docEl =doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' :'resize',
    recalc = function() {
        var clientWidth = docEl.clientWidth;
        if (!clientWidth) return;
        if (clientWidth >= 640  /*640*/) {
            docEl.style.fontSize = '100px';
        } else {
            /*当屏幕小于640px时 屏幕自适应为当前屏幕大小*/
            docEl.style.fontSize = 100 * (clientWidth / 640 /* 640 */) + 'px';
        }
    };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt,recalc,false);
    doc.addEventListener('DOMContentLoaded',recalc,false);
    recalc();
})(document,window);

/*音视频*/
var startAndPauseBtn = document.getElementById('playBtn003');
var playVideo = document.getElementById('myVideo');

startAndPauseBtn.onclick = function () {
    if (playVideo.paused || playVideo.ended) {
        playVideo.play();
        $("#playBtn003").removeClass("play").addClass("pause");
    } else {
        playVideo.pause();
        $("#playBtn003").removeClass("pause").addClass("play");
    }
}