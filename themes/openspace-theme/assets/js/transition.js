function changeOpenSubmenuTo(id) {
    if (id === "") return;

    let btns = document.getElementsByClassName('submenu-btn');
    let divs = document.getElementsByClassName('submenu');

    for (let i = 0; i < 4; i++) {
        btns[i].classList.remove('hidden');
        divs[i].classList.add('hidden');
    }

    let divId = id + "-menu"
    document.getElementById(id).classList.add('hidden');
    document.getElementById(divId).classList.remove('hidden');
}

console.warn("transition.js successfully loaded");

let submenuBtnLock = false;
const timeoutMs = 200;

function onSubmenuMouseOver(e) {
    const id = e.target.id;
    console.log(id);

    if (submenuBtnLock === true) return;
    changeOpenSubmenuTo(id);
    submenuBtnLock = true;
    setTimeout(() => { submenuBtnLock = false; }, 100);
}

document.querySelectorAll('.submenu-btn').forEach((el) => {
    // alert(el.id);
    el.addEventListener('mouseover', onSubmenuMouseOver);
});
