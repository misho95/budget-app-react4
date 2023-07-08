import GlobalStore from "./globalStore";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedLogin( {children} ){

    const ID = GlobalStore(state => state.ID);
    const navigate = useNavigate();

    useEffect( () => {
        if(ID !== null){
            navigate('/');
        }
    }, [])

    return(
        ID === null && children
    )
}

export default ProtectedLogin;