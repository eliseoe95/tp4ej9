import ListaVeterinaria from './ListaVeterinaria'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import { useEffect, useState } from 'react'

const FormVeterinaria = () => {
  
  const [nombremascota, setNombremascota] = useState('')
  const [nombredueno, setNombredueno] = useState('')
  const [fecha, setFecha] = useState('')
  const [hora, setHora] = useState('')
  const [sintoma, setSintoma] = useState('')
  const citasLocalStorage = JSON.parse(localStorage.getItem('citas')) || [];
  const [citas, setCitas] = useState(citasLocalStorage)
  const handleSubmit = (e) => {
    e.preventDefault()
    let cita = {
      nombremascota,
      nombredueno,
      fecha,
      hora,
      sintoma
    }
    console.log(cita)
    setCitas([...citas,cita])
    console.log(citas)
    setNombremascota('')
    setNombredueno('')
    setFecha('')
    setHora('')
    setSintoma('')
  }
  useEffect(()=>{
    localStorage.setItem('citas',JSON.stringify(citas))
  },[citas])
  const borrarCita = (cita)=>{
    let nuevoCitas = citas.filter((item)=>item !== cita);
    setCitas(nuevoCitas);
  }
  let mensaje = '';
  if(citas.length===0){
    mensaje=('No hay citas cargadas');
  }else{
    mensaje='';
  }
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mb-3" controlId="formNombreMascota">
          <Form.Label column sm={2} className="fw-bold">
            Nombre de mascota
          </Form.Label>
          <Col sm={10}>
            <Form.Control onChange={(e) => setNombremascota(e.target.value)}
              value={nombremascota} type="text" placeholder="nombre de la mascota" />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          sm={2}
          className="mb-3"
          controlId="formNombreDueño"
        >
          <Form.Label column sm={2} className="fw-bold">
            Nombre de dueño
          </Form.Label>
          <Col sm={10}>
            <Form.Control onChange={(e) => setNombredueno(e.target.value)}
              value={nombredueno} type="text" placeholder="nombre de dueño" />
          </Col>
        </Form.Group>
        <Row>
          <Col md={6}>
            <Form.Group as={Row} className="mb-3" controlId="formFechayHora">
              <Form.Label column sm={4} className="fw-bold">
                Fecha
              </Form.Label>
              <Col sm={8}>
                <Form.Control onChange={(e) => setFecha(e.target.value)}
              value={fecha} type="date" placeholder="dd/mm/vvvv" />
              </Col>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group as={Row}>
              <Form.Label column sm={4} className="fw-bold">
                Hora
              </Form.Label>
              <Col sm={8}>
                <Form.Control onChange={(e) => setHora(e.target.value)}
              value={hora} type="time" placeholder="hh:mm" />
              </Col>
            </Form.Group>
          </Col>
        </Row>
        <Form.Group as={Row} className="mb-3" controlId="formSintomas">
          <Form.Label column sm={2} className="fw-bold">
            Sintomas
          </Form.Label>
          <Col sm={10}>
            <Form.Control
            onChange={(e) => setSintoma(e.target.value)}
            value={sintoma}
              sm={10}
              type="text"
              placeholder="describir sintomas"
            />
          </Col>
        </Form.Group>
        <div className="d-flex justify-content-center">
          <Button variant="primary" type="submit">
            Agregar nueva cita
          </Button>
        </div>
      </Form>
      <ListaVeterinaria citas={citas} borrarCita={borrarCita} ></ListaVeterinaria>
      <p className='text-center fw-bold'>{mensaje}</p>
    </Container>
  )
}

export default FormVeterinaria
