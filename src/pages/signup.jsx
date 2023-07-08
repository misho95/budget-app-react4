import Input from "../components/input";
import { useState } from "react";
import GlobalStore from '../globalStore';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router-dom";

function SignUp(){  

    const userDataBase = GlobalStore(state => state.userDataBase);
    const addUser = GlobalStore(state => state.addUser);

    const navigate = useNavigate();

    const [ userName, setUserName] = useState('');
    const [ userNameError, setUserNameError] = useState(null);
    const [ passWord, setPassWord] = useState('');
    const [ passWordError, setPassWordError] = useState(null);
    const [ email, setEmail ] = useState('');
    const [ emailError, setEmailError] = useState(null);

    const submitForm = (e) => {
        e.preventDefault();
        if(userName === '' || passWord === '' || email === ''){
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

            if(email === ''){
                setEmailError('გთხოვთ შეავსოთ ველი')
            } else {
                setEmailError(null);
            }
            return;
        }
        setUserNameError(null);
        setPassWordError(null);
        setEmailError(null);

        addUser({
            id: uuidv4(),
            user: userName,
            pass: passWord,
            email,
        });

        navigate('/signin')
    }

    return(
        <div className="w-full h-full flex flex-col gap-5 pt-10 sm:pt-0 sm:justify-center items-center">
            <h1 className="text-xl">რეგისტრაცია</h1>
            <form onSubmit={submitForm} className="w-4/5 lg:w-1/4 flex flex-col gap-5">
                <div className="flex flex-col gap-5 md:flex-row lg:flex-col">
                    <Input type={'text'} legend={'სახელი'} error={userNameError} helperText={userNameError} value={userName} set={setUserName} />
                    <Input type={'password'} legend={'პაროლი'} error={passWordError} helperText={passWordError} value={passWord} set={setPassWord} />
                    <Input type={'email'} legend={'ელფოსტა'} error={emailError} helperText={emailError} value={email} set={setEmail} />
                </div>
                <button type="submit" className="bg-gray-500 py-2 rounded-lg text-gray-200">რეგისტრაცია</button>
            </form>
        </div>
    )
}

export default SignUp;