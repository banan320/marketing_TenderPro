$(document).ready(function () {
  $(".menu__burger").click(function () {
    $(".menu__burger").toggleClass("open-menu");
    $(".header__menu").toggleClass("open-menu");
  });
});
