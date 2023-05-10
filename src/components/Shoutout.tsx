import Link from "next/link"


export const Shoutout = ({title, buttonText, path}: {title: string, buttonText: string, path: string}) => {

    return (
        <div className="my-3 w-full h-[200px] flex-col justify-center items-around mx-auto p-3 text-center m-3 mb-10 border-2 border-t-gray-250 border-r-0 border-l-0 border-b-gray-250">
            <p className="text-2xl uppercase">{title}</p>
            <div>
            <Link className="border-pink-500 border-2 p-4 mt-10 bg-pink-300" href={path}>{buttonText}</Link>
            </div>
        </div>
    )
}