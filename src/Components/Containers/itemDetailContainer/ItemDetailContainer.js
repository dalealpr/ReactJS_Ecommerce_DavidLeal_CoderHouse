import React, { useEffect, useState } from 'react';
//Hook useParams (traer cont IdCategoria)
import { useParams } from "react-router-dom";
//Import SweetAlerts
import Swal from 'sweetalert2';
//Import Spinner
import FadeLoader from "react-spinners/FadeLoader";
import { productos } from '../../../stockProductosX';
import { customPromise } from '../../../customPromise';
import ItemDetail from './intemDetail/itemDetail';


const ItemDetailContainer = () => {

    //State
    const [producto, setProducts] = useState([])
    let [loading, setLoading] = useState([true]);
    const { IdProducto } = useParams();
    console.log(IdProducto);

    //solucion 1
    useEffect(() => {
        customPromise(productos).then(respuesta => {
            setProducts(respuesta)
            setTimeout(() => {
                const IdProdParseado = parseInt(IdProducto)

                setLoading(false)
                const productoFiltrado = productos.filter(productos => productos.id === IdProdParseado)
                setProducts(productoFiltrado)
            }, 1000)
        })

    }, [IdProducto])


    //solucion 2
    // useEffect (() =>{
    //     customPromise (productos)
    //         .then (respuesta => {
    //             setProducts(respuesta(IdProducto))
    //             setLoading (false)
    //         })

    // }, [IdProducto]);


    console.log(producto)

    return (
        <div className='ItemDetailContainer' style={styles.ItemDetailContainer} >

            <h2 style={styles.h2}>ItemDetailContainer</h2>

            <FadeLoader color="#ebc700" size={130} loading={loading} />

            
            {producto.map((produ) => 
            <ItemDetail item={produ} />
            
            )}
            {/* <ItemDetail item={producto} /> */}

        </div>
    )
}

//ESTILOS CSS
const styles = {
    ItemDetailContainer: {
        width: 'max-width',
        padding: '30px',
        backgroundColor: 'black',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    h2: {
        color: 'white',
    }

}

export default ItemDetailContainer