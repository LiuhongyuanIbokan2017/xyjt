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
			
				$('.advertise_list').find('li').each(function(){
					$(this).click(function(){
					
						if($(this).find('.advertise_list_detail').css('display')=='none'){
							
							
							$(this).find('.advertise_list_detail').stop(true,true).slideDown(1000);
							$(this).siblings().find('.advertise_list_detail').stop(true,true).slideUp(1000);
							$(this).find('img').prop('src','img/advertise_list_open.png');
							$(this).siblings().find('img').prop('src','img/advertise_list_close.png');
						}else{
							
							
							$(this).find('.advertise_list_detail').stop(true,true).slideUp(1000);
							
							$(this).find('img').prop('src','img/advertise_list_close.png');
							$(this).siblings().find('img').prop('src','img/advertise_list_open.png');
						}
					
					})
				})
			// 百度地图API功能
	function mapapi(Lng,Lat){
		var map = new BMap.Map("allmap");
		var point = new BMap.Point(Lng,Lat);
		var marker = new BMap.Marker(point); 
		map.addOverlay(marker); 
		map.centerAndZoom(point, 15);
		var opts = {
		  width : 200, 
		  height: 100,
		  title : "海底捞王府井店" ,
		}
		var infoWindow = new BMap.InfoWindow("地址：北京市东城区王府井大街88号乐天银泰百货八层", opts);     
		map.openInfoWindow(infoWindow,point); 
		var top_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT,offset: new BMap.Size(10, 70)});
		var top_left_navigation = new BMap.NavigationControl({offset: new BMap.Size(10, 110)}); 
		var top_right_navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL,offset: new BMap.Size(10, 110)});
		var mapType1 = new BMap.MapTypeControl({mapTypes: [BMAP_NORMAL_MAP,BMAP_HYBRID_MAP]});
		var mapType2 = new BMap.MapTypeControl({anchor: BMAP_ANCHOR_TOP_LEFT});
		var overView = new BMap.OverviewMapControl();
		var overViewOpen = new BMap.OverviewMapControl({isOpen:true, anchor: BMAP_ANCHOR_BOTTOM_RIGHT});
			map.addControl(top_left_control);        
			map.addControl(top_left_navigation);     
			map.addControl(top_right_navigation);    
			map.addControl(mapType1);          
			map.addControl(mapType2);          
			map.setCurrentCity("北京");        //由于有3D图，需要设置城市哦
			map.addControl(overView);         
			map.addControl(overViewOpen);      
	}
	
	$(function(){
	
		$('#banner').find('.yjdh').each(function(index){
			$(this).click(function(){
				console.log($(this).siblings());
		
			var Lng=116.417854;
			var Lat=39.921988;
			
			
			
			if($(this).siblings().css('display')=='none'){
				$(this).siblings().stop(true,true).fadeIn(1000);
				mapapi(Lng,Lat);
			}else{
				$(this).siblings().stop(true,true).fadeOut(1000);
			}
		})
		})
		
	})
			
	
})

