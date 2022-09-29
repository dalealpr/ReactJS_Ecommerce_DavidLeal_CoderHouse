import React, { useEffect, useState } from 'react';
//Hook useParams (traer cont IdCategoria)
import { useParams } from "react-router-dom";
//Import SweetAlerts
import Swal from 'sweetalert2';
//Import Spinner
import FadeLoader from "react-spinners/FadeLoader";
import { productos } from '../../../stockProductos';
import { customPromise } from '../../../customPromise';
import ItemDetail from './intemDetail/itemDetail';
import Item2 from './intemDetail/item2';


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



    console.log(producto)

    return (

        <div className='ItemDetailContainer' style={styles.ItemDetailContainer} >

            <h2 style={styles.h2}>ItemDetailContainer</h2>

            {loading ?     
            
            <FadeLoader color="#ebc700" size={130} loading={loading} />:
            <Item2 item={producto}/>
            }

        </div>
    )
}

//ESTILOS CSS
const styles = {
    ItemDetailContainer: {
        width: '100%',
        padding: '30px 0px',
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