import { useEffect, useRef } from "react";

function Input({type, legend, error, helperText, value, set}){

    const leg = useRef();
    const inputRef = useRef();

    useEffect( () => {
        if(value === ''){
            leg.current.classList.add('top-1/2')
            leg.current.classList.add('-translate-y-1/2')
            leg.current.classList.remove('-top-4')
        }
    }, [])

    const inputFocus = () => {
        leg.current.classList.remove('top-1/2')
        leg.current.classList.remove('-translate-y-1/2')
        leg.current.classList.add('-top-4')
    }

    const loseFocuse = () => {
        if(value === ''){
            leg.current.classList.add('top-1/2')
            leg.current.classList.add('-translate-y-1/2')
            leg.current.classList.remove('-top-4')
        }
    }

    const focuseInput = () => {
        inputRef.current.focus();
    }

    return(
        <div>
        <fieldset className={`w-full p-2 border-2 ${error ? 'border-red-500' : 'border-gray-500'} relative`}>
            <legend ref={leg} onClick={focuseInput} className={`bg-gray-200 -top-4 absolute px-3 left-2 ${error ? `text-red-500` : 'text-gray-500'} duration-100`}>{legend}</legend>
            <input ref={inputRef} type={type} className="w-full p-2 bg-transparent focus:outline-none" onFocus={inputFocus} onBlur={loseFocuse} value={value} onChange={(e) => { set(e.target.value)}}/>
         </fieldset>
         {error && <div className="text-red-500 px-5">{helperText}</div>}
        </div>
    )
}

export default Input;