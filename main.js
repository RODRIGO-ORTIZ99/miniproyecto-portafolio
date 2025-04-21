let buttonActive = document.querySelector("#dark1")

buttonActive.addEventListener("click", darkSwitch)

function darkSwitch() {
    document.documentElement.classList.toggle("dark")
}
