import BrasilMap from '../assets/brasil_map.png'

export function BrazilMap(){
    return(
        <div className="w-[80%] h-full max-h-[40rem] bg-[#2395FF] rounded-3xl flex overflow-hidden justify-center items-center">
            <img src={BrasilMap} alt="Mapa do Brasil" className='w-full max-w-xl'/>
        </div>
    )
}