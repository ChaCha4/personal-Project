// 根据屏幕的宽度和设计高的尺寸动态设置html 的font-size 以下设计稿的尺寸为375 3.75rem相当于屏幕的宽度
// 所有的(width margin padding font-size )根据设计稿上面量好的尺寸直接除以 100 + 单位 rem 即可
document.documentElement.style.fontSize =
  document.documentElement.clientWidth / 3.75 + "px";
$(document).ready(function() {
  var mySwiper1 = new Swiper("#swiper1", {
    direction: "horizontal", // 水平切换选项
    loop: true, // 循环模式选项
    autoplay: {
      delay: 3000,
      stopOnLastSlide: false,
      disableOnInteraction: true
    }, //自动播放
    // 如果需要分页器
    pagination: {
      el: ".swiper-pagination"
    }
  });
  var mySwiper2 = new Swiper("#swiper2", {
    direction: "horizontal", // 水平切换选项
    loop: true, // 循环模式选项
    freeMode: true, //不会回弹
    slidesPerView: 2.5,
    spaceBetween: 2
    // spaceBetween: 12
  });
  var mySwiper3 = new Swiper("#swiper3", {
    direction: "vertical", // 垂直切换选项
    loop: false, // 循环模式选项
    freeMode: true, //不会回弹
    slidesPerView: 5.2,
    spaceBetween: 2
    // spaceBetween: 12
  });
});
