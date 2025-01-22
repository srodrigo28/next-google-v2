import { HTMLProps } from "react";

export function InputText( {...rest } : HTMLProps<HTMLInputElement> ){
    return(
        <input className="w-full rounded-md text-black p-5 
            font-semibold tracking-wider border-none outline-none hover:bg-slate-200 
            focus:bg-slate-200" 
        {...rest} > </input>
    )
}