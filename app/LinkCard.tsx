import Image from 'next/image'

type PropsType = {
    url: string,
    title: string,
    image?: string
}

export default function LinkCard({url, title, image}: PropsType) {
    return (
        <a href={url} className="flex items-center justify-center p-2 rounded-md hover:scale-105 transition-all w-full border mt-1.5 mb-3 max-w-[700px] h-[65px] bg-slate-100">
            <div className='flex text-center w-full items-center'>
                <div className='w-10'>
                {image && (<Image className='rounded-md' src={image} width={45} height={45} alt={title} />)}
                </div>
                <h2 className="font-semibold text-xl text-center w-full -ml-10">{title}</h2>
            </div>
        </a>
    )
}