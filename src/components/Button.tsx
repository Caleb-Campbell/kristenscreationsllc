import { type ReactNode } from "react"


export const Button = ({ onClick, children, className }:{ onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=> void, children: ReactNode, className?: string }) => {


    return (
        <button
        onClick={onClick}
        className="p-3 text-center text-[18px] uppercase transition-all"
        >
        <p className={`mx-auto mt-1 w-[150px] border border-pinky py-2 text-pinky transition-all hover:bg-pinky hover:text-white ${className ? className : ''}`}>
          {children}
        </p>
        </button>
    )
}