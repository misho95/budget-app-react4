function StatisticsFullExpense(){
    return(
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
    )
}

export default StatisticsFullExpense;