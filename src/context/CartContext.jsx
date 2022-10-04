import React, {useState, useContext} from "react";
import { productos } from "../stockProductos";
const CartContext = React.createContext([])

export const useCartContext = () => useContext(CartContext)


const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

//FUNCIONES PARA EL CARRITO 
//Agregar al carrito
const agregarProducto = (item,stock)=>{
    if(estaEnElCarrito(item.id)){
        setCart(cart.map(product => {
            return product.id === item.id ? {...product, stock:product.stock+stock} : product
        }))
    } else {
        setCart([...cart,{...item,stock}])
    }
}

//Limpiar Carrito
const limpiarCarrito = () => setCart([])

//Esta en el carrito
const estaEnElCarrito = (id) => cart.find(product => product.id === id)? true : false

//Borrar del carrito
const borrarProducto = (id) => setCart(cart.filter(product => product.id !== id))




    return(
        <CartContext.Provider value={{
            limpiarCarrito,
            estaEnElCarrito,
            borrarProducto,
            agregarProducto

        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;
