//function for input fields
document.querySelector('.calc__input_box__input')
    .addEventListener("keyup", function()
    {
    this.value = this.value.replace(/[^\d]/g, "");
});

//function green buttons active
let switcher = document.getElementById("switcher");
let btns = switcher.getElementsByClassName("calc__switcher__item");
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}
//function green buttons active right side
let switcher__two = document.getElementById("switcher__two");
let btns__two = switcher__two.getElementsByClassName("calc__switcher__item");
for (let i = 0; i < btns.length; i++) {
    btns__two[i].addEventListener("click", function() {
        let current__two = document.getElementsByClassName("active__two");
        current__two[0].className = current__two[0].className.replace(" active__two", "");
        this.className += " active__two";
    });
}

//function change picture on last child
// let arrow = document.querySelector('.arrow');
// arrow.addEventListener('click',  () => {
// if (arrow.style.backgroundImage == 'url(./assets/img/angle-arrow-down.svg)') {
//     arrow.style.backgroundImage = 'url(./assets/img/angle-arrow-up-white.svg )'
// }
// else {
//
// }
// })

