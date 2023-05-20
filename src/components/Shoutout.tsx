import Link from "next/link";

export const Shoutout = ({
  title,
  buttonText,
  path,
}: {
  title: string;
  buttonText: string;
  path: string;
}) => {
  return (
    <div className=" mx-auto h-[200px] w-9/12  border-2 border-l-0 border-r-0 border-b-pinky border-t-pinky border-opacity-50 p-3 text-center">
      <p className="mt-10 text-4xl uppercase">{title}</p>
      <Link
        className="p-3 text-center text-[18px] uppercase transition-all"
        href={path}
      >
        <p className="mx-auto mt-5 w-[150px] border border-pinky py-2 text-pinky transition-all hover:bg-pinky hover:text-white">
          {buttonText}
        </p>
      </Link>
    </div>
  );
};
