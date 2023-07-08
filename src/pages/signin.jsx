import Input from "../components/input";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import GlobalStore from "../globalStore";

function SignIn(){  

    const userDataBase = GlobalStore(state => state.userDataBase);
    const setID = GlobalStore(state => state.setID);

    const navigate = useNavigate();

    const [ userName, setUserName] = useState('');
    const [ userNameError, setUserNameError] = useState(null);
    const [ passWord, setPassWord] = useState('');
    const [ passWordError, setPassWordError] = useState(null);

    const submitForm = (e) => {
        e.preventDefault();
        if(userName === '' || passWord === ''){
            if(userName === ''){
                setUserNameError('გთხოვთ შეავსოთ ველი');
            } else {
                setUserNameError(null);
            }
    
            if(passWord === ''){
                setPassWordError('გთხოვთ შეავსოთ ველი');
            } else {
                setPassWordError(null);
            }
            return;
        }
        setUserNameError(null);
        setPassWordError(null);

        const user = userDataBase.find( (usr) => {
            if(usr.user === userName){
                return usr;
            }
        })



        if(user && user.pass === passWord){
            setID(user.id);
            navigate('/');
        }
        
    }

    return(
        <div className="w-full h-full flex flex-col gap-5 pt-10 sm:pt-0 sm:justify-center items-center">
            <h1 className="text-xl">ავტორიზაცია</h1>
            <form onSubmit={submitForm} className="w-4/5 lg:w-1/4 flex flex-col gap-5 md:justify-center md:items-center lg:justify-normal lg:items-stretch">
                <div className="flex flex-col gap-5 md:flex-row lg:flex-col">
                    <Input type={'text'} legend={'სახელი'} error={userNameError} helperText={userNameError} value={userName} set={setUserName} />
                    <Input type={'password'} legend={'პაროლი'} error={passWordError} helperText={passWordError} value={passWord} set={setPassWord} />
                </div>
                <div className="flex flex-col gap-5 md:flex-row lg:flex-col">
                    <button type="submit" className="bg-gray-500 p-2 rounded-lg text-gray-200">შესვლა</button>
                    <button onClick={() => { navigate('/signup')}} className="bg-green-500 p-2 rounded-lg text-gray-200">ახალი ანგარიშის შექმნა</button>
                </div>
            </form>
        </div>
    )
}

export default SignIn;