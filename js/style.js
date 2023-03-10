// slick slider
$(document).ready(function () {
    $('.banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        dots: true,
        infinite: true,
        fade: true,
        cssEase: 'linear'
    });
})

$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1');
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });

let reSize = document.getElementById('website').clientWidth
console.log(reSize)
$(document).ready(function () {
    $(window).resize(function () {
        reSize = document.getElementById('website').clientWidth
        click(reSize)
        if (reSize > 520)
            document.getElementById('navbar').style.display = 'flex'
        else
            document.getElementById('navbar').style.display = 'none'
    })
})

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $('header').addClass('menu-scroll');
            if (reSize > 520)
                $('.navbar a').css('color', '#000')

            $('#toggle').css('color', '#000')
        }
        else {
            $('header').removeClass('menu-scroll');
            $('#toggle').css('color', '#fff')
            if (reSize > 520)
                $('.navbar a').css('color', '#fff')
            else
                $('.navbar a').css('color', '#000')

        }
    })
})

// phone
$(document).ready(function () {
    $('#toggle').click(function () {
        $('.navbar').slideToggle()
        
    })
})

$(document).ready(function() {
    $('#toggle').click(function() {
        if(document.getElementById('menu').value != 0) {
            $('header').addClass('menu-scroll');
            $('#toggle').css('color', '#000')
            $('.navbar a').css('color', '#000')
            $('#menu').value = '1'
        }else {
            $('header').removeClass('menu-scroll');
            $('#toggle').css('color', '#fff')
            $('.navbar a').css('color', '#fff')
            $('#menu').value = '0'
        }
    })
})

function click(reSize) {
    $(document).ready(function () {
        if (reSize <= 520) {
            $('.navbar li').click(function () {
                document.getElementById('navbar').style.display = 'none'
            })
        }
        else {
            $('.navbar li').click(function () {
                document.getElementById('navbar').style.display = 'flex'
            })
        }
    })
}
click(reSize)

$(document).ready(function () {
    function activeTab(ojb) {
        $('.navbar .li').removeClass('active')

        $(ojb).addClass('active')

        let id = $(ojb).find('a').attr('href')

        $('.body').hide();

        $(id).show()
    }

    $('.navbar .li').click(function () {
        activeTab(this)
        return false
    })

    activeTab($('.navbar .li:first-child'))
})