document.querySelector('.calc__input_box__input')
    .addEventListener("keyup", function()
    {
    this.value = this.value.replace(/[^\d]/g, "");
});