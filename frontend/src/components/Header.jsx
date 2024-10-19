import Logo from "./Logo";

export default function Header(){
    return (
        <header className="w-full h-[10%] p-4 border-solid border-2 border-blue-500 flex justify-between ">
        
            <Logo w={"w-24"} h={"h-24"}/> 
            <div className="w-80 border-solid border-2 border-blue-500" >

            </div>
        </header>
    )
    
}