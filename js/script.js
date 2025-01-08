
/* main_visual 스와이퍼 호출 */
var main_visual = new Swiper("#main_visual",{  // new = 새로운 객체 생성
  wrapperClass: "slider",
  slideClass: "view",
  slideActiveClass: "active",
  spaceBetween: 10,
  speed: 1000,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: '.pager',
    clickable: true,
    bulletActiveClass: "active",
  },
});
