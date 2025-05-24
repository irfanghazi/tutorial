import React, { useState } from 'react'
import '../StarRating/starRating.css'
const StarRating = () => {
    let TOTAL_STAR = 5
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    const stars = new Array(TOTAL_STAR).fill(0)
    return (
        <div className='star'>
            {stars.map((_, i) => {
                return <span
                    key={i}
                    className={`btn_items ${hover == 0 && i < rating || i < hover ? 'colored' : 'unColored'}`}
                    onClick={() => setRating(i + 1)}
                    onMouseEnter={() => setHover(i + 1)}
                    onMouseLeave={() => setHover(0)}
                >
                    &#9733;
                </span>
            })}
        </div>
    )
}

export default StarRating