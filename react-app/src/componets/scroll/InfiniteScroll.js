import React, { useEffect, useRef } from 'react'

const InfiniteScroll = ({ data, setPage }) => {
    const lastItemRef = useRef()

    const throttle = (func) => {
        let isThrottle = false

        return function (...args) {
            if (!isThrottle) {
                isThrottle = true
                func(...args)
                setTimeout(() => {
                    isThrottle = false
                }, 1000)
            }
        }
    }

    useEffect(() => {

        const setThrottle = throttle(() => {
            setPage((pre) => pre + 1)
        })
        const observer = new IntersectionObserver(([item]) => {
            if (item.isIntersecting) {
                setThrottle()
            }
        }, {
            threshold: 0.5
        })

        if (lastItemRef.current) {
            observer.observe(lastItemRef.current)
        }

        return () => {
            if (lastItemRef.current) {
                observer.unobserve(lastItemRef.current)
            }
        }


    }, [data])


    return (
        <>
            {
                data.map((ele, index) => {
                    return <div ref={index == data.length - 3 ? lastItemRef : null}>
                        <img className='post_img' src={ele.download_url} alt='img' />
                    </div>
                })
            }
        </>
    )
}

export default InfiniteScroll