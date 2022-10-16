import React, { useEffect, useState } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
// import faker from 'faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
    },
    maintainAspectRatio: false,
    scales: {
        y: {
            ticks: {
                // Include a dollar sign in the ticks
                callback: function (value, index, ticks) {
                    return '$' + value;
                }
            }
        }
    }
};

//chartInfo is Obj from the Purchase Table for the specific shoe I am on. 
// Now, I can grab all of the purchases from a certain date and price of the listing.
function PriceChart({ chartInfo }) {

    const [chartData, setChartData] = useState({
        datasets: [],
    });
    const [chartOptions, setChartOptions] = useState();

    let dateArr = []
    let priceArr = []
    chartInfo.forEach((item) => {
        let date = item.createdAt
        const options = { month: 'long' };
        let month = new Date(date).toLocaleString('en-us', options)
        dateArr.push(month)
        priceArr.push(item.listingPrice)
    })

    let sales
    if (priceArr) { }

    const labels = ['April', 'May', 'June', 'July', 'August', 'September', 'October'];

    const data = {
        labels,
        datasets: [
            {
                fill: true,
                data: priceArr,
                borderColor: 'green',
                backgroundColor: 'rgba(0, 255, 0, 0.1)',
            },
        ],
    };



    return (
        <>
            <Line options={options} data={data} />
        </>
    )
}

export default PriceChart
