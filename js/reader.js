$(document).ready(function() {


	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	var owl = $(".owl-carousel");

        owl.owlCarousel({
            loop:true, //Зацикливаем слайдер
            margin:10, //Отступ от картино если выводите больше 1
            nav:false, //Отключил навигацию
            autoplay:false, //Автозапуск слайдера
            smartSpeed:1000, //Время движения слайда
            autoplayTimeout:5000, //Время смены слайда
			autoWidth:true,
			autoHeight:false,
			//merge:true,
			responsive:{ //Адаптация в зависимости от разрешения экрана
                0:{
                    items:1

                },
                800:{
                    items:3,
					mergeFit:true
                }

            }

        });




	owl.on("mousewheel", ".owl-wrapper", function (e) {
		if (e.deltaY > 0) {
			owl.trigger("owl.prev");
		} else {
			owl.trigger("owl.next");
		}
		e.preventDefault();
	});
	$(".next_button").click(function(){
		owl.trigger("owl.next");
	});
	$(".prev_button").click(function(){
		owl.trigger("owl.prev");
	});

	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("form").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});


    $(document).refresh();

});