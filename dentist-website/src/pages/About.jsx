import { doctor1, whatsapp_logo, dr_humberto } from "../components/images";

const About = () => {
  return (
    <div className="space-y-6 pr-6 pl-6">
      <h1 className="text-3xl sm:text-5xl khula-bold mt-10 dental-title">
        ¡Bienvenido a Dental Total!
      </h1>
      <h2 className="khula-semibold text-2xl lg:text-3xl text-blue-600 leading-snug mb-4">
           El centro dental donde cuidamos de tu sonrisa
          </h2>

      <section className="flex justify-around items-center flex-col sm:flex-row">
        <div className="w-auto sm:w-100 lg:w-200 lg:text-2xl sm:text-xl space-y-6">
          <p>
            En Dental Total trabajamos con pasión y compromiso para cuidar la
            salud bucal de las familias en Culiacán, Sinaloa.
          </p>
          <p>
            Fundada por el odontólogo profesional Humberto Chavarría, nuestra
            cadena de clínicas cuenta con más de 10 años de experiencia
            brindando atención integral y de calidad a nuestros pacientes.{" "}
          </p>
          <p>
            Nuestro objetivo es ofrecer tratamientos dentales modernos,
            accesibles y personalizados, respaldados por un equipo de
            especialistas altamente capacitados y la más avanzada tecnología. En
            Dental Total creemos que una sonrisa saludable abre puertas, y por
            eso ponemos al alcance de todos una atención cálida, honesta y
            profesional.
          </p>
        </div>

        <div className="">
          <img
            className="w-auto sm:w-100 lg:w-200 rounded-4xl mt-10 sm:mt-0"
            src={dr_humberto}
            alt="dr humberto"
          />
        </div>
      </section>

      <div className=" border-b-1 border-blue-500"></div>

      <section className="flex justify-around items-center flex-col sm:flex-row">
        <div className="w-auto sm:w-100 lg:w-200 lg:text-2xl sm:text-xl space-y-6">
          <p>
            En Dental Total cada tratamiento refleja nuestra filosofía: ofrecer
            soluciones personalizadas que mejoren la salud, la estética y la
            confianza de nuestros pacientes. Por eso contamos con un amplio
            abanico de servicios diseñados para cubrir todas las necesidades de
            cuidado dental en un solo lugar.
          </p>
          <p>
            Brindamos atención especializada en ortodoncia, endodoncia, resinas,
            diseño de sonrisa y blanqueamientos, siempre priorizando la
            comodidad y la seguridad del paciente.
          </p>

          <p>
            {" "}
            También realizamos extracciones dentales, colocamos coronas,
            prótesis removibles y fijas, así como el cambio de ligas, todo con
            los más altos estándares de calidad y tecnología.
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
            src={doctor1}
            alt="dr humberto"
          />
        </div>
      </section>
    </div>
  );
};

export default About;
