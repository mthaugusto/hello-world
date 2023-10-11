import Link from "next/link";
import fotoCalca from 'public/img/calca.png';
import Image from 'next/image'


export default function Calca(){
    return(
        <div>
            <h1>CALÇA</h1>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ea, dolor neque dicta repellendus debitis harum sequi error molestias perspiciatis necessitatibus quos repellat earum fugiat quis saepe! Aut, porro consectetur?</p>
                <Image src={fotoCalca} alt="Foto camiseta" witdh={320} height={320} />
                <p><Link href="/">Voltar...</Link></p>
            </div>
        </div>
    )
}