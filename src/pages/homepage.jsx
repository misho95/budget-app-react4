import StatisticsFullExpense from '../components/statisticsfullexpense'
import StatisticsTopIncome from '../components/statisticstopincome'
import {Link} from 'react-router-dom';

function HomePage(){

    const data = [
        {
            id: 1,
            amount: 99,
            date: '11-05-2023',
            type: false,
            category: 'shopping',
            icon: 'shopping_bag'
        },
        {
            id: 2,
            amount: 199,
            date: '15-05-2023',
            type: true,
            category: 'invoice',
            icon: 'description'
        },
    ]

    return(
        <div className="flex flex-col sm:flex-row gap-3 p-3">

        <div className='flex flex-col sm:flex-row gap-3'>
                <StatisticsFullExpense />
                <StatisticsTopIncome />
        </div>

        <div className='flex flex-wrap items-start gap-3'>
            {
                data.map( (inv) => {
                    return(
                        <div key={inv.id} className={`${inv.type ? 'border-green-500' : 'border-red-500'} border-2 bg-white p-3 rounded-md shadow-sm flex flex-col gap-2 relative pr-20 w-full sm:w-fit`}>
                            <div className='absolute right-3 top-3 bottom-3'>
                                <Link to='/edit' className='absolute top-0 right-0'>
                                    <span className="material-symbols-outlined">
                                    edit
                                    </span>
                                </Link>
                                <Link to='/delete' className='absolute bottom-0 right-0'>
                                    <span className="material-symbols-outlined">
                                    delete
                                    </span>
                                </Link>
                            </div>
                            <div>{inv.date}</div>
                            <div className="flex justify-start items-center gap-1">
                                <span className="material-symbols-outlined">
                                    {inv.icon}
                                </span>
                                {inv.category}
                            </div>
                            <div className="flex justify-start items-center gap-1"><span className="material-symbols-outlined">payments</span>{inv.amount}</div>
                            <div className={`${inv.type ? 'text-green-500' : 'text-red-500'}`}>{inv.type ? "შემოსავალი" : "გასავალი"}</div>
                        </div>
                    )
                })
            }
        </div>
        </div>
    )
}

export default HomePage;