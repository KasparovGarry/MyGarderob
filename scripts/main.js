const navBar = $("#navbarSupportedContent");

document.querySelectorAll(".nav-item")
    .forEach((navItem) => {
        navItem.addEventListener("click", () => {
            if (navBar.hasClass("show")) {
                navBar.removeClass("show")
            }
        })
    })
