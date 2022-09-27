import React, { useEffect, useState } from 'react';
import ItemList from './itemList/ItemList';
//Import SweetAlerts
import Swal from 'sweetalert2';
//Import Spinner
import FadeLoader from "react-spinners/FadeLoader";
//Import Lista de productos .JSON
import stockProducts from "../../../stockProducts.json";


//Promesa
const promesa = new Promise((res, rej) => {
    res(stockProducts)
})

const ItemListContainer = ({ greeting }) => {

    //State
    const [products, setProducts] = useState([])
    let [loading, setLoading] = useState(true);

    useEffect(() => {
        promesa
            .then((data) => {
                setTimeout(() => {
                console.log('esta todo bien')
                setProducts(data)//Actualizacion del componente
                setLoading(!loading)//Spinner
                },2000)
            })

            .catch(() => {
                console.log('esta todo mal')
            })

    }, [])

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
        <div className='ItemListContainer' style={styles.ItemListContainer}>
            <h2 style={styles.h1}>{greeting}</h2>

            <ItemList products={products} onAdd={onAdd} />
            <FadeLoader color="#ebc700" size={130} loading={loading}/>
        </div>
    )
}

//ESTILOS CSS
const styles = {
    ItemListContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px 0',
    },

    h1: {
        padding: '10px 0',
        color: 'black',
    }

}

export default ItemListContainer