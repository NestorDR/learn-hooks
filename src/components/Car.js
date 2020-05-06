// rfcp→ o rsfp→
import React, {useEffect, useState} from 'react';
import { Button } from 'react-bootstrap';

const Car = () => {
  // Todos los hook comienzan con el prefijo "use"

  /*
    useState: Es el hook de React.Js que permite manejar estados dentro de un componente funcional.
      Sería el equivalente a this.state/state de un componente clase.
      Su uso devuelve un array donde la posición [0] es el valor de la variable, y la posición [1] es una función
        para actualizar el valor de la variable.
      Como parámetro de entrada recibe el valor inicial de la variable a almacenar en el estado.
  */
  const [carOn, setCarOn] = useState(false);
  const [countKm, setCountKm] = useState(0);

  /*
    useEffect: Es el hook de React.Js que permite encargarse de los efectos secundarios o colaterales en componentes
      funcionales. Equivale a componentDidMount, componentDidUpdate y componentWillUnmount combinados,
      de un componente clase.

      Al usar este hook, decimos a React.Js que el componente debe hacer algo después de renderizarse.

      Si el parámetro dependencies de useEffect
        1- Enumera propiedades/variables del estado, por ej. [carOn], se le está diciendo a React cuales
            propiedades/variables se tendrán en cuenta para disparar una nueva renderización.
            Actúa como componentDidMount y, componentDidUpdate tras haberse modificado esas propiedades/variables
        2- Es un array vacío, o sea [], useEffect actúa como componentDidMount, solo se ejecuta en la 1ª renderización
        3- No aparece, es decir se omite el array, useEffect se ejecuta en cada modificación de cualquiera de las
            propiedades/variables del estado o re-renderización, actuando como componentDidMount y componentDidUpdate
            (NO recomendado)

      Si en ussEffect se codifica un return, éste debe devolver una función, la cual se ejecutaría antes de una nueva
        renderización, que equivaldria a componentWillUnmount.
  */
  useEffect( () => {
      if (carOn) {
        const intervalId = setInterval(() => {
          setCountKm(countKm => countKm + 1);
        }, 1000);

        /*
          Si en ussEffect se codifica un return, éste debe devolver una función que equivaldria a componentWillUnmount.

          Así entonces el siguiente return provee una función, a ejecutarse previo a una nueva renderización,
            permitieno eliminar el timer de segundos y así evitar se sigan contando kilómetros
        */
        return () => {
          clearInterval(intervalId);
        };
      }
  }, [carOn]);

  const checkStateCar = () => {
    return (
      <div>
        <span>Automóvil </span>
        {
          carOn ?
            <span style={{color: 'green'}}>Encendido</span> :
            <span style={{color: 'red'}}>Apagado</span>
        }
        <span> - Kilometraje: <i>{countKm} km</i></span>
      </div>
    )};

  return (
    <div>
      <h4>Viajar</h4>
      { checkStateCar() }
      <p />
      <Button variant="secondary" onClick={() => setCarOn(!carOn)} >
        { carOn ? 'Detenernos' : 'Iniciar viaje' }
      </Button>
    </div>
  );
};


export default Car;