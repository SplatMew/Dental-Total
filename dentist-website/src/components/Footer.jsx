import React from "react";
import { whatsapp_logo, facebook_logo } from "./images";
import logo from "../img/logos/dental-total-logo3.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className=" flex flex-col khula-regular text-2xl mt-6">
      <div className="p-6 flex flex-col sm:flex-row items-center justify-around space-y-3 border-b-2 border-t-2 border-blue-600 border- ">
        <div className=" flex items-center">
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

        <div className="flex flex-row justify-center items-center">
          <a
            className="flex flex-row items-center"
            href="https://www.facebook.com/profile.php?id=100064101213007"
          >
            <p className="hover:text-blue-400 khula-bold">Síguenos en</p>
            <img
              className="p-2 social-logos"
              src={facebook_logo}
              alt="facebook"
            />
          </a>
        </div>

        <a
          className=" hover:text-blue-400 khula-bold"
          href="https://web.whatsapp.com/send/?phone=%2B526671803379"
        >
          ¡Cuidamos de tu sonrisa!
        </a>
        <Link to="/">
          <img className="dental-total-logo" src={logo} alt="Logo" />
        </Link>
      </div>

      <div className="footer-background flex flex-col sm:flex-row items-center justify-around text-white p-6 space-y-6">
        <ul className="space-y-2 flex flex-col justify-center items-center">
          <li>
            <Link
              to="/servicios"
              className="hover:text-blue-400 transition-colors duration-200 khula-bold"
            >
              Servicios
            </Link>
          </li>
          <li>
            <Link
              to="/servicios"
              className="hover:text-blue-400 transition-colors duration-200 "
            >
              Implantes
            </Link>
          </li>
          <li>
            <Link
              to="/servicios"
              className="hover:text-blue-400 transition-colors duration-200 "
            >
              Ortodoncia
            </Link>
          </li>
          <li>
            <Link
              to="/servicios"
              className="hover:text-blue-400 transition-colors duration-200 "
            >
              Blanqueamiento
            </Link>
          </li>
          <li>
            <Link
              to="/servicios"
              className="hover:text-blue-400 transition-colors duration-200 "
            >
              Limpieza
            </Link>
          </li>

          <li>
            <Link
              to="/servicios"
              className="hover:text-blue-400 transition-colors duration-200 "
            >
              Endodoncia
            </Link>
          </li>
          <li>
            <Link
              to="/servicios"
              className="hover:text-blue-400 transition-colors duration-200 "
            >
              Extracción
            </Link>
          </li>

          <li>
            <Link
              to="/servicios"
              className="hover:text-blue-400 transition-colors duration-200 "
            >
              Prótesis
            </Link>
          </li>
        </ul>
        <ul className="space-y-2 flex flex-col justify-center items-center">
          <li>
            <Link
              to="/ubicaciones"
              className="hover:text-blue-400 transition-colors duration-200 khula-bold"
            >
              Ubicaciones
            </Link>
          </li>
          <li>
            <Link
              to="/servicios"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              Clínica 6 de Enero
            </Link>
          </li>
          <li>
            <Link
              to="/servicios"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              Clínica Escobedo
            </Link>
          </li>
          <li>
            <Link
              to="/servicios"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              Clínica Carrasco
            </Link>
          </li>
          <li>
            <Link
              to="/servicios"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              Clínica Rosales
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
