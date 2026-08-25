(() => {
  // <stdin>
  function changeOpenSubmenuTo(id) {
    if (id === "") return;
    let btns = document.getElementsByClassName("submenu-btn");
    let divs = document.getElementsByClassName("submenu");
    for (let i = 0; i < 4; i++) {
      btns[i].classList.remove("hidden");
      divs[i].classList.add("hidden");
    }
    let divId = id + "-menu";
    document.getElementById(id).classList.add("hidden");
    document.getElementById(divId).classList.remove("hidden");
  }
  console.warn("transition.js successfully loaded");
  var submenuBtnLock = false;
  function onSubmenuMouseOver(e) {
    const id = e.target.id;
    console.log(id);
    if (submenuBtnLock === true) return;
    changeOpenSubmenuTo(id);
    submenuBtnLock = true;
    setTimeout(() => {
      submenuBtnLock = false;
    }, 100);
  }
  var elements = document.querySelectorAll(".submenu-btn");
  elements.forEach((el) => {
    el.addEventListener("mouseover", onSubmenuMouseOver);
  });
})();
//# sourceMappingURL=transition.js.map
