const burger = document.querySelector('.burger');
const navigation = document.querySelector('.header__navigation')
const overlay = document.querySelector('.header__overlay') 
const cross = document.querySelector('.header__cross')


function openMenu() {
  navigation.classList.add('active');
  overlay.classList.add('active');
}

function closeMenu() {
  navigation.classList.remove('active');
  overlay.classList.remove('active');
}

document.addEventListener('keydown', (e) => {
    if(e.key === "Escape") {
       closeMenu();
    }
})

document.addEventListener('click', (e) => {
    if (!navigation.contains(e.target) && !burger.contains(e.target)) {
       closeMenu();
    }

    if (burger.contains(e.target)) {
        openMenu();
    }

     if (cross.contains(e.target)) {
        closeMenu();
    }
})