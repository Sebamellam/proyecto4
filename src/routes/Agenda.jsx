import { useEffect, useState } from "react"
import { db } from "../firebase"
import { getDocs, collection, addDoc, deleteDoc, doc } from "firebase/firestore"
import Table from 'react-bootstrap/Table';
import { Button } from "react-bootstrap";
import { Confirmacion } from "../components/Confirmacion";


export const Agenda = () => {
  const reservaCollectionRef = collection(db, 'reserva')
  const [reserva, setReserva] = useState([])
  const [name, setName] = useState("")
  const [mail, setMail] = useState("")
  const [telephone, setTelephone] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")


  const getReservas = async () => {
    const data = await getDocs(reservaCollectionRef)
    setReserva(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
  }

  const creatReserva = async () => {
    await addDoc(reservaCollectionRef, { name, mail, telephone, date, time })
    getReservas()
  }

  const deleteReserva = async (id) => {
    const reservaDoc = doc(db, 'reserva', id)
    await deleteDoc(reservaDoc)
    getReservas()
  }

  useEffect(() => {
    getReservas()

  }, [])

  return (
    <>
    <h1>Reserva de hora</h1>
      <input
        type='string'
        placeholder='Name'
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type='string'
        placeholder='Mail'
        value={mail}
        onChange={(event) => setMail(event.target.value)}
      />
      <input
        type='string'
        placeholder='Telephone'
        value={telephone}
        onChange={(event) => setTelephone(event.target.value)}
      />
      <input
        type='string'
        placeholder='Date'
        value={date}
        onChange={(event) => setDate(event.target.value)}
      />
      <input
        type='string'
        placeholder='Time'
        value={time}
        onChange={(event) => setTime(event.target.value)}
      />
      <Button onClick={creatReserva} variant="success">Agregar</Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Mail</th>
            <th>Telephone</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {
            reserva.map(reserva => (
              <tr key={reserva.id}>
                <td>{reserva.name}</td>
                <td>{reserva.mail}</td>
                <td>{reserva.telephone}</td>
                <td>{reserva.date}</td>
                <td>{reserva.time}</td>
                <td>
                  <Button variant="warning">Edit</Button>
                  <Button onClick={() => { deleteReserva(reserva.id) }} variant="danger">Delete</Button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
      <Confirmacion reserva={reserva}/>
    </>
  )
}
