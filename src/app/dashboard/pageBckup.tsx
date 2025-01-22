
import { auth, signOut } from "@/auth";
import { redirect } from 'next/navigation'
import Image from "next/image";
import { TextArea } from "@/components/textArea";
import { FiShare2 } from "react-icons/fi";
import { FaTrash } from "react-icons/fa";

export default async function Dashboard(){
    const session = await auth();
    const user = session?.user;

    // console.log(session)
    // states

    return user ? ( 

        <div className="bg-zinc-900 w-screen text-white">
            
            <header className="bg-black p-5 flex justify-between px-20 items-center">
            { session.user && (
                <div className="bg-zinc-900 text-black w-36 h-36 rounded-full flex flex-col justify-center items-center">
                    <Image className="rounded-full" width={50} height={50} src={`${user.image}`} alt="" />
                    <h6 className="text-center text-sm text-white"> {user.name} </h6>
                    {/* <p className="mb-10 text-sm">{user.email}</p> */}
                </div>
            ) }

            <form>
                <button className="bg-red-600 p-2 px-10 rounded-md text-white animate-pulse">Sign Out</button>
            </form>
            </header>
            
            <main className="p-5 flex flex-col items-center">
                
                <form className="flex flex-col gap-5 bg-zinc-800 p-5 rounded-lg w-full md:w-[400px] md:h-[300px]">
                    <h1 className="text-3xl font-semibold text-center">Qual sua tarefa?</h1>
                    <TextArea placeholder="digite qual sua tarefa ?" />
                    
                    <div className="flex gap-2 items-center justify-center">
                        <input type="checkbox" id="mar" className="w-5 h-5 rounded-lg"
                         checked={true} />
                        <label htmlFor="mark" className="select-none"> Deixar tarefa pública ?</label>
                    </div>
                    
                    <button className="bg-zinc-900 rounded-md p-3" type="submit">Registrar</button>
                </form>

                <section className="mt-5 w-96">
                    <h1 className="mb-5 w-full">Minhas tarefas ?</h1>
                    
                    <article className="bg-zinc-800 p-5 rounded-lg">
                        <div className="flex items-center gap-1 bg-green-500 w-32 p-1 justify-center rounded-md">
                            <label htmlFor="publicoId" className="tracking-widest font-semibold">Publico</label>
                            <button id="publicoId">
                                <FiShare2 size={22} color="#3183ff" />
                            </button>
                        </div>
                        <div className="flex justify-between items-center">
                            <p>Minha primeira tarefa de exemplo</p>
                            <button className="flex bg-white p-2 rounded-md">
                                <FaTrash size={24} color="#ea3140" />
                            </button>
                        </div>
                    </article>

                </section>
            </main>
        </div>
    ) : ( <> {  redirect('/') }</> )   
}