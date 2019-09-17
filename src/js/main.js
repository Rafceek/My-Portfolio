// type effect 

var typed = new Typed('#hello', {
    strings: ["{hello}.", "{witaj}.", "{bonjour}.", "{hallo}.", "{привет}.", "{hola}."],
    typeSpeed: 65,
    backSpeed: 35,
    backDelay: 1200,
    loop: true,
    showCursor: false,
});

//hamburger menu & navigation 

let burger = document.querySelector("#burger");
let navi = document.querySelector("#navi");

burger.addEventListener('click', function () {
    burger.classList.toggle('active');
    navi.classList.toggle('active');
})

// Arrow hover 

const seeMore = document.querySelector("#see-more");
const arrow = document.querySelector("#arrow");

const showText = () => {
    seeMore.textContent = "thanks!";
    seeMore.style.color = "rgba(148, 215, 224, 0.822)";
}
const hideText = () => {
    seeMore.textContent = "see more";
    seeMore.style.color = "rgb(230, 75, 201)";
}
arrow.addEventListener("mouseover", showText);
arrow.addEventListener("mouseout", hideText);

// Arrow function - scroll down

$("#arrow").on("click", function () {
    $("body,html").animate({
        scrollTop: $("#about-me").offset().top
    }, 600)
})

// scroll to top function 

$(window).scroll(function () {
    const height = $(window).scrollTop();
    if (height > 500) {
        $('#up-to-top').fadeIn();
    } else {
        $('#up-to-top').fadeOut();
    }
});
$(document).ready(function () {
    $("#up-to-top").click(function (event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
});


//scrolling to headings

$('#link1, #link2, #link3, #link4, #link5').click(function (e) {
    e.preventDefault();
    if ($(e.target).attr('id') === 'link1') {
        $('html,body').animate({
            'scrollTop': $('#about-me').offset().top
        }, 1000);
        $('#burger').toggleClass('active');
        $('#navi').toggleClass('active');
    } else if ($(e.target).attr('id') === 'link2') {
        $('html,body').animate({
            'scrollTop': $('#skills').offset().top
        }, 900);
        $('#burger').toggleClass('active');
        $('#navi').toggleClass('active');
    } else if ($(e.target).attr('id') === 'link3') {
        $('html,body').animate({
            'scrollTop': $('#projects').offset().top
        }, 800);
        $('#burger').toggleClass('active');
        $('#navi').toggleClass('active');
    } else if ($(e.target).attr('id') === 'link4') {
        $('html,body').animate({
            'scrollTop': $('#contact').offset().top
        }, 700);
        $('#burger').toggleClass('active');
        $('#navi').toggleClass('active');
    } else if ($(e.target).attr('id') === 'link5') {
        $('html,body').animate({
            'scrollTop': $('#socials').offset().top
        }, 700);
        $('#burger').toggleClass('active');
        $('#navi').toggleClass('active');
    }
});