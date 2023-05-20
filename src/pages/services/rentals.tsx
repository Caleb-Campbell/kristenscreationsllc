/* eslint-disable @next/next/no-img-element */
import Layout from "~/components/Layout";

const RentalItem = ({
  imageSrc,
  alt,
  title,
  description,
}: {
  imageSrc: string;
  alt: string;
  title: string;
  description: string;
}) => (
  <div className="rounded-lg bg-white p-6 shadow-md">
    <img src={imageSrc} alt={alt} className="mb-4 rounded-lg" />
    <h2 className="mb-2 text-xl font-semibold">{title}</h2>
    <p>{description}</p>
  </div>
);

const Rentals = () => {
  const rentalItems = [
    {
      imageSrc: "https://picsum.photos/id/1031/400/300",
      alt: "Venue Rental",
      title: "Venue Rental",
      description: "Rent our stunning venue for your special occasion.",
    },
    {
      imageSrc: "https://picsum.photos/id/1036/400/300",
      alt: "Furniture Rental",
      title: "Furniture Rental",
      description:
        "We offer a wide selection of high-quality furniture for rent.",
    },
    {
      imageSrc: "https://picsum.photos/id/1040/400/300",
      alt: "Decor Rental",
      title: "Decor Rental",
      description:
        "Rent beautiful decorations to enhance your event's ambiance.",
    },
    {
      imageSrc: "https://picsum.photos/id/1033/400/300",
      alt: "Lighting Rental",
      title: "Lighting Rental",
      description:
        "Create a captivating atmosphere with our lighting rental options.",
    },
  ];

  return (
    <Layout>
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1515232389446-a17ce9ca7434?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1867&q=80" // Replace with actual stock image URL
          className="h-[500px] w-full object-cover opacity-80"
        />
      </div>
      <div className="container mx-auto my-16">
        <h1 className="mb-8 text-center text-3xl font-bold">Rental Services</h1>
        <p className="text-center text-lg">
          Explore our rental options to elevate your event.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rentalItems.map((item, index) => (
            <RentalItem
              key={index}
              imageSrc={item.imageSrc}
              alt={item.alt}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Rentals;
