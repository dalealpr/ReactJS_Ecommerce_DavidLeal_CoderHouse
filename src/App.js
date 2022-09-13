import React from 'react';
//Import SwweetAlert
import Swal from 'sweetalert2';
// Import components
import Nav from './Components/Nav/Nav';
import ItemListContainer from './Components/Containers/ItemListContainer';
import ItemCount from './Components/Containers/ItemCount';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main';



function App() {

  // mensaje ItemList
  const mensaje = "Hola a todos los que visitan este sitio Web"

  //Funcion onAdd Agregar al carrito
  const onAdd = (count) => {
    window.Swal = Swal

    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: count + ' Producto(s) Agregado(s)',
      showConfirmButton: false,
      timer: 1500
    })
  }

  return (
    <div style={styles.container} className='main-container'>
      <Nav />
      <ItemListContainer greeting={mensaje} />
      <ItemCount stock={7} initial={1} onAdd={onAdd} />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}


//ESTILOS CSS
const styles = {
  //Contenedor Principal de la Pagina
  container: {
    display: 'grid',
    gridTemplateAreas:
      `
      'nav'
      'item-list'
      'item-count'
      'header'
      'main'
      'footer'
    `
  }
}

export default App;
