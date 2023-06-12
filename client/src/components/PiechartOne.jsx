
import { Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    ArcElement,
    Legend,
    Tooltip
)

const PiechartOne = () => {
    const data = {
        labels: ['House', 'New Car', 'Vacation'],
        datasets: [
            {
                data: [30000, 5800, 2300],
                backgroundColor: ['#ff4d4d', '#3498db', '#f1c40f']
            },
            // THIS MAKES AN INNER CHART
            // {
            //     data: [50000, 5800, 2300],
            //     backgroundColor: ['#ff4d4d', '#3498db', '#f1c40f']
            // }
        ]
    }

    const options = {

    }

    const saving = [
        { 
            id: 1,
            category: 'House', 
            total: '0000' 
        },
        { 
            id: 2,
            category: 'New Car', 
            total: '0000' 
        },
        { 
            id: 3,
            category: 'Vacation',  
            total: '0000' 
        },
    ]
      
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <div className='w-full h-auto py-8 flex items-center justify-center flex-col'>
            <h1 className='text-[2rem] mb-4 font-extralight'>Your Savings Goals:</h1>
            <div className='w-full flex items-center justify-center flex-col md:flex-row border-b-2'>
            <div className='h-full w-full p-[20px] flex-1 flex items-center justify-center'>
                <Pie data={data} options={options}></Pie>
            </div>
            <div className='p-[20px] flex-1 flex items-center justify-center w-full'>
                <div className="px-4 sm:px-6 lg:px-8 w-full md:w-3/4 my-8">
                  <h1 className='text-[2rem] font-extralight'>Savings Log:</h1>
                  <div className="mt-2 flow-root">
                    <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
                      <div className="inline-block min-w-full py-2 align-middle">
                        <table className="min-w-full border-separate border-spacing-0">
                          <thead>
                            <tr>
                              <th scope="col" className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8">
                                Savings Goal
                              </th>
                              <th scope="col" className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter">
                                Total
                              </th>
                            </tr>
                          </thead>
                        <tbody>
                        {saving.map((saving, savingIdx) => (
                          <tr key={saving.id}>
                            <td className={classNames(savingIdx !== saving.length - 1 ? 'border-b border-gray-200' : '', 'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8')}>
                              {saving.category}
                            </td>
                            <td className={classNames(savingIdx !== saving.length - 1 ? 'border-b border-gray-200' : '', 'whitespace-nowrap px-3 py-4 text-sm text-black')}>
                              $ {saving.total}
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
        </div>
    )
}

export default PiechartOne
