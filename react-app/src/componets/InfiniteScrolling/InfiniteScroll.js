import React, { useEffect, useState } from 'react'
import Post from '../InfiniteScrolling/Post'

const InfiniteScroll = () => {
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    fetchData()
  }, [page])
  const fetchData = async () => {
    const url = `https://picsum.photos/v2/list?page=${page}&limit=5`
    const dataRes = await fetch(url)
    const res = await dataRes.json()
    setData((preData) => [...preData, ...res])
  }
  return (
   <Post imgData = {data} setPage = {setPage} />
  )
}

export default InfiniteScroll