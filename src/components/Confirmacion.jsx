import React from 'react';

function Agenda(props) {
  const { name, mail, telephone, date, time } = props.reserva;

  return (
    <div className='reserva'>
      <div className="col-md-6 mx-auto">
        <div className="p-4 mb-3 bg-body-secondary rounded-3">
          <div className="container-fluid py-5">
            <h2>Confirmación de Reserva</h2>
            <p>Nombre: {name}</p>
            <p>Correo: {mail}</p>
            <p>Teléfono: {telephone}</p>
            <p>Fecha: {date}</p>
            <p>Hora: {time}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export const Confirmacion = ({ reserva }) => {
  return (
    <div className="col-md-6 mx-auto">
      <div className="p-4 mb-3 bg-body-secondary rounded-3">
        <div className="container-fluid py-5">
          <h2>Confirmación de Reserva</h2>
          <p>Nombre: {reserva.name}</p>
          <p>Correo: {reserva.mail}</p>
          <p>Teléfono: {reserva.telephone}</p>
          <p>Fecha: {reserva.date}</p>
          <p>Hora: {reserva.time}</p>
        </div>
      </div>
    </div>
  );
};