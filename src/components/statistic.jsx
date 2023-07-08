function Statistic(){
    return(
        <div className="flex flex-wrap p-5 gap-4">
            <div className=" bg-green-300 w-fit h-fit rounded-lg shadow-sm text-sm flex flex-col gap-3 p-1">
                <h1 className="text-lg bg-green-500 p-2 rounded-lg">შემოსავალი: 1500</h1>
                <ul>
                    <li className="p-1">ინვოისი 1000</li>
                    <li className="p-1">სხვა 500</li>
                </ul>
            </div>
            <div className=" bg-red-300 w-fit h-fit rounded-lg shadow-sm text-sm flex flex-col gap-3 p-1">
                <h1 className="text-lg bg-red-500 p-2 rounded-lg">გასავალი: 1500</h1>
                <ul>
                    <li className="p-1">შოპინგი 1000</li>
                    <li className="p-1">სხვა 500</li>
                </ul>
            </div>
        </div>
    )
}
export default Statistic;