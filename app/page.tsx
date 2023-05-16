import Image from "next/image"
import data from "@/data.json"
import LinkCard from "./LinkCard"

type LinkType = {
  title: string,
  url: string,
  image: string
}

export default function Home() {
  return (
    <div className="flex items-center justify-center w-full mx-auto mt-16 flex-col">
      <Image className="rounded-full" src={data.avatar} width={100} height={100} alt="Avatar" />
      <h1 className="font-semibold text-2xl mt-3 text-black tracking-[.02em]">@{data.name}</h1>
      {data.links.map((link: LinkType) => <LinkCard key={link.title} {...link} />)}
    </div>
  )
}
