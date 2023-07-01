/* eslint-disable @next/next/no-img-element */
import Layout from "~/components/Layout";
import { Splash } from "~/components/Splash";

const GalleryItem = ({
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
  <div className="rounded-sm bg-gray-50 p-6 shadow-md">
    <img src={imageSrc} alt={alt} className="mb-4 rounded-lg" />
    <h2 className="mb-2 text-xl font-semibold">{title}</h2>
    <p>{description}</p>
  </div>
);

const Parties = () => {

    const parties = [
      {
        title: 'Theme and Design',
        description: 'I offer an initial consultation where you as a customer can discuss your vision, preferences, and requirements for your party decor. This consultation may take place in person, over the phone, or via email.',
      },
      {
        title: 'Customization',
        description: 'I provide creative design ideas and suggestions based on your preferences and the overall theme of the party. I am here to assist in planning the decor layout, color schemes, floral arrangements, lighting, and other decorative elements.',
      },
      {
        title: 'Setup and Installation',
        description: 'In my party portfolio, you will find previous pictures you can choose from, including a space where you can explore different inspirations for your special day.',
      },
      {
        title: 'Quality and Professionalism',
        description: 'On the party day, I take care of the complete setup and installation of the decor. This includes setting up floral arrangements, drapery, centerpieces, lighting, and any other decorative elements.',
      },
      {
        title: 'Clear Pricing and Contracts',
        description: 'I will also provide transparent pricing information, including the cost of materials, labor, and any additional services. You will receive a detailed contract that outlines the scope of work, payment terms, cancellation policies, and any other relevant terms and conditions.',
      },
      {
        title: 'Post-Event Cleanup',
        description: 'After the party, my team and I will efficiently dismantle and remove all rented decor elements, ensuring that the venue is left clean and as it was before.',
      },
    ];
  

  return (
    <Layout>
      <Splash title="parties" height="500px" src="https://images.unsplash.com/photo-1559456474-507a0d806eb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1126&q=80" />
      
      <div className="container mx-auto my-16">
        <p className="mx-auto w-6/12 md:w-4/12 translate-y-4  md:translate-y-4 bg-white text-center text-2xl uppercase">
          What to Expect
        </p>
        <div className="mx-auto w-10/12 border-b-2" />
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-10">
        {parties.map((party, index) => (
          <li key={index} className="bg-white shadow p-6 rounded transition-all">
            <h2 className="text-xl uppercase font-medium mb-2">{party.title}</h2>
            <p>{party.description}</p>
          </li>
        ))}
      </ul>
      </div>
    </Layout>
  );
};

export default Parties;
