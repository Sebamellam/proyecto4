import React from 'react'

export const Info = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="p-4 mb-3 bg-body-secondary rounded-3">
            <div className="container-fluid py-5">
              <h1 className="display-6 fw-bold">Visita nuestra tienda</h1>
              <p className="fs-5">Dirección: Pedro de valdivia 1423, Providencia. Santiago, Chile..</p>
              <p className="fs-5">Teléfono: 22 569 4326.</p>
              <p className="fs-5">Correo: ventas@kapodipelo.cl.</p>
              <p className="fs-5">Horario: 10:00 a 18:00 horas.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3189.461769536567!2d-70.60928648434144!3d-33.43537748085912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c61d5a127c07%3A0xc1aaddc9d4c9471c!2sYour%20Business%20Location!5e0!3m2!1sen!2sus!4v1632156636231!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
