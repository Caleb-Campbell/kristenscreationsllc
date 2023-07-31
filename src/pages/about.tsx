/* eslint-disable @next/next/no-img-element */
import Layout from "~/components/Layout"
import Socials from "~/components/Socials"



const About = () => {

  const photos = [
    "https://i.ibb.co/8Y9yVwq/f.jpg",
    "https://i.ibb.co/7VVYdmT/b.jpg",
    "https://i.ibb.co/fSPrjqx/c.jpg",
    "https://i.ibb.co/qp7N6CZ/d.jpg",
    "https://i.ibb.co/RNHPjh7/e.jpg",
    // "https://i.ibb.co/8x07XRC/g.jpg",
    "https://i.ibb.co/Hn0zx5H/h.jpg",
    // "https://i.ibb.co/4pps6DC/i.jpg",
    // "https://i.ibb.co/L01NSXy/j.jpg",
    // "https://i.ibb.co/NrBtctK/k.jpg",
    // "https://i.ibb.co/8XBc8fB/l.jpg",
    // "https://i.ibb.co/NC3CG8n/m.jpg",
  ];

    const images = [
      'https://via.placeholder.com/400x400',
      'https://via.placeholder.com/400x400',
      'https://via.placeholder.com/400x400',
      'https://via.placeholder.com/400x400',
      'https://via.placeholder.com/400x400',
      'https://via.placeholder.com/400x400',
      'https://via.placeholder.com/400x400',
    ]
  
    return (
      <Layout active='/about'>
        <img
          src="https://images.unsplash.com/photo-1527903868760-c4e2f19b68c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" // Replace with actual stock image URL
          className="h-[500px] w-full object-cover opacity-60  "
          alt="background image"
        />
          <div className="flex flex-col lg:my-[100px] items-center sm:flex-row sm:justify-center">
            <div className="lg:w-6/12 sm:w-12/12 flex my-10 flex-col gap-5 items-center justify-center">
              <p className="text-6xl">Kristen Hatch</p>
              <p className="italic text-3xl">professional showrunner</p>
              <p className="w-8/12 text-2xl">
              {`Hey there, I'm Kristen Hatch, the creative mind behind Kristen's Creations. I am so excited to share my love for floral and decor design with you. At Kristen's Creations, we specialize in bringing breathtaking beauty to parties, weddings, and all sorts of special events. From stunning floral arrangements to meticulously curated decor elements, I pour my heart and soul into every detail. But that's not all! I also offer small seasonal arrangements that add a touch of charm and joy to any space. Whether it's a cozy holiday gathering or a simple gesture of love, these arrangements are perfect for brightening up your day. With Kristen's Creations, you can expect personalized service, stunning designs, and a whole lot of passion. Let's create something magical together!`}
              </p>
            </div>
            <div className="sm:w-full lg:w-6/12 sm:h-[900px] lg:h-auto flex items-center justify-center">
              <img src="" className="w-full sm:w-6/12" />
            </div>
          </div>
        <Socials images={photos} />
      </Layout>
    )
  }
  

export default About