import GlobalStore from "../globalStore";
import { useNavigate } from "react-router-dom";

function Header(){

    const navigate = useNavigate();
    const ID = GlobalStore(state => state.ID);
    const userDataBase = GlobalStore(state => state.userDataBase);
    const setID = GlobalStore(state => state.setID);

    const user = userDataBase.find((usr) => {
        if(usr.id === ID) return usr;
    })

    const signout = () => {
        setID(null);
        navigate('/signin')
    }

    return(
        <div className="px-5 py-3">გამარჯობა {user?.user} <button className="bg-red-500 px-2 py-1 rounded-md" onClick={signout}>გამოსვლა</button></div>
    )
}

export default Header;