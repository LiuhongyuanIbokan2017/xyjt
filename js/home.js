	$(function(){
			var posX=$(window).width()/2-$('#box').width()/2;
			var posY=$(window).height()/2-$('#box').height()/2;
			var posXX=$(window).width()/2-$('.logopic').width()/2;
			var posYY=$(window).height()/2-$('.logopic').height()/2;
			console.log(posX);
			console.log(posY);
			$('#box').css({
					'left':posX+'px',
					'top':posY+'px'
			});
				$('.logopic').css({
					'left':posXX+'px',
					'top':posYY+'px'
			});
			$(window).resize(function(){
					var posX=$(window).width()/2-$('#box').width()/2;
				var posY=$(window).height()/2-$('#box').height()/2;
				var posXX=$(window).width()/2-$('.logopic').width()/2;
				var posYY=$(window).height()/2-$('.logopic').height()/2;
				console.log(posX);
				console.log(posY);
				$('#box').css({
						'left':posX+'px',
						'top':posY+'px'
				});
					$('.logopic').css({
						'left':posXX+'px',
						'top':posYY+'px'
				});
			})
			console.log($('#box').css('left'));
			console.log($('#box').css('top'));
			function autopic(){
				$('.bg1').fadeIn(1000,function(){
					$('.bg1').delay(1000).fadeOut(1000,function(){
						$('.bg2').fadeIn(1000,function(){
							$('.bg2').delay(1000).fadeOut(1000,autopic);
								})
							});
						})
				}
				autopic();	
	
		$('.home_txt_cover').fadeIn(1000);
		$('.section2').find('span').delay(4000).fadeIn(3000);
		$('.picdrag').each(function(index){
			$(this).bind("mouseenter", function () {
					$('.home_cover').eq(index).css({
						top:$('.home_pic_cover').eq(index).css("top"),
						left:$('.home_pic_cover').eq(index).css("left")
					})
					$('.home_text_cover').eq(index).stop(true,false).animate({
						opacity:0
					},1000);
					$('.home_cover').eq(index).stop(true,false).animate({width:'223px'},1000);
					$('.home_cover').eq(index).siblings().stop(true,false).animate({width:'0px'},1000);
					$('.home_txt_cover').stop(true,false).fadeIn();
					
					console.log($('.home_cover').css("top"));
                 })
                 .bind("mouseleave", function () {
                 	$('.home_text_cover').eq(index).stop(true,false).animate({
						opacity:1
					},1000);
                   
					$('.home_cover').stop(true,false).animate({width:'0px'},1000);
						$('.home_txt_cover').stop(true,false).fadeOut();
                  })

		});
		$('.morebtn').hover(function(){
			$(this).addClass("animated shake");
		},function(){
			$(this).removeClass("animated shake");
		})
		$('.uls li').hover(function(){
			$(this).find('.secondDiv').stop(true,true).slideDown(500);
		},function(){
			$(this).find('.secondDiv').stop(true,true).slideUp(500);
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
				backgroundColor:'#fafafa'
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
		})
	})

