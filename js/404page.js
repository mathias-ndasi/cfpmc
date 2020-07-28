let page = document.getElementById("content");
console.log(page);
page.addEventListener("mouseover",
    e => {
        let xwnd = e.pageX
        let ywnd = e.pageY
        let pageX = (window.innerwidth - xwnd) / 15
        let pageY = (window.innerHeight - ywnd) / 15
        page.style.transform = "translateX(" + pageX + "px) translateY(" + pageY + "px);  "
    })