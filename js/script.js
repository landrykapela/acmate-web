const menuBut = document.getElementById("menu_but");
const menu = document.getElementById("menu_nav");
if (menuBut) {
  menuBut.addEventListener("click", () => {
    console.log("clicked " + menuBut.textContent);
    if (menuBut.textContent == "menu") {
      menuBut.textContent = "close";
      menu.classList.add("stretch");
      menu.classList.remove("hidden");
    } else {
      menuBut.textContent = "menu";
      menu.classList.remove("stretch");
      menu.classList.add("hidden");
    }
  });
}
