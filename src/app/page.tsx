import { auth, signIn } from "@/auth";
import Image from "next/image";
import { redirect } from 'next/navigation'

export default async function SignIn(){
    const session = await auth();
    const user = session?.user;
    
    return user ?
        ( <> {  redirect('/profile') }</> ) : (
            <div className="bg-black h-screen text-white p-10 flex gap-9 flex-col mt-20">
                 <div className="bg-zinc-900 rounded-lg w-96 h-96 flex gap-5 flex-col 
                    items-center justify-center ">
                    <h1 className="text-3xl mb-14">Seja bem vindo</h1>
                    <h2 className=""> Entrar nossa painel ?</h2>
                    <form action={ async () => { "use server"; await signIn("google") } }>
                        <button className="bg-blue-700 px-10 p-2 rounded-md animate-pulse flex gap-3 items-center">
                            <Image width={30} height={30} src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/768px-Google_Chrome_icon_%28February_2022%29.svg.png" alt="" />
                            Sign in
                        </button>
                    </form>
                </div>
            </div>
        )   
}