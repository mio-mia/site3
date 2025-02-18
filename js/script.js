
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


/* press 스와이퍼 호출 */
var press = new Swiper("#press .inner",{
  wrapperClass: "slider",
  slideClass: "item",
  slidesPerView: 1,   // 최소형태
  spaceBetween: 10,   // 최소형태
  breakpoints:{
    // 화면의 너비가 320px 이상 적용
    320:{slidesPerView: 2, spaceBetween: 20},
    // 화면의 너비가 640px 이상 적용
    640:{slidesPerView: 3, spaceBetween: 30},
    // 화면의 너비가 768px 이상 적용
    768:{slidesPerView: 4, spaceBetween: 40},
    // 화면의 너비가 1024px 이상 적용
    1024:{slidesPerView: 5, spaceBetween: 30},
  },
  pagination: {
    el: '.dot',
    clickable: true,
    bulletActiveClass: "active",
  },
});



/* 상품검색영역 스크립트 */
var search = document.getElementById("search");
  // ㄴ> Document.getElementById()
  //     = () 안에 해당 문자열과 일치하는 id 요소를 찾아 객체화함
  //     = html에 있는 #search를 js의 여러 변수(속성)과 함수(메소드)를 가질 수 있는 객체로 취급하겠다

function open_search(){
  search.classList.add("show");
  // ㄴ> search라는 객체에 classList라는 객체를 추가하고 그 안에 show라는 클래스를 추가함
};

function close_search(){
  search.classList.remove("show");
  // ㄴ> search라는 객체에 classList라는 객체를 찾고 그 안에 show라는 클래스를 지움
};

// ㄴ> 이런 종류의 스크립트를 사용하려면 html에서 내가 이 내용을 사용할 요소에 a 태그를 사용해서
//     연결해줘야됨 (무작정 css로 해결한다고 생각하지 말고 html도 좀 보세요 제발)



/* 모바일 사이즈 menu 스크립트 */
var menu = document.querySelector(".menu");
  // ㄴ> Document.querySelector()
  //     = () 안에 해당 코드와 일치하는 요소 중 첫번째 요소를 반환하여 객체화함
  //     = html에 있는 .menu 중 첫번째 .menu를 js의 여러 변수(속성)과 함수(메소드)를
  //       가질 수 있는 객체로 취급하겠다

function open_menu(btn){    // btn = 클릭된 버튼요소
  menu.classList.toggle("active");
  // ㄴ> classList.toggle(); = () 안에 지정한 클래스가 없으면 추가, 있으면 제거[class에만 적용]
  btn.classList.toggle("active");
};
