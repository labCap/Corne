const animItems = document.querySelectorAll(".__anim-items");
const menuBox = document.querySelector(".header__box-menu");
const menuBtn = document.querySelector(".burger");
const body = document.querySelector("body");

menuBtn.addEventListener("click", showMenu);
function showMenu() {
  menuBox.classList.toggle("__active");
  menuBtn.classList.toggle("__active");
  body.classList.toggle("__lock");
}

if (animItems.length > 0) {
  window.addEventListener("scroll", animOnScroll);
  function animOnScroll() {
    for (let i = 0; i < animItems.length; i++) {
      const animItem = animItems[i];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;

      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (
        pageYOffset > animItemOffset - animItemPoint &&
        pageYOffset < animItemOffset + animItemHeight
      ) {
        animItem.classList.add("__active");
      } else {
        if (!animItem.classList.contains("__anim-no-hide")) {
          animItem.classList.remove("__active");
        }
      }
    }
  }

  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }

  setTimeout(() => {
    animOnScroll();
  }, 300);
}
