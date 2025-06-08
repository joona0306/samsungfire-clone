const footerMenuList = document.querySelectorAll(
  ".footer-top > .inner > ul > li"
);
// console.log(footerMenuList);
const footerSubmenuList = document.querySelectorAll(
  ".footer-top > .inner > ul > li > .submenu"
);
// console.log(footerSubmenuList);

footerMenuList.forEach((menu) => {
  menu.addEventListener("mouseenter", () => {
    footerSubmenuList.forEach((submenu) => {
      submenu.style.display = "block";
    });
    // console.log("enter");
  });
  menu.addEventListener("mouseleave", () => {
    footerSubmenuList.forEach((submenu) => {
      submenu.style.display = "none";
    });
    // console.log("leave");
  });
});
