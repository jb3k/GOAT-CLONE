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

// export const options = {
//     responsive: true,
//     plugins: {
//         legend: {
//             position: 'top',
//         },
//         title: {
//             display: true,
//             text: 'Chart.js Line Chart',
//         },
//     },
// };

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

// export const data = {
//   labels,
//   datasets: [
//     {
//       fill: true,
//       label: 'Dataset 2',
//       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//       borderColor: 'rgb(53, 162, 235)',
//       backgroundColor: 'rgba(53, 162, 235, 0.5)',
//     },
//   ],
// };

//chartInfo is Obj from the Purchase Table for the specific shoe I am on. 
// Now, I can grab all of the purchases from a certain date and price of the listing.
function PriceChart({ chartInfo }) {
    const [chartData, setChartData] = useState({
        datasets: [],
    });

    const [chartOptions, setChartOptions] = useState();
    

    const datePosted = new Date(createdAt)
    const now = Date.now()
    // console.log(datePosted - now)
    const milliseconds = Math.abs(now - datePosted)
    // const minutes = Math.ceil(milliseconds / (1000 * 60))
    const hours = Math.ceil(milliseconds / (1000 * 60 * 60))
    const days = Math.ceil(milliseconds / (1000 * 60 * 60 * 24))




    return (
        <>
            <div>
                HELLO
            </div>
        </>
    )
    // return <Line options={chartOptions} data={chartData} />;
}

export default PriceChart
