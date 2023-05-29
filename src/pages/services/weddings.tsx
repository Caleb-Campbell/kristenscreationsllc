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

const Weddings = () => {
  const gallery = [
    {
      imageSrc: "https://picsum.photos/id/1018/400/300",
      alt: "Wedding Venue",
      title: "Venue Selection",
      description:
        "Our expert wedding planners will help you find the perfect venue for your dream wedding.",
    },
    {
      imageSrc: "https://picsum.photos/id/1015/400/300",
      alt: "Vendor Coordination",
      title: "Vendor Coordination",
      description:
        "We'll assist you in coordinating with various vendors, such as caterers, decorators, and photographers.",
    },
    {
      imageSrc: "https://picsum.photos/id/1025/400/300",
      alt: "Wedding Decoration",
      title: "Wedding Decoration",
      description:
        "Our talented decorators will create stunning setups and themes to transform your wedding venue.",
    },
    {
      imageSrc: "https://picsum.photos/id/1020/400/300",
      alt: "Wedding Planning Packages",
      title: "Wedding Planning Packages",
      description:
        "Choose from our comprehensive wedding planning packages that include everything you need for a seamless wedding experience.",
    },
    {
      imageSrc: "https://picsum.photos/id/1027/400/300",
      alt: "Wedding Planning Packages",
      title: "Wedding Planning Packages",
      description:
        "Choose from our comprehensive wedding planning packages that include everything you need for a seamless wedding experience.",
    },
    {
      imageSrc: "https://picsum.photos/id/1029/400/300",
      alt: "Wedding Planning Packages",
      title: "Wedding Planning Packages",
      description:
        "Choose from our comprehensive wedding planning packages that include everything you need for a seamless wedding experience.",
    },
  ];

    const arrangements = [
      {
        title: 'Consultation',
        description: 'I offer an initial consultation where you as a customer can discuss your vision, preferences, and requirements for your wedding decor. This consultation may take place in person, over the phone, or via email.',
      },
      {
        title: 'Design and Planning',
        description: 'I provide creative design ideas and suggestions based on your preferences and the overall theme of the wedding. I am here to assist in planning the decor layout, color schemes, floral arrangements, lighting, and other decorative elements.',
      },
      {
        title: 'Customization',
        description: 'In my wedding portfolio, you will find previous pictures you can choose from, including a space where you can explore different inspirations for your special day.',
      },
      {
        title: 'Setup and Installation',
        description: 'On the wedding day, I take care of the complete setup and installation of the decor. This includes setting up floral arrangements, drapery, centerpieces, lighting, and any other decorative elements.',
      },
      {
        title: 'Quality and Professionalism',
        description: 'I use high-quality materials and products to ensure that the decor looks elegant and withstands the duration of the event. I will promptly respond to inquiries, be punctual, and demonstrate excellent customer service.',
      },
      {
        title: 'Clear Pricing and Contracts',
        description: 'I will also provide transparent pricing information, including the cost of materials, labor, and any additional services. You will receive a detailed contract that outlines the scope of work, payment terms, cancellation policies, and any other relevant terms and conditions.',
      },
      {
        title: 'Post-Event Cleanup',
        description: 'After the wedding, my team and I will efficiently dismantle and remove all rented decor elements, ensuring that the venue is left clean and as it was before.',
      },
    ];
  

  return (
    <Layout>
      <Splash title="weddings" height="500px" src="https://images.unsplash.com/photo-1672395297065-25088a59e212?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" />
      
      <div className="container mx-auto my-16">
        <p className="mx-auto w-6/12 md:w-2/12 translate-y-4  md:translate-y-4 bg-white text-center text-2xl uppercase">
          What to Expect
        </p>
        <div className="mx-auto w-10/12 border-b-2" />
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-10">
        {arrangements.map((arrangement, index) => (
          <li key={index} className="bg-white shadow p-6 rounded transition-all">
            <h2 className="text-xl uppercase font-medium mb-2">{arrangement.title}</h2>
            <p>{arrangement.description}</p>
          </li>
        ))}
      </ul>
       <div className="w-full shadsow-md mt-6 mb-3 rounded-lg">
        <iframe
            className="mx-auto w-[300px] h-[169px] md:w-[890px] md:h-[500px] rounded-lg shadow-md"
            src="https://www.canva.com/design/DAFik8-nFh8/view?embed"
            loading="lazy"
            allowFullScreen
            allow="fullscreen"
        ></iframe>
        </div>
      </div>
    </Layout>
  );
};

export default Weddings;
