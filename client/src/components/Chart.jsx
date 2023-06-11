
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
        labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri'], //Have 'Day' data go here?? Use Dropdown menu for day??
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

    const expense = [
        { 
            id: 1,
            date: '06/10/2023', 
            deposit: '850', 
            spent: '250', 
            total: '0000' 
        },
        { 
            id: 2,
            date: '06/10/2023', 
            deposit: '850', 
            spent: '250', 
            total: '0000' 
        },
        { 
            id: 3,
            date: '06/10/2023', 
            deposit: '850', 
            spent: '250', 
            total: '0000' 
        },
        { 
            id: 4,
            date: '06/10/2023', 
            deposit: '850', 
            spent: '250', 
            total: '0000' 
        },
    ]
      
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <div className='w-full h-auto md:h-screen flex items-center justify-start flex-col'>
            <h1 className='text-[2rem] mb-4 font-extralight'>Your Spending:</h1>
            
            <div className='w-full h-3/4 flex items-start justify-center'>
                <Line data={data} options={options}></Line>
            </div>

            <div className="px-4 sm:px-6 lg:px-8 w-3/4 md:w-[65%] mt-8">
            <h1 className='text-[2rem] font-extralight'>Expense Log:</h1>
      <div className="mt-2 flow-root">
        <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle">
            <table className="min-w-full border-separate border-spacing-0">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 hidden border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
                  >
                    Amount Deposited
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 hidden border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell"
                  >
                    Amount Spent
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                  >
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                {expense.map((expense, expenseIdx) => (
                  <tr key={expense.id}>
                    <td
                      className={classNames(
                        expenseIdx !== expense.length - 1 ? 'border-b border-gray-200' : '',
                        'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8'
                      )}
                    >
                      {expense.date}
                    </td>
                    <td
                      className={classNames(
                        expenseIdx !== expense.length - 1 ? 'border-b border-gray-200' : '',
                        'whitespace-nowrap hidden px-3 py-4 text-sm text-green-600 sm:table-cell'
                      )}
                    >
                      {expense.deposit} &uarr;
                    </td>
                    <td
                      className={classNames(
                        expenseIdx !== expense.length - 1 ? 'border-b border-gray-200' : '',
                        'whitespace-nowrap hidden px-3 py-4 text-sm text-red-600 lg:table-cell'
                      )}
                    >
                      {expense.spent} &darr;
                    </td>
                    <td
                      className={classNames(
                        expenseIdx !== expense.length - 1 ? 'border-b border-gray-200' : '',
                        'whitespace-nowrap px-3 py-4 text-sm text-black'
                      )}
                    >
                      $ {expense.total}
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
    )
}

export default Chart
