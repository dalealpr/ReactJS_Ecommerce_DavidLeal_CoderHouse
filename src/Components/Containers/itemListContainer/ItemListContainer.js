import React, { useEffect, useState, } from 'react';
import ItemList from './itemList/ItemList';
import { customPromise } from '../../../customPromise';
//Import SweetAlerts
import Swal from 'sweetalert2';
//Import Spinner
import FadeLoader from "react-spinners/FadeLoader";
import { productos } from '../../../stockProductos';
//Hook useParams (traer cont IdCategoria)
import { useParams } from "react-router-dom";


//Funcion Componente "ItemListContainer"
const ItemListContainer = ({ greeting }) => {

    let { IdCategoria } = useParams()


    //State
    const [products, setProducts] = useState([])
    let [loading, setLoading] = useState([true]);

    useEffect(() => {
        customPromise(productos).then(respuesta => {
            setProducts(respuesta)
            if (IdCategoria) {
                setLoading(false)
                const productosFiltrados = productos.filter(productos => productos.categoria === IdCategoria)
                setProducts(productosFiltrados)
                console.log(productosFiltrados)
            } else {
                setTimeout(() => {
                    // setProducts(respuesta)
                    setLoading(false)
                    setProducts(productos)
                }, 1000)
            }
        })
    }, [IdCategoria])


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
            {loading ?
                <FadeLoader color="#ebc700" size={130} loading={loading} />
                :
                <ItemList products={products} onAdd={onAdd} />
            }
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