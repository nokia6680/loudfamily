var menuShow = document.querySelector(".intro__controls");
var openButton = document.querySelectorAll(".intro__opener");
var menuList = document.querySelector(".header");
var closeButton = document.querySelector(".intro__closer");
var contentWrap = document.querySelector(".content");

if (menuShow) {
  for (var i = 0; i < openButton.length; i++) openButton[i].addEventListener("click", function(event) {
    event.preventDefault();
    menuShow.classList.add("intro__controls--active");
    menuList.classList.add("header--active");
    closeButton.classList.add("intro__closer--active");
    contentWrap.classList.add("content--active");
  });

  menuShow.addEventListener("click", function(event) {
    event.stopPropagation();
  });

  menuList.addEventListener("click", function(event) {
    event.stopPropagation();
  });

  menuShow.addEventListener("click", function(event) {
    menuShow.classList.remove("intro__controls--active");
    menuList.classList.remove("header--active");
    contentWrap.classList.remove("content--active");
  })

  menuList.addEventListener("click", function(event) {
    menuShow.classList.remove("intro__controls--active");
    menuList.classList.remove("header--active");
    contentWrap.classList.remove("content--active");
  })

  closeButton.addEventListener("click", function() {
    menuShow.classList.remove("intro__controls--active");
    contentWrap.classList.remove("content--active");
    menuList.classList.remove("header--active");
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      menuShow.classList.remove("intro__controls--active");
      contentWrap.classList.remove("content--active");
      menuList.classList.remove("header--active");
    }
  });
}
