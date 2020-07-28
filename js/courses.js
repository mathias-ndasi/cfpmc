let btn = document.querySelector("#navList li a")
console.log(btn);
btn.addEventListener("click", function() {
    btn.classList.toggle("active")
})