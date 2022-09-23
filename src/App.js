import React from 'react';
//Import Components
import Nav from './Components/nav/Nav';
import Header from './Components/header/Header';
import MainIndex from './Components/mainIndex/MainIndex';

function App() {

  // mensaje ItemList
  const mensaje = "ItemListContainer"

  // //Funcion onAdd Agregar al carrito
  // const onAdd = (count) => {
  //   window.Swal = Swal

  //   Swal.fire({
  //     position: 'top-end',
  //     icon: 'success',
  //     title: count + ' Producto(s) Agregado(s)',
  //     showConfirmButton: false,
  //     timer: 1500
  //   })
  // }

  return (
    <div className="main-container">
      <Nav />
      <Header />
      <MainIndex greeting={mensaje} />
    </div>
  );
}

//Estilos CSS
const styles = {
  mainConteiner: {
    display: 'grid',
    gridTemplateAreas:
      `
      'nav'
      'header'
      'item-count'
    `,
  }
}

export default App;
