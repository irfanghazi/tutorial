document.addEventListener('DOMContentLoaded', () => {
    const n_count_tag = document.querySelector('.n_count')
    const t_count_tag = document.querySelector('.t_count')

    const showCount = () => {
        normalCount()
        throttleCount()
    }
    document.body.onscroll = showCount

    let normal_count = 0
    let throttle_count = 0
    const normalCount = () => {
        normal_count++
        n_count_tag.innerHTML = `Normal Count: ${normal_count}`
    }

    let isScroll = true
    const throttleCount = () => {
        if (isScroll) {
            throttle_count++
            t_count_tag.innerHTML = `Throttle Count: ${throttle_count}`
            isScroll = false
            setTimeout(() => {
                isScroll = true
            }, 1000);
        }
    }
})