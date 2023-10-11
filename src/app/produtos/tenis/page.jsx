import Link from "next/link";
import fotoTenis from 'public/img/tenis.png';
import Image from 'next/image';

export default function Tenis(){
    return(
        <div>
            <h1>TÊNIS</h1>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ea, dolor neque dicta repellendus debitis harum sequi error molestias perspiciatis necessitatibus quos repellat earum fugiat quis saepe! Aut, porro consectetur?</p>
                <Image src={fotoTenis} alt="Foto Tênis" witdh={320} height={320} />
                <p><Link href="/">Voltar...</Link></p>
            </div>
        </div>
    )
}