/* eslint-disable @next/next/no-img-element */
import Layout from "~/components/Layout";

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

  return (
    <Layout>
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1496661415325-ef852f9e8e7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1827&q=80" // Replace with actual stock image URL
          className="h-[500px] w-full object-cover opacity-80 hue-rotate-15 filter"
        />
      </div>
      <div className="container mx-auto my-16">
        <h1 className="mb-8 text-center text-4xl uppercase ">Weddings</h1>
        <p className="mx-auto w-2/12 translate-y-3 bg-white text-center text-lg uppercase">
          What to Expect
        </p>
        <div className="mx-auto w-10/12 border-b-2" />
        <p className="p-32 indent-3 italic">
          Weddings are one of the most significant events in a couple's life as
          it marks the beginning of their journey together as partners. it is a
          celebration of love, commitment, and the bond shared between two
          people. weddings bring families and friends together, making it an
          occasion to cherish and remember forever. consequently, it is
          essential to ensure that every aspect of the wedding goes smoothly and
          is executed to perfection. this is where a professional wedding
          planner, like kristen hatch, comes into the picture. a skilled and
          experienced wedding planner will take care of everything, from
          decorations to transportation and food, ensuring that the wedding
          ceremony and reception run smoothly. hiring a professional wedding
          planner like kristen hatch can prove to be beneficial in many ways.
          firstly, it saves the bride and groom time and energy, which can be
          tedious and stressful. secondly, a wedding planner has vast knowledge,
          experience, and resources to ensure that every aspect of the wedding
          is taken care of. lastly, a wedding planner can ensure that everything
          fits within your budget, giving you the best possible service, with
          the most value for your money. in conclusion, weddings are significant
          events that require careful planning and execution to ensure that
          everything goes perfectly. with kristen hatch's services, you can rest
          assured that every aspect of your wedding, from the smallest detail to
          the grandest plan, will be taken care of with the utmost
          professionalism and expertise.
        </p>
      </div>
    </Layout>
  );
};

export default Weddings;
