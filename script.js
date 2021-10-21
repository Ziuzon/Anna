const anna = document.getElementById("anna");
const had = document.getElementById("had");

document.addEventListener("keydown", function (event) {
    jump();
});

function jump() {
    if (anna.classList != "jump") {
        anna.classList.add("jump")
    }
    setTimeout(function () {
        anna.classList.remove("jump")
    }, 800)
}

let isAlive = setInterval(function () {
    let annaTop = parseInt(window.getComputedStyle(anna).getPropertyValue("top"))
    let hadLeft = parseInt(window.getComputedStyle(had).getPropertyValue("left"))

    if (hadLeft < 50 && hadLeft > 0 && annaTop >= 140) {
        alert("ЛОХ!!")
    }

}, 10)