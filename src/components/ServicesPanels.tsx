import Link from "next/link"


export const ServicesPanels = ({title, images}: {title?: string, images: {text: string, img: string, path: string}[]}) => {


    return (
        <>
       <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-2xl w-full mx-auto p-3 text-center m-3 mb-10 border-2 border-t-gray-250 border-r-0 border-l-0 border-b-gray-250">{title}</p>
            <div className="flex flex-col sm:flex-row justify-around px-4">
                {
                images.map((image) => {
                    return (
                    <Link href={image.path} key={image.text} className="relative my-10 hover:scale-105 hover:filter hover:brightness-75 cursor-pointer transition-all flex-shrink-0">
                        <img className="w-full sm:w-[300px] hover:blur-sm sm:h-[400px]" src={image.img} />
                        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 font-bold text-gray-500 -translate-y-1/2 font-mono text-lg text-center">{image.text}</p>
                    </Link>
                    )
                })
                }
            </div>
        </div>

        </>
    )
}