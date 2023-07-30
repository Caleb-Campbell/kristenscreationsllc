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
      name: "Parties / Dances",
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
      "https://i.ibb.co/Wzy9TN6/IMG-0895.jpg", 
      "https://i.ibb.co/mtx1RXy/IMG-1287.jpg", 
      "https://i.ibb.co/DW35DWH/IMG-1295.jpg", 
      "https://i.ibb.co/rcXGLPt/IMG-1674.jpg", 
      "https://i.ibb.co/NmnLfck/IMG-0708.jpg", 
      "https://i.ibb.co/JzZ948s/IMG-1122.jpg", 
      "https://i.ibb.co/jvWSwQ3/IMG-1278.jpg", 
      "https://i.ibb.co/Bs3Lh5h/IMG-1294.jpg", 
      "https://i.ibb.co/hy2h6kv/IMG-1652.jpg", 
      "https://i.ibb.co/WFgLCzG/IMG-1663.jpg", 
      "https://i.ibb.co/jzCTN4Y/IMG-1723.jpg", 
      "https://i.ibb.co/SP4J6rY/IMG-1748.jpg", 
      "https://i.ibb.co/rfjGGyc/IMG-1745.jpg", 
      "https://i.ibb.co/PWpKZPk/IMG-0712.jpg", 
      "https://i.ibb.co/DLYZR9M/IMG-0714.jpg", 
      "https://i.ibb.co/WPq8Fnq/IMG-0893.jpg",
      "https://i.ibb.co/jygkrCM/IMG-2294.jpg",
      "https://i.ibb.co/zsnQsKr/IMG-2263.jpg",
      "https://i.ibb.co/7Xhm7TQ/IMG-2218.jpg"
    ],

}

  const [gridData, setGridData] = useState<string[] | undefined>(undefined)

  const handleCatClick = (cat: string) => {
    let dataToUse
    if(cat === 'weddings') {
      dataToUse = data.weddings
    }
    if(cat === 'parties / dances') {
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
    <div className="mt-[600px] grid md:grid-cols-2 grid-cols-1 gap-10">
      {grid && grid.map((item) => (
        <img className="h-72 w-72 object-cover" src={item} alt="test" />
      ))}
    </div>
  );
};