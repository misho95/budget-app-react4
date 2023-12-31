import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GlobalStore from "./globalStore";

function ProtecdedRoute( {children} ){

    const ID = GlobalStore(state => state.ID);
    const navigate = useNavigate();

    useEffect( () => {
        if(ID === null){
            navigate('/signin');
        }
    }, [])
   
    
    return(
        ID !== null && children
    )
}

export default ProtecdedRoute;