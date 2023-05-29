/* eslint-disable @next/next/no-img-element */
import Layout from "~/components/Layout";
import React, { useState } from "react";
import { Splash } from "~/components/Splash";
import Modal from "~/components/Modal";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

type rentalData = {
  id: number;
  name: string;
  image: string;
  description: string;
};


const Rentals = () => {
  const rentalItems = [
    {
      imageSrc: "https://picsum.photos/id/1031/400/300",
      alt: "Arches",
      title: "Arches",
      description: "Rent our stunning venue for your special occasion.",
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1530098403657-0d93d64d087d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80",
      alt: "Decor",
      title: "Decor",
      description:
        "We offer a wide selection of high-quality furniture for rent.",
    },
    {
      imageSrc: "https://picsum.photos/id/1040/400/300",
      alt: "floral arrangements",
      title: "Flowers",
      description:
        "Rent beautiful decorations to enhance your event's ambiance.",
    },
  ];

  const data = {
    arches: [
      {
        id: 1,
        name: "Arch 1",
        image: "https://picsum.photos/id/1031/400/300",
        description: "This is the first arch",
      },
      {
        id: 2,
        name: "Arch 2",
        image: "https://picsum.photos/id/1035/400/300",
        description: "This is the second arch",
      },
      {
        id: 3,
        name: "Arch 3",
        image: "https://picsum.photos/id/1038/400/300",
        description: "This is the third arch",
      },
    ],
    decor: [
      {
        id: 1,
        name: "Decor 1",
        image: "https://images.unsplash.com/photo-1530098403657-0d93d64d087d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80",
        description: "This is the first decor",
      },
      {
        id: 2,
        name: "Decor 2",
        image: "https://images.unsplash.com/photo-1529636798458-92182e662485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80",
        description: "This is the second decor",
      },
      {
        id: 3,
        name: "Decor 3",
        image: "https://picsum.photos/id/1038/400/300",
        description: "This is the third decor",
      },
    ],
    flowers: [
      {
        id: 1,
        name: "Flowers 1",
        image: "https://picsum.photos/id/1031/400/300",
        description: "This is the first flower",
      },
      {
        id: 2,
        name: "Flowers 2",
        image: "https://picsum.photos/id/1035/400/300",
        description: "This is the second flower",
      },
      {
        id: 3,
        name: "Flowers 3",
        image: "https://picsum.photos/id/1038/400/300",
        description: "This is the third flower",
      },
    ]
  }

  const [showRentals, setShowRentals] = useState<boolean>(false);
  const [selectedRental, setSelectedRental] = useState<rentalData[]>(data.arches);

  const toggleShowRental = () => {
    setShowRentals(!showRentals);
  };

  const handleRentalClick = (prop: string) => {
    let propToUse
    if(prop === 'arches') propToUse = data.arches
    if(prop === 'decor') propToUse = data.decor
    if(prop === 'flowers') propToUse = data.flowers
    
    if(propToUse) {
      setSelectedRental(propToUse)
      toggleShowRental()
    }
    

  }




  return (
    <Layout>
      <Modal open={showRentals} toggle={toggleShowRental} >
        <Slideshow arches={selectedRental} />
      </Modal>
      <Splash title='rentals' height="500px" src="https://images.unsplash.com/photo-1529636798458-92182e662485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80"  />
      <div className="container mx-auto my-16">
        <p className="mx-auto w-6/12 md:w-2/12 translate-y-4  md:translate-y-4 bg-white text-center text-2xl uppercase">
          Rental Services
        </p>
        <div className="mx-auto w-10/12 border-b-2" />
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rentalItems.map((item, index) => (
            <RentalItem
              showRental={() => handleRentalClick(item.title.toLowerCase())}
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

const RentalItem = ({
  showRental,
  imageSrc,
  alt,
  title,
  description,
}: {
  showRental: () => void;
  imageSrc: string;
  alt: string;
  title: string;
  description: string;
}) => (
  <div onClick={showRental} className="rounded-sm bg-white p-6 shadow-md cursor-pointer hover:scale-[1.01] transition-all hover:shadow-lg">
    <img src={imageSrc} alt={alt} className="mb-4 rounded-sm mx-auto" />
    <h2 className="mb-2 text-xl uppercase text-center">{title}</h2>
    {/* <p>{description}</p> */}
  </div>
);

const Slideshow = ({arches}:{ arches: rentalData[] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? arches.length - 1 : prevSlide - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === arches.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <div className="h-full">
      <div className="flex items-start justify-center">
        <button
          className="absolute left-10 bottom-2 md:top-1/2 transform -translate-y-1/2 z-10"
          onClick={goToPreviousSlide}
        >
          <ArrowLeftIcon className="hover:scale-105 transition-all" width={40} />
        </button>
        <button
          className="absolute right-10 bottom-2 md:top-1/2 transform -translate-y-1/2 z-10"
          onClick={goToNextSlide}
        >
          <ArrowRightIcon className="hover:scale-105 transition-all" width={40} />
        </button>
        {arches.map((arch, index) => (
          <div
            key={arch.id}
            className={`absolute transition-opacity duration-500 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={arch.image} alt={arch.name} width={400} height={400} className="rounded-lg" />
            <h2 className="text-xl font-bold mt-2">{arch.name}</h2>
            <p className="text-gray-600">{arch.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
