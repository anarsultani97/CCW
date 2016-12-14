$(document).ready(function () {
    $(window).load(function () {
        $("#all").show();
        $(".se-pre-con").fadeOut("slow");
    });
});
$(document).ready(function () {
    $(".nav li a").click(function (event) {
        event.preventDefault();
        var element = $(this).attr('href');
        var top = $("" + element + "").offset().top;
        var scroll = top - $(".nav").height()
        $('html,body').animate({
            scrollTop: scroll
        }, 1100)
    })
});
$(document).scroll(function () {
    if ($(window).scrollTop() > $("#home2").offset().top / 3) {
        $(".text-holder").css({
            transform: "translate(0,0)"
            , transition: " all 1.2s ease-out"
            , opacity: 1
        })
    }
})
$(document).scroll(function () {
    if ($(window).scrollTop() > $(".footer").offset().top / 1.06) {
        $(".end66").css({
            
            transition: " all 0.8s linear",
            opacity: 1
        })
    }
})
$(window).scroll(function() {
    if ($(this).scrollTop() >= 200) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn("slow");    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut("slow");   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});

$(document).scroll(function () {
    if ($(window).scrollTop() > $("#home3").offset().top / 1.3) {
        $('.timer').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 3000
                , easing: 'swing'
                , step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    }
});
$(document).scroll(function () {
    if ($(window).scrollTop() > $("#services2").offset().top / 1.1) {
        $(".photo").css({
            transform: "translate(0,0)"
            , transition: " all 1.2s ease-out"
            , opacity: 1
        })
    }
})
$(function () {
    $(".owl-wrapper").draggable({
        axis: "x"
        , grid: [583, 0]
        , opacity: 0.9
    });
});