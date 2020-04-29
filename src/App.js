import React, {useEffect, useState} from 'react';
import './App.css';
import {Alert} from 'react-bootstrap';

import Car from './components/Car';
import Family from './components/Family';
import Greeting from './components/Greeting';
import Loading from './components/Loading';
// Usar un SVG como si fuera un componente
import {ReactComponent as ReactLogo} from './assets/logo.svg';

function App() {
  const style = {
    width: 40,
    height: 40
  };

  const data = {
    title: 'Cargando...',
    timeOut: 2
  };

  const members = [
    {name: 'Nestor', age: 49},
    {name: 'Rocío', age: 41},
    {name: 'Mafalda', age: 6},
    {name: 'Pirula', age: 3}];

  const alertVariants = [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark'
  ];

  // Todos los hook comienzan con el prefijo "use"

  /*
    useState: Es el hook de React.Js que permite manejar estados dentro de un componente funcional.
      Sería el equivalente a this.state/state. Su uso devuelve un array donde la posición [0] es el valor de la
      variable, y la posición [1] es una función para actualizar el valor de la variable.
      Como parámetro de entrada recibe el valor inicial de la variable a almacenar en el estado.
  */
  const [waiting, setWaiting] = useState(true);

  /*
    useEffect: Es el hook de React.Js que permite llevar a cabo efectos secundarios en componentes funcionales.
      Equivale a componentDidMount, componentDidUpdate y componentWillUnmount combinados.

      Al usar este hook, decimos a React.Js que el componente debe hacer algo después de renderizarse.

      Si el parámetro dependencies de useEffect
        1- Enumera propiedades/variables del estado, por ej. [waiting], se le está diciendo a React cuales
            propiedades/variables se tendrán en cuenta para disparar una nueva renderización.
            Actúa como componentDidMount y, componentDidUpdate tras haberse modificado esas propiedades/variables
        2- Es un array vacío, o sea [], useEffect actúa como componentDidMount, solo se ejecuta en la 1ª renderización
        3- No aparece, es decir se omite el array, useEffect se ejecuta en cada modificación de cualquiera de las
            propiedades/variables del estado o re-renderización, actuando como componentDidMount y componentDidUpdate (NO
            recomendado)
  */
  useEffect( () => {
    document.title = waiting ? 'Esperando...' : 'Aprendiendo React';

    setTimeout(() => setWaiting(false), data.timeOut * 1000);
    
  }, [waiting]);

  const greet = seed => {
    // Inicializar objeto de respuesta vacío
    const response = {};

    // Visitar https://redstapler.co/javascript-random-number-between-range/

    // Seleccionar usuario aleatoriamente
    let randomIndex = Math.floor(Math.random(seed) * members.length);
    response.greeting = `Hola ${members[randomIndex].name}`;
    // console.log(response.greeting);

    // Seleccionar variante de alerta aleatoriamente
    randomIndex = Math.floor(Math.random(seed) * alertVariants.length);
    response.alert =
      <div>
        <p />
        <Alert variant={alertVariants[randomIndex]}>
          {response.greeting}!
        </Alert>
        <p />
      </div>;
    // console.log(response.alert);

    return response;
  };

  return (
    <div className="App">
      <ReactLogo style={style}/>
      <h3 style={{display: 'inline'}}>Getting started React, Hooks & React-Bootstrap</h3>
      <ReactLogo style={style}/>
      {
        waiting
          ?
          <div>
            {/* Pasando en propiedades un objeto */}
            <Loading data={data}/>
          </div>
          :
          <div>
            {/* Pasando en propiedades un array */}
            <Family members={members}/>
            {/* Pasando en propiedades una función */}
            <Greeting fnGreet={greet}/>
            <p/>

            {/* Sin propiedades */}
            <Car />
          </div>
      }
    </div>
  );
}

export default App;
