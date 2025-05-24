import React, { useEffect, useState } from 'react'

const Products = () => {
  const [products, setProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const res = await fetch('https://dummyjson.com/products?limit=194')
    const data = await res.json()
    setProducts(data.products)

  }

  const itemPerPage = 8
  const totalPages = Math.ceil(products.length / itemPerPage)

  // Items Per Page calculation
  const startIndex = (currentPage - 1) * itemPerPage
  const currentPageData = products.slice(startIndex, startIndex + itemPerPage)

  const indexData = Array(totalPages).fill().map((_, i) => i + 1)


  /* Pagination Button Handler */
  const handlePageChange = (index) => {
    setCurrentPage(index)
  }

  return (
    <>
      <h3>Pagination </h3>
      <div className='prod'>
        {products.length > 0 && currentPageData.map((ele) => {
          return <span key={ele.id} ><img src={ele.thumbnail} alt='_' /></span>
        })}
      </div>

      <span className='btn'>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage == 1}
        >
          Previous
        </button>

        {/* Page Number */}
        {indexData.map((_, i) => {
          return <span className='index'>
            <button onClick={() => handlePageChange(i + 1)}
              style={{ backgroundColor: currentPage == i + 1 ? 'yellow' : 'grey' }}
            >
              {i + 1}
            </button> </span>
        })}

        {/* Next Button */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage == totalPages}
        >
          Next
        </button>
      </span>
    </>
  )
}

export default Products