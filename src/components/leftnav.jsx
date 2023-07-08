import { Link } from 'react-router-dom'

function LeftNav(){

    const links = [
        {
            name: 'home',
            url: '/'
        },
        {
            name: 'account_circle',
            url: '/signin'
        },
    ];

    const GetLink = (val, url) => {
        return(
            <Link to={url} className='text-gray-600'>
                <span className="material-symbols-outlined">
                    {val}
                </span>
            </Link>
        )
    }

    return(
        <div className="w-20 h-screen flex justify-center items-center py-6 sm:py-10">
            <div className="h-full bg-gray-200 rounded-2xl p-2 flex flex-col shadow-md">
               {
                links.map( (link, index) => {
                    return(
                        <div key={index}>
                            {GetLink(link.name, link.url)}
                        </div>
                    )
                })
               }
            </div>
        </div>
    )
}

export default LeftNav;