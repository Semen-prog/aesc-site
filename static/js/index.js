let imgs = document.getElementsByClassName("disp")
let fimg = document.getElementById("fullImage")
let wind = document.getElementById("overlay")
for (let i = 0; i < imgs.length; ++i) {
    imgs.item(i).addEventListener("click", () => {
        fimg.src = imgs.item(i).src
        wind.style.display = 'block'
    })
}
document.getElementById("closeBtn").addEventListener("click", () => {
    wind.style.display = 'none'
})