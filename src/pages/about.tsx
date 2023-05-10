/* eslint-disable @next/next/no-img-element */
import Layout from "~/components/Layout"



const About = () => {

    const images = [
      'https://via.placeholder.com/400x400',
      'https://via.placeholder.com/400x400',
      'https://via.placeholder.com/400x400',
      'https://via.placeholder.com/400x400',
      'https://via.placeholder.com/400x400',
      'https://via.placeholder.com/400x400',
    ]
  
    return (
      <Layout>
        <div className="relative">
          <img className="w-full h-auto" src="/splash.jpg" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <div className="max-w-2xl w-full p-6 bg-white shadow-md rounded-lg">
            <div className="flex flex-col items-center justify-center mb-12 m-10 md:flex-row">
              <img
                className="w-34 h-34 object-cover rounded-full"
                src="https://via.placeholder.com/150"
                alt="Profile Picture"
              />
              <div className="mt-4 md:ml-4 md:mt-0">
                <h2 className="text-3xl font-medium">Kristen Hatch</h2>
                <p className="text-gray-500">Your Party Guru</p>
              </div>
            </div>
            <p className="text-gray-700 leading-loose mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis exercitationem vero, necessitatibus consequuntur molestias enim delectus voluptas, magni ab adipisci nostrum voluptatem beatae facere sapiente vel error dolore quod dolorem.
            </p>
            <p className="text-gray-700 leading-loose mb-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et corrupti nobis blanditiis suscipit eos at accusantium quae sint, culpa, veniam laudantium numquam voluptatibus itaque libero? Non soluta ratione amet rem!
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {images.map((image) => {
                return (
                  <img
                    key={image}
                    className="w-full h-64 object-cover"
                    src={image}
                    alt=""
                  />
                )
              })}
            </div>
          </div>
        </div>
      </Layout>
    )
  }
  

export default About