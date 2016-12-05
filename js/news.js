	$(function(){
			$('.home_screen_box').find('.home_screen_3_title_bg').delay(500).fadeIn(1000);
				$('#bottom_company').delay(500).fadeIn(1000);
		$('.home_txt_cover').fadeIn(1000);
		
		$('.morebtn').hover(function(){
			$(this).addClass("animated shake");
		},function(){
			$(this).removeClass("animated shake");
	})

			$('.uls li').hover(function(){
			$(this).find('.secondDiv').stop(true,true).slideDown(500);
		},function(){
			$(this).find('.secondDiv').delay(1000).slideUp(500);
		})

		
		$('.uls li').find('a').hover(function(){
			$(this).stop(true,true).animate({
				color:'white'
				
			},1000);
		},function(){
			$(this).stop(true,true).animate({
				color:'black'
			},1000);
		})
		$('.uls li').hover(function(){
			$(this).stop(true,true).animate({
				backgroundColor:'red'
				
			},1000);
		},function(){
			$(this).stop(true,true).animate({
				backgroundColor:'white'
			},1000);
		})
			$('.secondDiv').find('a').hover(function(){
			$(this).stop(true,true).animate({
				color:'white',
				backgroundColor:'red'
			},1000);
		},function(){
			$(this).stop(true,true).animate({
				color:'black',
				backgroundColor:'rgba(209,214,219,0.2)'

			},1000);

		
	});
			$(window).scroll(function(){
				// console.log($(window).scrollTop());
				// console.log($(window).height());
				if($(window).scrollTop()>$(window).height()/2){
					$('.backtop').fadeIn(1000);
				}
				else{
					$('.backtop').fadeOut(1000);
				}
				
			})
			$('.backtop').click(function(){
					
				$('body,html').animate({'scrollTop':0},1000);
			})
	
			$('.culture_corner_red').click(function(){
				
				$(this).parent().find('.banner_content_pic').stop(true,false).slideDown(1000);
				$(this).parent().find('.culture_corner_red').stop(true,false).fadeOut(1000);
				$(this).parent().find('.culture_corner_gray').stop(true,false).fadeIn(1000);
			})
			$('.culture_corner_gray').click(function(){
				
				$(this).parent().find('.banner_content_pic').stop(true,false).slideUp(1000);
				$(this).parent().find('.culture_corner_red').stop(true,false).fadeIn(1000);
				$(this).parent().find('.culture_corner_gray').stop(true,false).fadeOut(1000);
			})
				
			$('#page').find('li').each(function(index){
				$(this).click(function(){
					$(this).stop(true,false).animate({
						backgroundColor:'red'
					},1000);
					$(this).siblings().stop(true,false).animate({
						backgroundColor:'rgba(0,0,0,0)'
					},1000);
					$(this).find('a').stop(true,false).animate({
						color:'white'
					},1000);
					$(this).siblings().find('a').stop(true,false).animate({
						color:'black'
					},1000);
				})
			})	
				
	
		
})

