import { auth, signOut } from "@/auth";
import { redirect } from 'next/navigation'
import Image from "next/image";


export default async function Dashboard(){
    const session = await auth();
    const user = session?.user;
    return user ? ( 
        <div className="bg-blue-600 w-screen">
            <header className="bg-black flex justify-between px-20 items-center">
            { session.user && (
                <div className="bg-zinc-900 text-black w-36 h-36 rounded-full flex flex-col justify-center items-center">
                    <Image className="rounded-full" width={50} height={50} src={`${user.image}`} alt="" />
                    <h6 className="text-center text-sm text-white"> {user.name} </h6>
                    {/* <p className="mb-10 text-sm">{user.email}</p> */}
                </div>
            )}

            <form action={ async () => { "use server"; await signOut() } }>
                <button className="bg-red-600 p-2 px-10 rounded-md text-white animate-pulse">Sign Out</button>
            </form>
            </header>
            
            <div className="p-20">
                <h1 className="text-4xl">Painel</h1>
            </div>
        </div>
    ) : ( <> {  redirect('/') }</> )   
}