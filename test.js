let form = document.querySelector("form");
form.addEventListener("submit", function(evt) {
    evt.preventDefault();
    getValue();
});

function getValue() {
    let array = document.getElementsByName("test");
    console.log(array);
    for (let item = 0; item < array.length; item++) {
        if (array[item].checked) {
            localStorage.setItem("radiobuttons", array[++item].value);
            console.log(array[item].value);
            break;
        }
    }
}

document.addEventListener("DOMContentLoaded", function(event) {
    let array = document.getElementsByName("test");    
    let checked = localStorage.getItem("radiobuttons");
    console.log(checked);
    array[--checked].checked = true;

});