/**
 * Executa função quando a DOM estiver carregada
 * 
 * @param {Function} fn - Função a ser acionada
 */
function onReady(fn) {
    if (["complete", "interactive"].indexOf(document.readyState) != -1) setTimeout(fn, 100)
    else document.addEventListener("DOMContentLoaded", fn)
}

/**
 * Esta função retorna uma função que, ao ser chamada
 * repetidas vezes, cancela a chamada anterior, assim
 * evita problemas de performance
 * 
 * @param {Function} fn - Função a ser chamada
 */
function debounce(fn) {
    let frame;
    return (...params) => {
        if (frame) cancelAnimationFrame(frame)
        frame = requestAnimationFrame(() => fn(params))
    }
}


/**
 * Esta função retorna uma acionador para o evento de mostrar
 * e esconder o menu mobile
 * 
 * @param {*} btn dom elemento do acionador do menu (hamburger)
 * @param {*} menu dom elemento do menu 
 * @returns 
 */
function navToggle(btn, menu) {

    return () => {
        btn.classList.toggle('open')
        menu.classList.toggle('flex')
        menu.classList.toggle('hidden')
    }
}


onReady(() => {
    const btn = document.getElementById('menu-btn')
    const menu = document.getElementById('menu')

    btn.addEventListener('click', navToggle(btn, menu))

    // 🤪 Obrigado css-tricks (https://css-tricks.com/styling-based-on-scroll-position)
    const storeScroll = () =>
        document.documentElement.dataset.scroll = window.scrollY

    storeScroll()
    document.addEventListener('scroll', debounce(storeScroll), { passive: true })

})

