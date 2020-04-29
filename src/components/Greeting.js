// rfcp→ o rsfp→
import React, {useState} from 'react';
import * as PropTypes from 'prop-types';

import { Accordion, Button, Card } from 'react-bootstrap';

const Greeting = ({fnGreet}) => {
  // Todos los hook comienzan con el prefijo "use"

  /*
    useState: Es el hook de React.Js que permite manejar estados dentro de un componente funcional.
      Sería el equivalente a this.state/state. Su uso devuelve un array donde la posición [0] es el valor de la
      variable, y la posición [1] es una función para actualizar el valor de la variable.
      Como parámetro de entrada recibe el valor inicial de la variable a almacenar en el estado.
  */
  const [ visibleGreet, setVisibleGreet ] = useState(false);

  let seed = new Date().getMilliseconds();

  return (
    <div>
      <Button variant="primary"
              onClick={() => {
                setVisibleGreet(!visibleGreet)
              }}>
        {visibleGreet ? 'Ocultar saludo' : 'Saludar'}
      </Button>
      {
        visibleGreet ? fnGreet(seed).alert : <p />
      }
      <Accordion defaultActiveKey>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            <h6>Un saludo oculto (acordeón)</h6>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>{fnGreet(new Date().getMilliseconds()).greeting}</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            <h6>Otro Un saludo oculto (acordeón)</h6>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>{fnGreet(new Date().getMilliseconds() / 2).greeting}</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

Greeting.propTypes = {
  fnGreet: PropTypes.func.isRequired,
};

export default Greeting;