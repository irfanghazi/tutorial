import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Search = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const name = searchParams.get('name')
    const age = searchParams.get('age')
    const setParams = () => {
        const obj = {
            name: 'Irfan',
            age: 25
        }
        setSearchParams(obj)
    }
    return (
        <>
            <button onClick={() => setParams()}>Get Details</button>
            <p>My Name is {name} and age is {age}</p>
        </>
    )
}

export default Search