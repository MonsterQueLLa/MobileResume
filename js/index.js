var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationType: 'progress',
        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
            swiperAnimateCache(swiper); //隐藏动画元素 
            swiperAnimate(swiper); //初始化完成开始动画
          }, 
      onSlideChangeEnd: function(swiper){ 
        swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
        $('p').removeClass("rotate");
        if(swiper.activeIndex==3){
            $('p').addClass('rotate');
            console.log(swiper.activeIndex);
        };
        
       	$('.page3 .change').eq(0).removeClass("progress0");
       	$('.page3 .change').eq(1).removeClass("progress1");
       	$('.page3 .change').eq(2).removeClass("progress2");
       	$('.page3 .change').eq(3).removeClass("progress3");
       	$('.page3 .change').eq(4).removeClass("progress4");
       	$('.page3 .change').eq(5).removeClass("progress5");
       	$('.page3 .change').eq(6).removeClass("progress6");
       	$('.page3 .change').eq(7).removeClass("progress7");
        if(swiper.activeIndex==2){
            $('.page3 .change').eq(0).addClass('progress0');
            $('.page3 .change').eq(1).addClass('progress1');
            $('.page3 .change').eq(2).addClass('progress2');
            $('.page3 .change').eq(3).addClass('progress3');
            $('.page3 .change').eq(4).addClass('progress4');
            $('.page3 .change').eq(5).addClass('progress5');
            $('.page3 .change').eq(6).addClass('progress6');
            $('.page3 .change').eq(7).addClass('progress7');
            console.log(swiper.activeIndex);
        }
        
      },

});