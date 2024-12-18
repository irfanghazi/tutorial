import React, { useEffect, useRef } from 'react'

const Post = ({ imgData, setPage }) => {
  const lastItemRef = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(([item]) => {
      if (item.isIntersecting) {
        setPage((prevPage) => prevPage + 1)
      }
    },
      { threshold: 0.5 })

    if (lastItemRef.current) {
      observer.observe(lastItemRef.current)
    }
  }, [imgData])


  return (
    <>
      {imgData && imgData.map((ele, index) => {
        return <div ref={index == imgData.length - 3 ? lastItemRef : null}>
          <img className='img' src={ele.download_url} key={ele.id} />
        </div>
      })}
    </>
  )
}

export default Post