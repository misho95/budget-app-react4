import StatisticsFullExpense from '../components/statisticsfullexpense'
import StatisticsTopIncome from '../components/statisticstopincome'

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
        <div className="flex flex-wrap items-start  justify-start gap-3 p-3">

        <StatisticsFullExpense />
        <StatisticsTopIncome />

            {
                data.map( (inv) => {
                    return(
                        <div className={`${inv.type ? 'border-green-500' : 'border-red-500'} border-2 bg-white p-3 rounded-md shadow-sm flex flex-col gap-2`}>
                            <div>{inv.date}</div>
                            <div className="flex justify-start items-center gap-1">
                                <span class="material-symbols-outlined">
                                    {inv.icon}
                                </span>
                                {inv.category}
                            </div>
                            <div className="flex justify-start items-center gap-1"><span class="material-symbols-outlined">payments</span>{inv.amount}</div>
                            <div className={`${inv.type ? 'text-green-500' : 'text-red-500'}`}>{inv.type ? "შემოსავალი" : "გასავალი"}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default HomePage;