const navBar = $("#navbarSupportedContent");
const reviews = $(".reviews-fixed");

reviews.click(function () {
    $(".reviews-fixed").toggleClass("show");
});

document.querySelectorAll(".nav-item")
    .forEach((navItem) => {
        navItem.addEventListener("click", () => {
            if (navBar.hasClass("show")) {
                navBar.removeClass("show")
            }
        })
    })