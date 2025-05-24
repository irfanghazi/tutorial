import React, { useEffect, useState } from 'react'
import InfiniteScroll from './InfiniteScroll'

const Post = () => {
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        getData()
    }, [page])

    const getData = async () => {
        const url = `https://picsum.photos/v2/list?page=${page}&limit=5`
        const res = await fetch(url)
        const result = await res.json()
        setData((preData) => [...preData, ...result])
    }
    return (
        <>
            <InfiniteScroll data={data} setPage={setPage} />
        </>
    )
}

export default Post 