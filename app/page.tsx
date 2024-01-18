import {CardWithForm} from "@/components/CardWithForm";
import Image from 'next/image';

export default function Home() {
  return (
    <main className={"py-2 px-4 flex flex-wrap justify-center items-center y-2 px-4 gap-5"}>
        <CardWithForm/>
        <CardWithForm/>
        <CardWithForm/>
        <Image src="/resturant.png" alt="resturant" width={120} height={120}/>
    </main>
  )
}
