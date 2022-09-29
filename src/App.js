import React from 'react';
//Import Router
import { BrowserRouter, Routes, Route,Switch } from "react-router-dom";
//Import Components
import Nav from './Components/nav/Nav';
import Header from './Components/header/Header';
import ItemListContainer from './Components/containers/itemListContainer/ItemListContainer';
import Cart from './Components/cartView/Cart';
import Footer from './Components/footer/Footer';
import Home from './Components/home/Home';
import Nosotros from './Components/nosotros/Nosotros';  
import Contacto from './Components/contacto/Contacto';
import Usuario from './Components/usuario/Usuario';
import ItemDetailContainer from './Components/containers/itemDetailContainer/ItemDetailContainer';


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
          <Route path='/' element={<Home/>} />
          <Route path='nosotros' element={<Nosotros/>}/>
          <Route path='contacto' element={<Contacto/>}/>
          <Route path='usuario' element={<Usuario/>}/>
          <Route path='/cart'element={<Cart/>} />

          <Route path='/categoria/:IdCategoria' element={<ItemListContainer/>}/>
          <Route path='/item/:IdProducto' element={<ItemDetailContainer/>}/>

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
