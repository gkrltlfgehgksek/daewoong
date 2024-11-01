window.addEventListener("load",function(){
//메인 배너 슬라이드 영역
const swiper1 = new Swiper('#main_banner', {
    // Optional parameters
    autoplay: {//자동슬라이드 (false-비활성화
        delay: 5000, // 시간 설정          
       },
        loop : false,// 슬라이드 반복 여부
        loopAdditionalSlides : 1,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });


//프로덕트 제품 슬라이드 영역
const swiper2 = new Swiper('#p_j', {
    // Optional parameters
    autoplay: {
        delay: 5000, // 시간 설정          
       },
    slidesPerView: 4, //슬라이드 제품수
        
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });


});//end:window.addE.....