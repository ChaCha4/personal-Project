// 根据屏幕的宽度和设计高的尺寸动态设置html 的font-size 以下设计稿的尺寸为375 3.75rem相当于屏幕的宽度
// 所有的(width margin padding font-size )根据设计稿上面量好的尺寸直接除以 100 + 单位 rem 即可
document.documentElement.style.fontSize =
  document.documentElement.clientWidth / 3.75 + "px";
$(document).ready(function() {
  var mySwiper = new Swiper(".swiper-container", {
    direction: "horizontal", // 水平切换选项
    loop: false, // 循环模式选项

    // 如果需要分页器
    pagination: {
      el: ".swiper-pagination"
    }
  });
  // // 当滑到启动页和登录页的时候移出分页器那个元素
  // console.log(mySwiper.pagination.bullets[]);
});
