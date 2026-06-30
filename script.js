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

const lightbox = document.getElementById("lightbox")
const lbImagen = document.getElementById("lbImagen")
const lbTitulo = document.getElementById("lbTitulo")
const lbCerrar = document.getElementById("lbCerrar")

function abrirLightbox(imgEl) {
    const obra = imgEl.closest(".obra")
    const titulo = obra ? obra.querySelector("h3")?.textContent : ""
    lbImagen.src = imgEl.src
    lbImagen.alt = imgEl.alt
    lbTitulo.textContent = titulo
    lightbox.classList.remove("hidden")
    lightbox.classList.add("flex")
    document.body.style.overflow = "hidden"
}

function cerrarLightbox() {
    lightbox.classList.add("hidden")
    lightbox.classList.remove("flex")
    document.body.style.overflow = ""
}

lbCerrar.addEventListener("click", cerrarLightbox)
lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) cerrarLightbox()
})

document.addEventListener("click", (e) => {
    const img = e.target.closest(".obra img")
    if (img) {
        e.stopPropagation()
        abrirLightbox(img)
    }
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

const panelSeleccion = document.getElementById("panelSeleccion")
const btnsSeleccion = document.querySelectorAll(".btn-seleccion")
const btnsIrSeccion = document.querySelectorAll(".btn-irSeccion")
const heroSection = document.querySelector("section")

function toggleSeleccion(e) {
    e.preventDefault()
    const isOpen = !panelSeleccion.hidden
    panelSeleccion.hidden = isOpen
    mobileMenu.classList.add("hidden")
    if (!panelSeleccion.hidden) {
        heroSection.scrollIntoView({ behavior: "smooth" })
    }
}

btnsSeleccion.forEach(btn => btn.addEventListener("click", toggleSeleccion))

btnsIrSeccion.forEach(btn => {
    btn.addEventListener("click", () => {
        panelSeleccion.hidden = true
    })
})

document.addEventListener("click", (e) => {
    if (!panelSeleccion.hidden &&
        !e.target.closest(".btn-seleccion") &&
        !e.target.closest("#panelSeleccion")) {
        panelSeleccion.hidden = true
    }
})

const imagenesDecorativas = [
    "03e46f43d3bde4e84f5a55d5f787be68.jpg",
    "05ee1198cb724cd8d6741be1b1244275.jpg",
    "075e0a5a491a26f4f61b7f172dc83abb.jpg",
    "0864c3927c14b7115bafe4286ea081a9.jpg",
    "0c183848a34af47b139b95bd21bb1491.jpg",
    "0c6828c408fc9167f9fa21672bb1df66.jpg",
    "0f3e158d76e9fcf54bd05c1cdb76237e.jpg",
    "0fd0ac5752572f22b4ecb7e6e4f703a1.jpg",
    "11234aa9da0534794958d572b18f89af.jpg",
    "15ba38f2c2b8d6b163414fbb0845b6cd.jpg",
    "1643d73ea0001a4a4a0b4b25686e1e40.jpg",
    "1b2c16fe9a4a15bae5a795d981a99a28.jpg",
    "1fb77038d2cf846c09fb04f954455a13.jpg",
    "20153442f508e7531d0a0993c95f8520.jpg",
    "243e469a2f6148c1df39a13553d481b3.jpg",
    "2525b2191cc2387e3fa27a7ddc893d88.jpg",
    "25cb7e03cf8fbbdf4caf0ecc287638bf.jpg",
    "28ba1e5ce48098493f4e6273453c4157.jpg",
    "2a964243be200bbaa937852b991d149b.jpg",
    "2c1bb63264dddf5a8c25b9c49acf96d0.jpg",
    "2dca0ca57563c6c3e8a7641ad7766eee.jpg",
    "3049df6e5fab944cdbc8e3aea0ab7b4f.jpg",
    "329ecacd9a1808ba37f95edb5178894c.jpg",
    "32d4d9596ba36d9970446dedebd152db.jpg",
    "3338375eb5e937224dfaa71fa7b04914.jpg",
    "39ab6fe1b8bf3494cc302a4813a99000.jpg",
    "3f783bd80ca4255a856d2ecf213c3409.jpg",
    "4c420736ec08d0dd5d1f265792f964f0.jpg",
    "4d1e11beefa1442a932156134cced806.jpg",
    "4e3a48d7385b4226bf049321a7dc8bf8-1.jpg",
    "4e3a48d7385b4226bf049321a7dc8bf8.jpg",
    "4f45898b375724cdcfa0bae6ceef4df5.jpg",
    "51dbdb8964f98e4ff019a4ea23b82acd.jpg",
    "54777789061f2944c5ca386a2f4ce47d.jpg",
    "57276f77402cf1142e093359f9f827e0.jpg",
    "59ae3231b73fd8cd5b0bb1f92b388584.jpg",
    "5a1775a63517e7a8a6983bdbd6bc05fa.jpg",
    "5d88e2cee10d5a571a1534ea9950cdc5.jpg",
    "5f6849d99c3734c3958832296893667b.jpg",
    "60ca379e1f9d6503a5391c1ccdb2cf76.jpg",
    "61266221b65a9eabc51aeb4a071316e8-1.jpg",
    "624fd3974574994d31ef84322cd2b3c6.jpg",
    "63f902ab9f7606dc701fd9d18f55d6fa.jpg",
    "674c931743b1c8b9f71855d512694b34.jpg",
    "6834475e46d2c2af4e514eed4e430a3a.jpg",
    "69601df6fd79dfebcfe23b41ba09625b.jpg",
    "6ffe795ff59c3306808e672aa61f6db5.jpg",
    "701353513b6fb250ca35ecbb03548afa.jpg",
    "71d3e4a64fb3fcc75916d991f5e09140.jpg",
    "728273a91c16eb88ba8b906c92aefc08.jpg",
    "75d99b240320d577d9cf3ad436f19af9.jpg",
    "77132a22af453403212d200f475f3a9d.jpg",
    "7d4c89f05f2a781553b680f7ebde63d9.jpg",
    "835609100c8542f4f9c6321fc18bf557.jpg",
    "84b98d8c16048a119546f42d78b6e2c7.jpg",
    "856879229ec976873e8322226356a74d.jpg",
    "87e135d19a8071a62bd4bd18971da567.jpg",
    "885df9d63f03a9bd05a6a58e9269cf6c.jpg",
    "8c830ca245e1ece59d410ad6048ca2cc.jpg",
    "8cdb0397a88f9a99e8d1666e26fa1d62.jpg",
    "8ce4db62b70ba3fc33d80e6dc1ca15ac.jpg",
    "8df4061fc49fb803a8b8b47593c0da70.jpg",
    "8e9ef146f0dcdbd82e511dfdfe1d6393-1.jpg",
    "8ebc6aec239418d72520e3674fcf71fd.jpg",
    "9163eba82c69823a97b25c75963b2ef3.jpg",
    "956e306233b9600c421486ec52cb4f24.jpg",
    "95a391d31db81a38c6f4b44c7261b0b5.jpg",
    "9bcf7a7a4804b6ccfcb76ec4a655dcd8.jpg",
    "a2be1c9e789b07c713f52c962076b33c.jpg",
    "a4722ae56627702ecba7606767099255.jpg",
    "a5d7be243032ffabe92eaf89671d14a5.jpg",
    "a967dd9cae15cfecb1c28ca3f0ceec99.jpg",
    "a969a18805b0acb00b2ce062cf96496d.jpg",
    "ab57a71100e19cf85300fe80a09662a2-1.jpg",
    "ad62e647a1bfd2d1115087125aa3c872.jpg",
    "b91fee4e3e519b1f72f963bf84db5f96.jpg",
    "ba7976a8ab5e6c26bad2e63b9276ff1c.jpg",
    "beeb1a1f9f01af057a5fc04b4379f726.jpg",
    "c0a176c7959e88ab064782ab14037d31.jpg",
    "c530d4e4cac41c04f047387032d67e79.jpg",
    "c568166660025b5df406a3f4d6fb22ef.jpg",
    "c78b3b1cac1858d4375bf718ef03d381.jpg",
    "c79301fb169aafc5d887878650258a5d.jpg",
    "c86cded01279a443cd3ea8c0923e6110.jpg",
    "cbad56f6da179587700a7795b93a545c.jpg",
    "ccb1e303121b9888d194d781e73415ed.jpg",
    "d33e8bb30b8dea9ae8106ffdd0361e7a.jpg",
    "d4331d77900ee14f011d4e3796c98d59.jpg",
    "d743f5eb4e7475155ff88c460a936718.jpg",
    "d7eaa77a479c83cebd42516d9b6c6ddd.jpg",
    "ddd789b667bbed17b0be371c5bb90806.jpg",
    "e0777df6b71f18915fbc4fa1214da9c8.jpg",
    "e2e2f225499330a4ccb6363df5933323.jpg",
    "e8e61ba81fe3a18aa75132b5055ae80a.jpg",
    "ebeb6d0b6df9149e4a6ab18799fbc037.jpg",
    "ec65a9e007c0bbeff5804a35b19cce36.jpg",
    "f1311c63de47da4f9610d9794751fdd7.jpg",
    "f544b137e27dd7cd48140cdafdd249af.jpg",
    "f7b009f383defff1d31356a0886f140b.jpg",
    "f7c164f7dbf17f06c55787cb6e39edbb.jpg",
    "f7c31cc4ff6b9c1fd2d15cf26c043b52.jpg",
    "FB_IMG_1782596757193.jpg",
    "FB_IMG_1782596773343.jpg",
    "FB_IMG_1782596803565.jpg",
    "FB_IMG_1782596805367.jpg",
    "FB_IMG_1782596828644.jpg",
    "FB_IMG_1782596868281.jpg",
    "fb8d6e87bdc05fb8e0118a02c6ddb1c2.jpg",
    "ffd04174d913dcdd804e0ccedf459f85.jpg"
]

const gridDecorativas = document.getElementById("gridDecorativas")

imagenesDecorativas.forEach((archivo, i) => {
    const div = document.createElement("div")
    div.className = "obra group cursor-pointer"
    div.innerHTML = `
        <div class="bg-white overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
            <img src="decorativas/${archivo}" alt="Deco ${i + 1}" loading="lazy" class="w-full h-auto aspect-[4/3] object-cover block">
            <div class="p-4">
                <h3 class="text-sm font-medium text-stone-700">Deco ${i + 1}</h3>
            </div>
        </div>
    `
    gridDecorativas.appendChild(div)
})

const imagenesMurals = [
    "IMG_20250615_134019.jpg",
    "IMG_20260629_213307.jpg",
    "Photo_1749698811428.jpg",
    "Photo_1749698811616.jpg",
    "Photo_1749698811863.jpg",
    "Photo_1749699113692.jpg",
    "Photo_1749699358762.jpg",
    "Photo_1749699359584.jpg",
    "Photo_1749699360453.jpg",
    "Photo_1749699577109.jpg",
    "Photo_1749699578890.jpg",
    "Photo_1749699579671.jpg",
    "Photo_1749779303412.jpg",
    "Photo_1749779305796.jpg",
    "Photo_1749779537237.jpg",
    "Photo_1749779539229.jpg",
    "Photo_1749779540227.jpg",
    "Photo_1749779791231.jpg",
    "Photo_1749779792397.jpg",
    "Photo_1749779794569.jpg",
    "Photo_1749864228778.jpg",
    "Photo_1749864231552.jpg",
    "Photo_1749864232679.jpg",
    "Photo_1749864425279.jpg",
    "Photo_1749864565032.jpg",
    "Photo_1749864565283.jpg",
    "Photo_1749864565517.jpg",
    "Photo_1749864566028.jpg",
    "Photo_1749864929204.jpg",
    "Photo_1749864929470.jpg",
    "Photo_1749864929674.jpg",
    "Photo_1749864929926.jpg",
    "Photo_1749924609587.jpg",
    "Photo_1749924735599.jpg",
    "Photo_1749924736063.jpg",
    "Photo_1749924736599.jpg",
    "Photo_1749924957908.jpg",
    "Photo_1749937500889.jpg",
    "Photo_1749994257723.jpg"
]

const gridMurals = document.getElementById("gridMurals")

imagenesMurals.forEach((archivo, i) => {
    const div = document.createElement("div")
    div.className = "obra group cursor-pointer"
    div.innerHTML = `
        <div class="bg-white overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
            <img src="murales/${archivo}" alt="Mural ${i + 1}" loading="lazy" class="w-full h-auto aspect-[4/3] object-cover block">
            <div class="p-4">
                <h3 class="text-sm font-medium text-stone-700">Mural ${i + 1}</h3>
            </div>
        </div>
    `
    gridMurals.appendChild(div)
})


