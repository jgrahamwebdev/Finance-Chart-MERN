
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale, // x-axis
    LinearScale, //y-axis
    PointElement,
    Legend,
    Tooltip
} from 'chart.js';

ChartJS.register(
    LineElement,
    CategoryScale, 
    LinearScale,
    PointElement,
    Legend,
    Tooltip
)

const Chart = () => {

    const data = {
        labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri'],
        datasets: [
            {
                label: 'Amount Spent',
                data: [300, 124, 475, 223, 899], //DB data will go here???
                backgroundColor: 'red',
                borderColor: 'red',
                pointBorderColor: 'black',
                tension: 0.4 // adds curve to line
            },
            {
                label: 'Amount Deposited',
                data: [350, 224, 275, 823, 650], //DB data will go here???
                backgroundColor: '#2ecc71',
                borderColor: '#2ecc71',
                pointBorderColor: 'black',
                tension: 0.4 // adds curve to line
            }
        ]
    }

    const options = {
        plugins: {
            legend: true,
        },
        scales: {
            y: {
                min: 0,
                max: 1000
            }
        }
    }

    return (
        <div className='w-full md:h-[3/4] flex items-center justify-center flex-col'>
            <h1 className='text-[2rem] mb-4 font-extralight'>Your Spending:</h1>
            <div className='w-full h-full flex items-center justify-center'>
                <Line data={data} options={options}></Line>
            </div>

            <div>

            </div>
        </div>
    )
}

export default Chart
