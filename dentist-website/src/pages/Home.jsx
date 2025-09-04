import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import { promoImages, serviceImages } from "../components/dataExports";
import {
  whatsapp_logo,
  dr_humberto,
  promo1,
  promo2,
  promo3,
} from "../components/images";
import LocationMap from "../components/LocationMap";




const Home = () => {
  return (
    <div className=" space-y-10">
      <div className="p-6">
        <Carousel
          items={promoImages}
          settings={{ slidesToShow: 1, slidesToScroll: 1 }}
          clickable={false}
        />

        <h1 className="text-3xl sm:text-5xl khula-bold mt-10 mb-4 dental-title">
          ¡Bienvenido a Dental Total!
        </h1>
        <p className="khula-regular text-2xl lg:text-3xl leading-snug mb-4">
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
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
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
          <h2 className="text-3xl sm:text-5xl khula-bold mt-10 mb-4 dental-title">
            Nuestros Servicios
          </h2>
          <Carousel
            items={serviceImages}
            settings={{
              slidesToShow: 4,
              slidesToScroll: 4,
              responsive: [
                {
                  breakpoint: 1024,
                  settings: { slidesToShow: 3, slidesToScroll: 3 },
                },
                {
                  breakpoint: 768,
                  settings: { slidesToShow: 2, slidesToScroll: 2 },
                },
                {
                  breakpoint: 480,
                  settings: { slidesToShow: 1, slidesToScroll: 1 },
                },
              ],
            }}
            clickable={true}
          />
        </section>

        <section className="mt-10">
          <h3 className="text-3xl sm:text-5xl khula-bold mt-10 mb-4 dental-title">
            Nuestras Clínicas
          </h3>
          <p className="khula-regular text-2xl lg:text-3xl leading-snug mb-4">
            Estamos donde tú estás, porque tu sonrisa lo vale.
          </p>

          <LocationMap />
        </section>
      </div>
    </div>
  );
};

export default Home;
