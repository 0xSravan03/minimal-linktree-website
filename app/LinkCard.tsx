type PropsType = {
    url: string,
    title: string,
    image?: string
}

export default function LinkCard({url, title, image}: PropsType) {
    return (
        <a href={url} className="w-full bg-slate-500">
            <div>
                <h2>{title}</h2>
            </div>
        </a>
    )
}