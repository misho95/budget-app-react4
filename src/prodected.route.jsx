import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProtecdedRoute( {children} ){
    const navigate = useNavigate();

    const user = false;

    useEffect( () => {
        if(!user){
            navigate('/signin');
        }
    }, [])
   
    
    return(
        user && children
    )
}

export default ProtecdedRoute;