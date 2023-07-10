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
        <div className="flex flex-wrap items-start gap-3 p-3">

            <div className="bg-white text-gray-600 shadow-sm p-3 rounded-lg w-full sm:w-fit">
                <div className="flex flex-col">
                    <div>
                        <p className="text-sm text-gray-400">სულ ხარჯი</p>
                        <h1 className="text-lg ">2481</h1>
                    </div>
                   <div className="flex flex-col">
                        <div className="flex flex-col gap-1 ">
                            <p> შოპინგი: 320</p>
                            <div className="w-10 h-2 bg-red-500"></div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p> საოჯახო: 592</p>
                            <div className="w-14 h-2 bg-blue-500"></div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p>გადარიცხვები: 1925</p>
                            <div className="w-24 h-2 bg-purple-500"></div> 
                        </div>
                        <div className="flex flex-col gap-1 ">
                            <p> შოპინგი: 320</p>
                            <div className="w-10 h-2 bg-red-500"></div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p> საოჯახო: 592</p>
                            <div className="w-14 h-2 bg-blue-500"></div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p>გადარიცხვები: 1925</p>
                            <div className="w-24 h-2 bg-purple-500"></div> 
                        </div>
                   </div>
                </div>
            </div>

            {
                data.map( (inv) => {
                    return(
                        <div className={`${inv.type ? 'bg-green-300' : 'bg-red-300'} p-3 rounded-md shadow-sm flex flex-col gap-2`}>
                            <div>{inv.date}</div>
                            <div className="flex justify-start items-center gap-1">
                                <span class="material-symbols-outlined">
                                    {inv.icon}
                                </span>
                                {inv.category}
                            </div>
                            <div className="flex justify-start items-center gap-1"><span class="material-symbols-outlined">payments</span>{inv.amount}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default HomePage;