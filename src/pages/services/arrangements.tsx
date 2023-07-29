import Layout from "~/components/Layout";
import React, { useState } from "react";
import { Splash } from "~/components/Splash";
import Modal from "~/components/Modal";

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
      image: "https://images.unsplash.com/photo-1595467959554-9ffcbf37f10f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      description: "This is the first arrangement",
    },
    {
      id: 2,
      name: "Parties",
      image: "https://images.unsplash.com/photo-1575559439920-282880e5164d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      description: "This is the second arrangement",
    },
    {
      id: 3,
      name: "Seasonal",
      image: "https://images.unsplash.com/photo-1599704991344-4447a3c595f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      description: "This is the third arrangement",
    },
  ];

  const data = {
    weddings: [
      'https://i.ibb.co/C96hkXf/IMG-2135.jpg',
      'https://i.ibb.co/MP7pLVh/IMG-7371.jpg',
      'https://i.ibb.co/C96hkXf/IMG-2135.jpg',

    ],
    parties: [

    ],
    seasonal: [
      'https://picsum.photos/id/1031/400/300',
      'https://picsum.photos/id/1031/300/400',
      'https://picsum.photos/id/1031/400/300',
      'https://picsum.photos/id/1031/300/400',
      'https://picsum.photos/id/1031/400/300',
      'https://picsum.photos/id/1031/300/400',
      'https://picsum.photos/id/1031/400/300',
      'https://picsum.photos/id/1031/300/400',
      'https://picsum.photos/id/1031/400/300',
      'https://picsum.photos/id/1031/300/400',
    ]
  }

  const [gridData, setGridData] = useState<string[] | undefined>(undefined)

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
    setGridData(dataToUse)
  }


  return (
    <Layout>
      <Splash title='arrangements' height='500px' src='https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' />
      <div className="container mx-auto my-16">
        <div className="mx-auto w-10/12 border-b-2" />
        <Modal className="h-[80vh] bg-opacity-5 w=[90vw]" open={Boolean(gridData)} toggle={()=>setGridData(undefined)} >
          <ImageGrid grid={gridData ? gridData : undefined} />
        </Modal>
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
   <img src={imageSrc} alt={alt} className="mb-4 h-96 w-96 rounded-sm mx-auto object-cover" />
    <h2 className="mb-2 text-xl uppercase text-center">{title}</h2>
    {/* <p>{description}</p> */}
  </div>
);

export default Arrangements;

const ImageGrid = ({grid} : {grid: string[] | undefined}) => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
      {grid && grid.map((item) => (
        <img className="h-72 w-72" src={item} alt="test" />
      ))}
    </div>
  );
};