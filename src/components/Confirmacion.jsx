import React from 'react';

export const Confirmacion = ({ reserva }) => {

    const res = reserva[reserva.length -1]
    console.log(res)
    return (
        <div className="col-md-6 mx-auto">
            <div className="p-4 mb-3 bg-body-secondary rounded-3">
                {
                    res && (
                        <div className="container-fluid py-5">
                            <h2>Confirmación de Reserva</h2>
                            <p>Nombre: {res.name}</p>
                            <p>Correo: {res.mail}</p>
                            <p>Teléfono: {res.telephone}</p>
                            <p>Fecha: {res.date}</p>
                            <p>Hora: {res.time}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};