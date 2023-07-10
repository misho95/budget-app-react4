function StatisticsTopIncome(){
    return(
        <div className="bg-white text-gray-600 shadow-sm p-3 rounded-lg w-full sm:w-fit h-fit">
        <div className="flex flex-col">
            <div>
                <p className="text-sm text-gray-400">3 ყველაზე დიდი შემოსავალი</p>
            </div>
           <div className="flex flex-col">
                <div className="flex flex-col gap-1 ">
                    <p> გადარიცხვა: 5069</p>
                    <div className="w-4/5 h-2 bg-green-500"></div>
                </div>
                <div className="flex flex-col gap-1">
                    <p> ინვოისი: 592</p>
                    <div className="w-1/5 h-2 bg-orange-500"></div>
                </div>
                <div className="flex flex-col gap-1">
                    <p> სხვა: 2051</p>
                    <div className="w-1/2 h-2 bg-orange-500"></div>
                </div>
           </div>
        </div>
    </div>
    )
}

export default StatisticsTopIncome;