import { HTMLProps } from "react";

export function TextArea( {...rest } : HTMLProps<HTMLTextAreaElement> ){
    return(
        <textarea className="w-full h-[150px] rounded-md text-black p-5 
            font-semibold tracking-wider border-none outline-none hover:bg-slate-200 
            focus:bg-slate-200 resize-none" 
        {...rest} > </textarea>
    )
}