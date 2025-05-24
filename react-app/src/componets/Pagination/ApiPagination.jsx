import React, { useEffect, useState } from 'react'

const ApiPagination = () => {
    const [product, setProducts] = useState([])
    const [limit, setLimit] = useState(8)
    const [skip, setSkip] = useState(0)
    const [totalPages, setTotalPages] = useState()
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        getData()
    }, [skip])

    const getData = async () => {
        let res = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
        res = await res.json()
        setProducts(res.products)
        setTotalPages(Math.ceil(res.total / limit))
    }

    const nextPageHandler = () => {
        if (currentPage < totalPages) {
            setSkip((pre) => pre + limit)
            setCurrentPage((pre) => pre + 1)
        }
    }

    const pageHandler = (page) => {
        setSkip((page - 1) * limit)
        setCurrentPage(page)
    }

    const handlePrevious = () => {
        if (currentPage > 1) {
            setSkip((pre) => pre - limit)
            setCurrentPage((pre) => pre - 1)
        }
    }

    return (
        <>
            <h2>Api Pagination</h2>
            <div>
                {product && product.map((ele) => {
                    return <span key={ele.id}>{<img src={ele.thumbnail} alt='_' />}</span>
                })}
            </div>

            <div>
                <button onClick={() => handlePrevious()}>
                    Previous
                </button>

                {Array(totalPages).fill().map((_, i) => {
                    return <button
                        className='btn-page'
                        onClick={() => pageHandler(i + 1)}
                        style={{ backgroundColor: currentPage == i + 1 ? 'yellow' : 'grey' }}
                    >
                        {i + 1}
                    </button>
                })}

                <button onClick={() => nextPageHandler()}>
                    Next
                </button>
            </div>

        </>
    )
}

export default ApiPagination