import Link from "next/link";

export const ServicesPanels = ({
  title,
  images,
}: {
  title?: string;
  images: { text: string; img: string; path: string }[];
}) => {
  return (
    <>
      <div className="mx-auto w-10/12 max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <p className="m-3 mx-auto mb-10 w-full p-3 text-center text-3xl uppercase md:text-4xl ">
          {title}
        </p>
        <div className="flex flex-col justify-around sm:flex-row lg:gap-[30px]">
          {images.map((image) => {
            return (
              <Link
                href={image.path}
                key={image.text}
                className="relative my-10 flex-shrink-0 cursor-pointer transition-all hover:scale-105 hover:brightness-75 hover:filter"
              >
                <img
                  className="w-72 h-96 hover:blur-sm "
                  src={image.img}
                />
                <p className="font-mono absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center text-2xl font-medium uppercase text-black ">
                  {image.text}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};
