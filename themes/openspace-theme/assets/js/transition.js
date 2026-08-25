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

const elements = document.querySelectorAll('.submenu-btn');

elements.forEach((el) => {
    // alert(el.id);
    el.addEventListener('mouseover', onSubmenuMouseOver);
});

// changeOpenSubmenuTo(elements[0].id);

// document.querySelector('nav').addEventListener('mouseout', function() { changeOpenSubmenuTo(elements[0].id) });
// switches back to the main section on mouse leave
