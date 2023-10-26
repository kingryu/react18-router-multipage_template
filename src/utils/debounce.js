export const Debounce = (fn, delay = 800) => {
    let timeoutId
    return function () {
        if (timeoutId) {
            clearTimeout(timeoutId)
        }
        if (!timeoutId){
            fn.apply(this, arguments)
        }
        timeoutId = setTimeout(() => {
            timeoutId = null
        }, delay)
    }
}