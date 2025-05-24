import React, { useEffect, useState } from 'react'
import Data from './data.json'
import UI from './UI'

const Accordian = () => {
    const [data, setData] = useState([])
    const [activeId, setActiveId] = useState(null)


    useEffect(() => {
        setData(Data)
    }, [])


    const toggleHandler = (id) => {
        setActiveId(activeId == id ? null : id)

    }

    return (
        <>
            <div>Accordian</div>
            {
                data && data.map((ele) => {
                    return <div className='card'>
                        <UI
                            key={ele.id}
                            data={ele}
                            isActive={activeId == ele.id}
                            toggleHandler={() => toggleHandler(ele.id)}
                        />
                    </div>

                })
            }
        </>

    )
}

export default Accordian