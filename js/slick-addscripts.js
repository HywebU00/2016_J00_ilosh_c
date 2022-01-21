/*------底圖*/	
$(document).ready(function(){
	
   $('.bigbanner').slick({
  dots: true,
  infinite: true, //無限輪播
  speed: 500,
 fade: true,
  autoplay:true, //自動播放 
  cssEase: 'linear'
  });
  //
  
  $('.cp_photo').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  autoplay:true, //自動播放
  cssEase: 'linear'
});

  //外部連結

  $('.adblock').slick({
  dots:false,
  infinite: true,
  speed: 1000,
  autoplay: true,
  slidesToShow:2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 380,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
	
	
  
});


