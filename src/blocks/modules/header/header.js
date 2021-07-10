const header = document.querySelector(".header");

if (header) {
  const links = header.querySelectorAll(".header__link");
  const items = header.querySelectorAll(".header__item");
  const burgerBtn = header.querySelector(".header__nav-button");
  const navWrapper = header.querySelector(".header__inner-wrap");
  const body = document.querySelector("body");
  const anchors = header.querySelectorAll(".header__link");

  const closeActive = () => {
    items.forEach((item) => {
      item.classList.remove("header__item_active");
    });
  };

  links.forEach((link) =>
    link.addEventListener("click", (event) => {
      event.stopPropagation();
      const closestItem = link.closest(".header__item");
      if (!closestItem.classList.contains("header__item_active")) {
        closeActive();
        closestItem.classList.add("header__item_active");
      }
    })
  );

  anchors.forEach((anchor) =>
    anchor.addEventListener("click", (e) => {
      e.preventDefault();

      var href = anchor.getAttribute("href");
      var elem =
        document.querySelector(href) ||
        document.querySelector(
          "a[name=" + href.substring(1, href.length) + "]"
        );

      window.scroll({
        top: elem.offsetTop,
        left: 0,
        behavior: "smooth",
      });
    })
  );

  // burgerBtn.addEventListener("click", () => {
  //   navWrapper.classList.toggle("header__inner-wrap_opened");
  //   burgerBtn.classList.toggle("header__nav-button_cross");
  //   body.classList.toggle("no-scroll");
  // });
}
