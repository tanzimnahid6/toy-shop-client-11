
function ImageGallery() {
  const images = [
    "https://i.ibb.co/dJX4wk7/mt2.jpg",
    "https://i.ibb.co/CVR2sNd/istockphoto-477865381-612x612.jpg",
    "https://i.ibb.co/7bYf4XY/istockphoto-1218816023-612x612.jpg",
    "https://i.ibb.co/yVNj4LB/700618669-max.jpg",
    "https://i.ibb.co/ScLGSWt/pexels-mihis-alex-21014.jpg",
    "https://i.ibb.co/tCK5Xfz/pexels-cottonbro-studio-7540482.jpg",
    // Add more image URLs here
  ];

  return (
    <div className="grid grid-cols-1 place-items-center md:grid-cols-3 gap-2 ">
      {images.map((image, index) => (
        <div
          key={index}
          className="relative overflow-hidden hover:scale-110 p-2     transform transition-transform duration-300 ease-in-out"
        >
          <img
            src={image}
            alt={`Image ${index + 1}`}
            className=" w-72 h-64 md:w-96 md:h-80 rounded-lg  object-cover"
          />
        </div>
      ))}
    </div>
  );
}

export default function Gallery2() {
  return (
    <div className="container text-center mt-8  mx-auto p-4">
      <h1 className="text-3xl text-center my-8    font-bold bg-gradient-to-r from-indigo-500 to-red-600 text-transparent bg-clip-text mb-4">Our Monster Toy</h1>
      <ImageGallery />
    </div>
  );
}
