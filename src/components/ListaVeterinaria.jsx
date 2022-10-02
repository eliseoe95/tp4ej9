import { ListGroup, Row } from "react-bootstrap";
import ItemLista from "./ItemLista";

const ListaVeterinaria = ({citas, borrarCita}) => {
    return (
        <>
        <h1 className="text-center">Citas</h1>
        <ListGroup>
                <Row>
            {
                citas.map((cita,index)=><ItemLista key={index} borrarCita={borrarCita} cita={cita}></ItemLista>)
            }
            </Row>
        </ListGroup>  
        </>
    );
};

export default ListaVeterinaria;