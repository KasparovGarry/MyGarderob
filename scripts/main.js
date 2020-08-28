const navBar = $("#navbarSupportedContent");

document.querySelectorAll(".nav-item")
    .forEach((navItem) => {
        navItem.addEventListener("click", () => {
            if (navBar.hasClass("show")) {
                navBar.removeClass("show")
            }
        })
    })


$(window).scroll(function() {
    var scrolledY = $(window).scrollTop();
    $('.fixed-bg').css('background-position', 'left ' + ((scrolledY)) + 'px');
});
