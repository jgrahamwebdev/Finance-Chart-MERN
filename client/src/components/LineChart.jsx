
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
import { useState, useEffect } from 'react';
import axios from 'axios';

ChartJS.register(
    LineElement,
    CategoryScale, 
    LinearScale,
    PointElement,
    Legend,
    Tooltip
)

const LineChart = () => {
    const [expenses, setExpenses] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/expenses')
        .then((res) => { 
            console.log(res)
            setExpenses(res.data)
        })
        .catch((err) => console.log(err))

    }, [])

  // CHART.JS 
    const data = {
        labels: expenses.map(x => x.date), //Have 'Day' data go here ✅
        datasets: [
            {
                label: 'Amount Spent',
                data: expenses.map(x => x.spent), //DB data will go here ✅
                backgroundColor: 'red',
                borderColor: 'red',
                pointBorderColor: 'black',
                tension: 0.4 // adds curve to line
            },
            {
                label: 'Amount Deposited',
                data: expenses.map(x => x.deposit), //DB data will go here ✅
                backgroundColor: '#2ecc71',
                borderColor: '#2ecc71',
                pointBorderColor: 'black',
                tension: 0.4 // adds curve to line
            }
        ]
    }
    const options = {
        plugins: {
            legend: {
              display: true,
              align: 'end'
            }      
        },
        scales: {
            y: {
                min: 0,
                max: expenses.map(x => x.deposit)
            }
        }
    }
      
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <div className='w-full h-auto flex items-center justify-start flex-col'>
          <h1 className='text-[2rem] mb-4 font-extralight'>Your Spending:</h1>
              {/* TOP LEGEND */}
              <div options={options}></div>

          <div className='w-full h-auto flex items-center justify-center flex-col border-b-2'>
              {/* LINE CHART */}
              <Line data={data}></Line>

              <div className="px-4 sm:px-6 lg:px-8 w-3/4 my-8">
                  <h1 className='text-[2rem] font-extralight'>Expense Log:</h1>
                  <div className="mt-2 flow-root">
                    <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
                      <div className="inline-block min-w-full py-2 align-middle">
                        <table className="min-w-full border-separate border-spacing-0">
                          <thead>
                            <tr>
                              <th scope="col" className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8">
                                Date
                              </th>
                              <th scope="col" className="sticky top-0 z-10 hidden border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell">
                                Amount Deposited
                              </th>
                              <th scope="col" className="sticky top-0 z-10 hidden border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell">
                                Amount Spent
                              </th>
                              <th scope="col" className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter">
                                Total
                              </th>
                              <th scope="col" className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter">
                                Actions
                              </th>
                            </tr>
                          </thead>
                        <tbody>
                        {expenses.map((expense, expenseIdx) => (
                          <tr key={expense.id}>
                            <td className={classNames(expenseIdx !== expense.length - 1 ? 'border-b border-gray-200' : '', 'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8')}>
                              <a href='#' className='text-blue-500 underline underline-offset-2 hover:text-black'>{expense.date}</a>
                            </td>
                            <td className={classNames(expenseIdx !== expense.length - 1 ? 'border-b border-gray-200' : '', 'whitespace-nowrap hidden px-3 py-4 text-sm text-green-600 sm:table-cell')}>
                              {expense.deposit} &uarr;
                            </td>
                            <td className={classNames(expenseIdx !== expense.length - 1 ? 'border-b border-gray-200' : '', 'whitespace-nowrap hidden px-3 py-4 text-sm text-black lg:table-cell')}>
                              {expense.spent} &darr;
                            </td>
                            <td className={classNames(expenseIdx !== expense.length - 1 ? 'border-b border-gray-200' : '', expense.deposit - expense.spent <= 0 ? 'text-red-500' : 'text-green-600', 'whitespace-nowrap px-3 py-4 text-sm text-black')}>
                              $ {expense.deposit - expense.spent }
                            </td>
                            <td className={classNames(expenseIdx !== expense.length - 1 ? 'border-b border-gray-200' : '', 'whitespace-nowrap hidden px-3 py-4 text-sm text-black lg:table-cell')}>
                              <button className='bg-red-500 text-white rounded-md py-1 px-2 hover:bg-red-600'>Delete</button>
                            </td>
                          </tr>
                        ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
    )
}

export default LineChart
