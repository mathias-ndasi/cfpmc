let btn = document.querySelector("#navList li a")
console.log(btn);
btn.addEventListener("click", e => {
    e.classList.toggle("active")
})