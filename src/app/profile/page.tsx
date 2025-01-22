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
                 <div className="bg-zinc-900 rounded-md w-full p-10 flex gap-5 flex-col 
                    items-center justify-center">
                    
                    <Image className="rounded-full" width={150} height={30} src={`${user.image}`} alt="" />
                    <h1 className="text-3xl text-center"> Bem vindo : {user.name} </h1>
                    <p className="mb-10">E-mail: {user.email}</p>

                    <div className="flex gap-10">
                        { session.user && (
                            <Link href="/dashboard">
                                <button className="p-2 px-10 w-[120px] bg-sky-600 text-white font-semibold rounded-md">Painel</button>
                            </Link>
                        )}
                        
                        <form action={ async () => { "use server"; await signOut() } }>
                            <button className="bg-red-600 p-2 px-10 w-[120px] animate-pulse rounded-md">Sair</button>
                        </form>
                    </div>

                 </div>
            </div>
        ) : ( <> {  redirect('/') }</> )   
}