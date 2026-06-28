const menuBtn = document.getElementById("menuBtn")
const mobileMenu = document.getElementById("mobileMenu")

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden")
})

mobileMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden")
    })
})

const imagenes = document.querySelectorAll(".obra img")
imagenes.forEach(img => {
    img.addEventListener("click", (e) => {
        e.stopPropagation()
        img.classList.toggle("zoomed")
    })
})

document.addEventListener("click", () => {
    imagenes.forEach(img => img.classList.remove("zoomed"))
})

const popupContacto = document.getElementById("popupContacto")
const cerrarPopup = document.getElementById("cerrarPopup")

function abrirPopup() {
    popupContacto.classList.remove("hidden")
    popupContacto.classList.add("flex")
    mobileMenu.classList.add("hidden")
}

function cerrarPopupFn() {
    popupContacto.classList.add("hidden")
    popupContacto.classList.remove("flex")
}

document.getElementById("botonContacto").addEventListener("click", (e) => {
    e.preventDefault()
    abrirPopup()
})

const botonContactoMobile = document.getElementById("botonContactoMobile")
if (botonContactoMobile) {
    botonContactoMobile.addEventListener("click", (e) => {
        e.preventDefault()
        abrirPopup()
    })
}

cerrarPopup.addEventListener("click", cerrarPopupFn)

popupContacto.addEventListener("click", (e) => {
    if (e.target === popupContacto) cerrarPopupFn()
})
