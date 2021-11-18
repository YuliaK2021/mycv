/* the Modal is taken from here: https://www.w3schools.com/howto/howto_css_modals.asp  */
var modal = document.getElementById("address-modal");
var btn = document.getElementById("contact-button");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}