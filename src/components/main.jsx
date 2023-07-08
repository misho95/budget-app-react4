function Main({children}){
    return(
        <div className="w-full h-screen overflow-hidden py-6 sm:py-10 pr-4 sm:pr-6">
            <div className="bg-gray-200 h-full rounded-xl shadow-md">
                {children}
            </div>
        </div>
    )
}

export default Main;