import Carousel from "../components/Carousel";

const Home = () => {
  const images = [
    "https://via.placeholder.com/800x400?text=Treatment+1",
    "https://via.placeholder.com/800x400?text=Treatment+2",
    "https://via.placeholder.com/800x400?text=Treatment+3"
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Bienvenido a Dental Total</h1>
      <p className="mb-6">Hacemos un trabajo bucal excelente, contamos con años de experiencia</p>
      
      <Carousel images={images} />

      <div className="mt-6">
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600"
        >
          Agenda en WhatsApp
        </a>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-bold mb-2">Ubicaciones</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!..."
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Home;
