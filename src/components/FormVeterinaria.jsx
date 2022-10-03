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
  const [citas, setCitas] = useState(citasLocalStorage);
  const expresionRegularfecha = (/^(0?[1-9]|[12][0-9]|3[01])[\/](0?[1-9]|1[012])[/\\/](19|20)\d{2}$/);
  const expresionRegularHora = (/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/);
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
  const validarNombre = (inputMascota) => {
    if(nombremascota.length<1){
      inputMascota.classList.add('is-invalid')
    }else{
      inputMascota.classList.remove('is-invalid')
      inputMascota.classList.add('is-valid')
    }
  }
    const validarNombreDueno = (inputDueno) => {
      if(nombredueno.length<1){
        inputDueno.classList.add('is-invalid');
      }else{
        inputDueno.classList.remove('is-invalid');
        inputDueno.classList.add('is-valid');
      }
  }
  const validarFecha = (inputFecha)=>{
    if(expresionRegularfecha.test(!inputFecha)){
    inputFecha.classList.add('is-invalid');
    }
    else{
      inputFecha.classList.remove('is-invalid');
      inputFecha.classList.add('is-valid');
    }
  }
  const validarHora = (inputHora)=>{
    if(expresionRegularHora.test(!inputHora)){
    inputHora.classList.add('is-invalid');
    }
    else{
      inputHora.classList.remove('is-invalid');
      inputHora.classList.add('is-valid');
    }
  }
  const validarSintoma = (inputSintoma) => {
    if(sintoma.length<1){
      inputSintoma.classList.add('is-invalid');
    }else{
      inputSintoma.classList.remove('is-invalid');
      inputSintoma.classList.add('is-valid');
    }}
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mb-3" controlId="formNombreMascota">
          <Form.Label column sm={2} className="fw-bold">
            Nombre de mascota
          </Form.Label>
          <Col sm={10}>
            <Form.Control required onChange={(e) =>{ setNombremascota(e.target.value);
            validarNombre(e.target)}}
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
            <Form.Control required onChange={(e) => {setNombredueno(e.target.value); validarNombreDueno(e.target)}}
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
                <Form.Control required onChange={(e) => {setFecha(e.target.value); validarFecha(e.target)}}
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
                <Form.Control required onChange={(e) => {setHora(e.target.value); validarHora(e.target)}}
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
            <Form.Control required
            onChange={(e) => {setSintoma(e.target.value); validarSintoma(e.target)}}
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
