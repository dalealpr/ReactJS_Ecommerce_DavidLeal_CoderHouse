import React from 'react';
//Import Router
import { BrowserRouter, Routes, Route, } from "react-router-dom";
//Import Components
import Nav from './Components/nav/Nav';
import Header from './Components/header/Header';
import ItemListContainer from './Components/containers/itemListContainer/ItemListContainer';
import Cart from './Components/cartView/Cart';
import Footer from './Components/footer/Footer';
import Home from './Components/home/Home';


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
      <BrowserRouter>
        <Nav />
        <Routes>
          {/* <Header /> */}
          <Route path='/' element={<Home/>} />
          <Route path='categoria/' />
          <Route path='productos/' element={<ItemListContainer/>}/>
          <Route path='/cart/'element={<Cart/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
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
      'prodList'
      'header'
      'mainIndex'
    `,
  }
}

export default App;
