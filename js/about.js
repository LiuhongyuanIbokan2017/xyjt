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
			$(this).find('.secondDiv').stop(true,false).slideDown(500);
			$(this).stop(true,true).animate({
				backgroundColor:'red'
				
			},1000);
		},function(){
			$(this).find('.secondDiv').delay(1000).slideUp(500);

			$(this).stop(true,true).animate({
				backgroundColor:'white'
			},1000);
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
				if($(window).scrollTop()>$(window).height()){
					$('.backtop').fadeIn(1000);
				}
				else{
					$('.backtop').fadeOut(1000);
				}
				
			})
$('.backtop').click(function(){
					
					$('body,html').animate({'scrollTop':0},1000);
				})
		})

