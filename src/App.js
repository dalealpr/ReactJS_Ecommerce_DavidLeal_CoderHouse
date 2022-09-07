import React from 'react';
// Import components
import Nav from './Components/Nav/Nav';
import ItemListContainer from './Components/Containers/ItemListContainer';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main';


function App() {
  // mensaje ItemList
  const mensaje = "Hola a todos los que visitan este sitio Web"

  return (
    <div style={styles.container} className='main-container'>
      <Nav />
      <ItemListContainer greeting={mensaje}/>
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
      'header'
      'main'
      'footer'
    `
  }
}

export default App;
