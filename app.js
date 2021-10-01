const burger = document.getElementById("burger");
const cross = document.getElementById("cross");
const li_elements = document.querySelectorAll(".menu-list li");
const menu_list = document.querySelector(".mobile-design");

burger.addEventListener("click", () => {
  menu_list.classList.toggle("menu-list");

  if (burger.src.match("./images/icon-hamburger.svg")) {
    burger.src = "./images/icon-close.svg";
  } else {
    burger.src = "./images/icon-hamburger.svg";
  }
});

$("#home").click(function () {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $("header").offset().top,
    },
    1000
  );
});

$("#about").click(function () {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $("main").offset().top,
    },
    1000
  );
});

$("#contact").click(function () {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $("footer").offset().top,
    },
    1000
  );
});

$("#blog").click(function () {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $("main .articles").offset().top,
    },
    1000
  );
});
