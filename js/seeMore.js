/*the Modal is taken from here:  https://www.w3schools.com/howto/howto_js_read_more.asp  */
function seeMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("see-more");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "see more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "see less";
        moreText.style.display = "inline";
    }
}