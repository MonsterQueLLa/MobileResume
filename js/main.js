var m1 = angular.module('myApp',['ngRoute']);
//console.log(m1);

m1.config(['$routeProvider',function($routeProvider){
	
	$routeProvider
		.when('/aaa/:num',{
			templateUrl : 'page1.html',
			controller : 'Aaa'
		})
		.when('/bbb',{
			templateUrl : 'page2.html',
			controller : 'Bbb'
		})
		.when('/ccc',{
			templateUrl : 'page3.html',
			controller : 'Ccc'
		})
		.when('/ddd',{
			templateUrl : 'page4.html',
			controller : 'Ddd'
		})
		.otherwise({
			redirectTo : '/aaa/123'
		});
	
}]);

//初始化全局变量
m1.run(['$rootScope','$location',function($rootScope,$location){
	$rootScope.$on('$routeChangeStart',function(event,current,pre){
//	console.log($location);
//按钮切换控制事件;
//	console.log($location.$$path);
	switch($location.$$path){
		case "/aaa/123":
		$('footer .cftItem').css('color',"null");
		$('footer .cftItem').eq(0).css("color","#007AFF");
		break;
		case '/bbb':
		$('footer .cftItem').css('color',"null");
		$('footer .cftItem').eq(1).css("color","#007AFF");
		break;
		case "/ccc":
		$('footer .cftItem').css('color',"null");
		$('footer .cftItem').eq(2).css("color","#007AFF");
		break;
		case "/ddd":
		$('footer .cftItem').css('color',"null");
		$('footer .cftItem').eq(3).css("color","#007AFF");
		break;
	}
	});
}])

//控件页面1
var listSwiper;
m1.controller('Aaa',['$scope','$location','$routeParams','$http','$timeout',function($scope,$location,$routeParams,$http,$timeout){
	$http.get("data/skill.json").success(function(data){
//		console.log(data)
		$scope.list = data;
	});
	$timeout(function(){
		var mySwiper = new Swiper(".banner",{
			autoplay : 2000,
			loop : true,
			pagination : '.swiper-pagination',
		});
		listSwiper = new Swiper(".list",{
			observer:true,
   			observerParents:true,
 			direction: "vertical",
 			slidesPerView:"auto",
 			spaceBetween:1,
   			freeMode:true,
			lazyLoading : true,
			onTouchEnd:function(swiper){
				//下拉刷新
				if(swiper.translate > 0) {
					$('.list .swiper-wrapper #show').remove();
					var str = "<div class='swiper-slide' id='show'>刷新中...</div>";
					$('.bannerCont').before(str);
					$timeout(function(){
						$('.list .swiper-wrapper #show').remove();
					},2000);
        		}
				 //上拉加载  
                if (swiper.isEnd) {  
                    $('.list .swiper-wrapper #low').remove();
					var str = "<div class='swiper-slide' id='low'>没有更多数据啦</div>";
					$('.list .swiper-wrapper').append(str);
					$timeout(function(){
						$('.list .swiper-wrapper #low').remove();
					},3000);
                }  

			},
			
		});
		
	},10);
		
	$scope.name = 'hello';
	$scope.$location = $location;
}]);

//控件页面2
var proSwiper;
m1.controller('Bbb',['$scope','$location','$routeParams','$http','$timeout',function($scope,$location,$routeParams,$http,$timeout){
	$http.get("data/project.json").success(function(data){
//		console.log(data)
		$scope.list = data;
	});
	$timeout(function(){
		
		proSwiper = new Swiper(".proList",{
			observer:true,
   			observerParents:true,
 			direction: "vertical",
 			slidesPerView:"auto",
 			spaceBetween:1,
   			freeMode:true,
			lazyLoading : true,
			onTouchEnd:function(swiper){
//				console.log(swiper);
				//下拉刷新
				if(swiper.translate > 0) {
					$('.proList .swiper-wrapper #show').remove();
					var str = "<div class='swiper-slide' id='show'>刷新中...</div>";
					$('.proList .swiper-slide').eq(0).before(str);
					$timeout(function(){
						$('.proList .swiper-wrapper #show').remove();
					},2000);
        		}
				 //上拉加载  
                if (swiper.isEnd) {  
                    $('.proList .swiper-wrapper #low').remove();
					var str = "<div class='swiper-slide' id='low'>没有更多数据啦</div>";
					$('.proList .swiper-wrapper').append(str);
					$timeout(function(){
						$('.proList .swiper-wrapper #low').remove();
					},3000);
                }  

			},
			
		});
		
		//一段废代码 获取ProList的绝对top值;
//		var all = document.querySelector('.proList');
//		var all = document.getElementsByClassName('proList')[0];
//		console.log(all);
//		var top = $('.proList>.swiper-wrapper>.item').eq(0).offsetTop;
//		console.log($('.proList>.swiper-wrapper>.item').eq(0));
//		var to = $(all);
//		var top = to.offset().top; 
//		console.log(top);
		
	},10);
		
	$scope.name = 'hello';
	$scope.$location = $location;
}]);

//控件页面3
m1.controller('Ccc',['$scope',function($scope){
	
	$scope.name = '你好';
}]);
//控件页面4
m1.controller('Ddd',['$scope',function($scope){
	
	$scope.name = 'Jesen';
}]);





