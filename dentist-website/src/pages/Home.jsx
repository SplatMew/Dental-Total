import Carousel from "../components/Carousel";
import { whatsapp_logo, dr_humberto, promo1, promo2, promo3 } from "../components/images";
import LocationMap from "../components/LocationMap";

const promoImages = [
  {image: "src/img/promos/promo1.jpg"},
  {image: 'src/img/promos/promo2.png'},
  {image: 'src/img/promos/promo3.jpg'},
];

const serviceImages = [
  {image:"src/img/servicios/ortodoncia.jpeg", link:"/services/ortodoncia"},
  {image:"src/img/servicios/implantes.jpeg", link:"/services/implantes"},
  {image:"src/img/servicios/blanqueamiento.jpg", link:"/services/blanqueamiento"},
  {image:"src/img/servicios/limpieza.jpeg", link:"/services/limpieza"},
  {image:"src/img/servicios/extraccion.png", link:"/services/extraccion"},
  {image:"src/img/servicios/protesis.jpg", link:"/services/protesis"},

];

const Home = () => {
  return (
    <div className="p-6">
      <Carousel 
      items={promoImages}
      settings={{slidesToShow: 1, slidesToScroll:1}}
      clickable={false}/>

      <h1 className="text-3xl sm:text-5xl khula-bold mt-10 mb-4 dental-title">
        ¡Bienvenido a Dental Total!
      </h1>
      <p className="text-2xl mb-6">
        El centro dental donde cuidamos de tu sonrisa.
      </p>

      <section className="flex justify-around items-center flex-col sm:flex-row">
        <div className="w-auto sm:w-100 lg:w-200 lg:text-2xl sm:text-xl">
          <p>
            Descripción general de la marca, e.g: Somos la red de clínicas
            odontológicas más grandes de Sinaloa.
          </p>
          <p className="mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="mt-2">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
          <p className="text-blue-500 mt-2">
            Procedimientos que se realizan, e.g: Ortodoncias, brackets, etc.
          </p>

          <div className=" flex items-center justify-center mt-6">
            <a
              href="https://web.whatsapp.com/send/?phone=%2B526671803379"
              target="_blank"
              rel="noopener noreferrer"
              className="cita-boton transition-colors duration-200 text-white px-4 py-2 flex items-center rounded-2xl shadow "
            >
              <img className="p-2 social-logos " src={whatsapp_logo} alt="" />
              Agenda en WhatsApp
            </a>
          </div>
        </div>

        <div className="">
          <img
            className="w-auto sm:w-100 lg:w-200 rounded-4xl mt-10 sm:mt-0"
            src={dr_humberto}
            alt="dr humberto"
          />
        </div>
      </section>

      <section className="mt-10 flex justify-around flex-col">
        <h1 className="text-3xl sm:text-5xl khula-bold mt-10 mb-4 dental-title">Nuestros Servicios</h1>
        <Carousel
          items={serviceImages}
          settings={{slidesToShow:4, slidesToScroll: 4, responsive:[
            { breakpoint: 1024, settings:{slidesToShow:3 , slidesToScroll: 3} },
            { breakpoint: 768, settings:{slidesToShow:2, slidesToScroll: 2} },
            { breakpoint: 480, settings:{slidesToShow:1, slidesToScroll: 1} },
          ]}}
          clickable={true}
        />
      </section>

      <section className="mt-10">
        <LocationMap/>
      </section>
    </div>
  );
};

export default Home;
