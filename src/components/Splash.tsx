

export const Splash = ({ src, height, title, className}: {
    src: string,
    height: string
    title?: string
    className?: string
}) => {

    return (
        <div className="relative">
  <img
    src={src}
    className={`h-[${height}] w-full object-cover opacity-80 hue-rotate-15 filter ${className ? className : ''}`}
    alt="Image"
  />
  <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center uppercase text-5xl">
    {title}
  </h1>
</div>

    )
}