/*$(".fancybox").fancybox();*/

$(document).ready(function() {

    $(".main-menu-button").click(function () {
        $(".main-menu").slideToggle();
    });
    $(".flex-column").children(".articles").hide();
    $(".flex-column").children("#inf1").show();


    $( "#razdels" ).change(function() {
        $(".flex-column").children(".articles").hide();
        var singleValues = "#"+$("#razdels").val();
        $(singleValues).show();
    });



    $("#single_1").fancybox({
        helpers: {
            title : {
                type : 'float'
            }
        }
    });

    $("#single_2").fancybox({
        openEffect	: 'elastic',
        closeEffect	: 'elastic',

        helpers : {
            title : {
                type : 'inside'
            }
        }
    });

    $("#single_3").fancybox({
        openEffect : 'none',
        closeEffect	: 'none',
        helpers : {
            title : {
                type : 'outside'
            }
        }
    });

    $("#single_4").fancybox({
        helpers : {
            title : {
                type : 'over'
            }
        }
    });
});