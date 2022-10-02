import { Card, Button, Col, Row } from "react-bootstrap";

const ItemLista = ({cita,borrarCita}) => {
    return (
        <Col md={4} className='my-3'>  
            <Card>
            <Card.Body>
            <Card.Title>
            <Row className="d-flex align-content-center">
                <Col  sm={4}>
                <Card.Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-_VaMYrAA155tcx1R3z4jpYVo39xIh0uVeg&usqp=CAU"></Card.Img>
                </Col>
                <Col sm={8}>
                <Card.Text>
                Mascota:{cita.nombremascota}
                <br/>
                Dueño:{cita.nombredueno}
                </Card.Text>
                </Col>
                </Row>
            </Card.Title>
              <ul>
              <li >Nombre de Mascota: {cita.nombremascota} </li>
              <li >Nombre de Dueño:{cita.nombredueno} </li>
              <li >Fecha: {cita.fecha}</li>
              <li >Hora: {cita.hora}</li>
              <li >Sintoma:{cita.sintoma}</li>
              </ul>
              <div className="d-flex justify-content-center">
            <Button onClick={()=>borrarCita(cita)} className="my-2 btn-sm" variant="danger">
              Borrar
            </Button>
              </div>
            </Card.Body>
            </Card>
        </Col>
    );
};

export default ItemLista;