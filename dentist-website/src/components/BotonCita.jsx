import React from 'react'
import { whatsapp_logo } from './images'

function BotonCita() {
  return (
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
  )
}

export default BotonCita