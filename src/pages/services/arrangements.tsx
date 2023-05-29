import Layout from "~/components/Layout";
import React, { useState } from "react";
import { Splash } from "~/components/Splash";

type arrangementData = {
  id: number;
  name: string;
  image: string;
  description: string;
};

const Arrangements = () => {
  const arrangementItems: arrangementData[] = [
    {
      id: 1,
      name: "Weddings",
      image: "https://picsum.photos/id/1031/400/300",
      description: "This is the first arrangement",
    },
    {
      id: 2,
      name: "Parties",
      image: "https://picsum.photos/id/1035/400/300",
      description: "This is the second arrangement",
    },
    {
      id: 3,
      name: "Seasonal",
      image: "https://picsum.photos/id/1038/400/300",
      description: "This is the third arrangement",
    },
  ];

  const data = {
    weddings: [
      {
        id: 1,
        name: "wedding 1",
        image: "https://picsum.photos/id/1031/400/300",
        description: "This is the first wedding",
        price: "50.00"
      },
      {
        id: 2,
        name: "wedding 2",
        image: "https://picsum.photos/id/1035/400/300",
        description: "This is the second wedding",
        price: "50.00"
      },
      {
        id: 3,
        name: "wedding 3",
        image: "https://picsum.photos/id/1038/400/300",
        description: "This is the third wedding",
        price: "50.00"
      },
    ],
    parties: [
      {
        id: 1,
        name: "party 1",
        image: "https://images.unsplash.com/photo-1530098403657-0d93d64d087d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80",
        description: "This is the first party",
        price: "50.00"
      },
      {
        id: 2,
        name: "party 2",
        image: "https://images.unsplash.com/photo-1529636798458-92182e662485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80",
        description: "This is the second party",
        price: "50.00"
      },
      {
        id: 3,
        name: "party 3",
        image: "https://picsum.photos/id/1038/400/300",
        description: "This is the third party",
        price: "50.00"
      },
    ],
    seasonal: [
      {
        id: 1,
        name: "seasonal 1",
        image: "https://picsum.photos/id/1031/400/300",
        description: "This is the first seasonal",
        price: "50.00"
      },
      {
        id: 2,
        name: "seasonal 2",
        image: "https://picsum.photos/id/1035/400/300",
        description: "This is the second seasonal",
        price: "50.00"
      },
      {
        id: 3,
        name: "seasonal 3",
        image: "https://picsum.photos/id/1038/400/300",
        description: "This is the third seasonal",
        price: "50.00"
      },
    ]
  }

  type gridData = {
    id: number;
    name: string;
    image: string;
    description: string;
    price: string;
  }

  const [gridData, setGridData] = useState<gridData[] | undefined>(undefined)

  const handleCatClick = (cat: string) => {
    let dataToUse
    if(cat === 'weddings') {
      dataToUse = data.weddings
    }
    if(cat === 'parties') {
      dataToUse = data.parties
    }
    if(cat === 'seasonal') {
      dataToUse = data.seasonal
    }
  }


  return (
    <Layout>
      <Splash title='arrangments' height='500px' src='https://images.unsplash.com/photo-1527903789995-dc8ad2ad6de0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=820&q=80' />
      <div className="container mx-auto my-16">
        <p className="mx-auto w-6/12 md:w-2/12 translate-y-4 md:translate-y-4 bg-white text-center text-2xl uppercase">
          Arrangements {gridData?.toString()}
        </p>
        <div className="mx-auto w-10/12 border-b-2" />
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {arrangementItems.map((item) => (
            <ArrangementItem
              key={item.id}
              imageSrc={item.image}
              alt={item.name}
              title={item.name}
              description={item.description}
              handleCatClick={handleCatClick}
            />
          ))}
        </div>
        <div>
          { gridData && gridData.map((item) => (
              <div key={item.id}>
                <h1>{item.name}</h1>
                <img src={item.image} alt={item.name} />
                <p>{item.description}</p>
                <p>{item.price}</p>
              </div>
            ))
          }
        </div>
      </div>
    </Layout>
  );
};

type ArrangementItemProps = {
  imageSrc: string;
  alt: string;
  title: string;
  description: string;
  handleCatClick: (cat: string) => void;
};

const ArrangementItem = ({
  handleCatClick,
  imageSrc,
  alt,
  title,
  description,
}: ArrangementItemProps) => (
  <div onClick={
    () => handleCatClick(title.toLowerCase())} className="rounded-sm bg-white p-6 shadow-md cursor-pointer hover:scale-[1.01] transition-all hover:shadow-lg">
    <img src={imageSrc} alt={alt} className="mb-4 rounded-sm mx-auto" />
    <h2 className="mb-2 text-xl uppercase text-center">{title}</h2>
    {/* <p>{description}</p> */}
  </div>
);

export default Arrangements;
