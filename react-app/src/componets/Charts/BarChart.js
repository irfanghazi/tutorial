import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as chartJS } from 'chart.js/auto' // you have to import this in order to work

const BarChart = ({ chartData }) => {
    return (
        <Bar data={chartData} />
    )
}

export default BarChart