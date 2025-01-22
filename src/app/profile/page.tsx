import { auth, signOut } from "@/auth";
import { redirect } from 'next/navigation'
import Image from "next/image";
import Link from "next/link";

export default async function SignIn(){
    const session = await auth();
    const user = session?.user;
    return user ?
        (
            <div className="bg-black h-screen text-white p-10 flex gap-9 flex-col ">
                 <div className="bg-zinc-900 rounded-md w-96 p-10 flex gap-5 flex-col 
                    items-center justify-center">
                    
                    <Image className="rounded-full" width={150} height={30} src={`${user.image}`} alt="" />
                    <h1 className="text-3xl text-center"> Bem vindo : {user.name} </h1>
                    <p className="mb-10">E-mail: {user.email}</p>

                    { session.user && (
                        <Link href="/">
                            <button className="p-2 px-10 bg-sky-600 text-white font-semibold">Painel</button>
                        </Link>
                    )}
                    
                    <form action={ async () => { "use server"; await signOut() } }>
                        <button className="bg-red-600 p-2 px-10 animate-pulse">Sign Out</button>
                    </form>
                 </div>
            </div>
        ) : ( <> {  redirect('/') }</> )   
}