let imgs = document.getElementsByClassName("disp")
let fimg = document.getElementById("fullImage")
let wind = document.getElementById("overlay")

let orig = 'static/img/orig'

for (let i = 0; i < imgs.length; ++i) {
    imgs.item(i).addEventListener("click", () => {
        let src = imgs.item(i).src
        let ind = src.lastIndexOf("/")
        console.log(ind)
        src = orig + src.slice(ind - src.length)
        fimg.src = src
        wind.style.display = 'block'
    })
}
document.getElementById("closeBtn").addEventListener("click", () => {
    wind.style.display = 'none'
})