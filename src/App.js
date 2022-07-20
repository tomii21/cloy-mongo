import React, {useEffect, useState} from 'react';
import './App.css';

const App = () => {
  const [producto, setProducto] = useState ([]);
  useEffect (() => {
    const getData = () => {
      fetch ('http://localhost:3001')
        .then (res => res.json ())
        .then (data => setProducto (data))
        .catch (error => console.log (error));
    
    };
    getData ();
  }, []);
  console.log(producto)
    return (
    <div className="App">
      {
        producto.map(prod=>(
          <div key={prod._id}>

          <h1>{prod.titulo}</h1>
          <p>{prod.Talle}</p>
          <p>{prod.Color}</p>
          <p>{prod.Precio}</p>
      
          {
            
            prod.Imagenes.map(imagen=>
              (
              <img style={{width:50}} src={require(`./images/${imagen}`)} alt={imagen} />   
            ))
          }
          </div>
        ))
      }
      
  
    </div>
  );
};
export default App;
