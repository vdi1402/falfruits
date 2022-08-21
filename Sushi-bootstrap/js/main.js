let nav = document.querySelector(".navbar");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 50) {
    nav.classList.add("header-scroll");
    console.log("hello dvo");
  } else {
    nav.classList.remove("header-scroll");
  }
};
