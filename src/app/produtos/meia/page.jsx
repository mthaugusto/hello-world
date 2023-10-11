import Link from "next/link";
import fotoMeia from 'public/img/meia.png';
import Image from 'next/image'


export default function Meia(){
    return(
        <div>
            <h1>MEIA</h1>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ea, dolor neque dicta repellendus debitis harum sequi error molestias perspiciatis necessitatibus quos repellat earum fugiat quis saepe! Aut, porro consectetur?</p>
                <Image src={fotoMeia} alt="Foto meia" witdh={320} height={320} />
                <p><Link href="/">Voltar...</Link></p>
            </div>
        </div>
    )
}