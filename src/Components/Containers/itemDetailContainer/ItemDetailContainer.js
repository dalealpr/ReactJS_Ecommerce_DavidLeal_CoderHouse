import React, { useEffect, useState } from 'react';
//Import SweetAlerts
import Swal from 'sweetalert2';
//Import Spinner
import FadeLoader from "react-spinners/FadeLoader";
import stockProducts from "../../../stockProducts.json";
import ItemDetail from './intemDetail/itemDetail';

//Promesa
const promesa = new Promise((res, rej) => {
    res(stockProducts)
})

const ItemDetailContainer = () => {

    //State
    const [products, setProducts] = useState({})//es {} porque es un producto
    let [loading, setLoading] = useState(true);

        useEffect(() => {
            promesa
                .then((data) => {
                    setTimeout(() => {
                    setProducts(data[0])//Actualizacion del componente
                    setLoading(!loading)//Spinner
                    },2000)
                })
    
                .catch(() => {
                    console.error('esta todo mal')
                })
    
        }, [])

    return (
        <div className='ItemDetailContainer' style={styles.ItemDetailContainer} >
            <FadeLoader color="#ebc700" size={130} loading={loading}/>
            <h2  style={styles.h2}>ItemDetailContainer</h2>
            <ItemDetail item={products}/>
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

    h2:{
        color: 'white',
    }

}

export default ItemDetailContainer