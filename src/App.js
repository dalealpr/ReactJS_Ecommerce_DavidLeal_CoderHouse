import React from 'react';
// Import components
import Nav from './Components/Nav/Nav';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main';

function App() {
  return (
    <div style={styles.container} className='main-container'>
      <Nav />
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
      'header'
      'main'
      'footer'
    `
  }
}

export default App;
