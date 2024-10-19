import logo from '../assets/logo-chico.png'

export default function Logo({w,h}){
    return (
        <div>
            <img src={logo} alt="Logo do chico do caranguejo"    className={`${w?w: "w-36"} ${h?h:"h-36"} mr-4`} />
        </div>
    )
}