import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import GlobalStore from "../globalStore";

function LeftNav(){

    const ID = GlobalStore(state => state.ID);
    const setID = GlobalStore(state => state.setID);
    const navigate = useNavigate();

    const signout = () => {
        setID(null);
        navigate('/signin')
    }


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
            <div className="h-full bg-gray-200 rounded-2xl p-2 flex flex-col shadow-md justify-between items-center">
                <div>
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
              {
                ID !== null && <div className='flex flex-col items-center justify-center gap-2'>
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" className='w-8 h-8 rounded-full border-2 border-gray-300'/>
                <Link className="bg-red-500 rounded-full flex p-1 text-gray-200" onClick={signout}>
                    <span className="material-symbols-outlined">
                    logout
                    </span>
                </Link>
              </div>
              }
           
            </div>
        </div>
    )
}

export default LeftNav;