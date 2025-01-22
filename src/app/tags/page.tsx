export default async function Tags() {
    const response = await fetch('http://localhost:8080/tags')
    const data = await response.json()
    
    return <ul>
        { data.map((item: any) => 
            <li className="p-2 bg-green-500 m-5 text-white"  key={item.id}> {item.name} </li> 
        )}
    </ul>
}