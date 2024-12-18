import React, { useState } from 'react'
import BarChart from './BarChart'
import { UserData } from './DataSet'
import LineChart from './LineChart'
import { PieChart } from './PieChart'

const Charts = () => {
    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [{
            label: 'User Gained',
            data: UserData.map((data) => data.userGain)

        }]
    })
    return (
        <>
            <div>Charts</div>
            <div style={{ width: '700px' }}>
                <BarChart chartData={userData} />
                <LineChart chartData = {userData}/>
                <PieChart chartData={userData}/>
            </div>
        </>

    )
}

export default Charts


  
  