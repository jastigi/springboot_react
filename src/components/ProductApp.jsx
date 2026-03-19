/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import { findAll } from "../services/ProductService";
import { ProductGrid } from "./ProductGrid";
import { ProductFrom } from "./ProductFrom";
import PropTypes from 'prop-types'

export const ProductApp = ({title}) => {

    const [products, setProducts] = useState([])

    const [productSelected, setProductSelected] = useState({
        id: 0,
        name: '',
        price: 0,
        description: ''
    })

    const getProducts = async ()=> {
        const result = await findAll();
        console.log(result);
        setProducts(result.data._embedded.products);
    }

    useEffect(() => {
        getProducts();
    }, []);

    const handlerAddProduct = (product) => {
        if(product.id > 0){
            setProducts(products.map(p => {
            if(p.id === product.id) {
                return {...product}
            } else return p;
        }));
        } else {
            setProducts([...products, {...product, id: new Date().getTime()}]);
        }
    }

    const handlerRemoveProduct = (id) => {
        console.log(id);
        setProducts(products.filter(product => product.id !== id));
    }

    const handlerUpdateProduct = (product) => {
        console.log(product);
        setProductSelected({...product});
    }

    return (
        <div className="container my-4">
            <h2>{title.text}</h2>
            <div className="row">
                <div className="col">
                    <ProductFrom handlerAdd={handlerAddProduct} productSelected={productSelected}/>
                </div>
                <div className="col">
                    {
                        products.length > 0? <ProductGrid products={products} handlerRemove={handlerRemoveProduct} handlerUpdate={handlerUpdateProduct}/>
                        : <div className="alert alert-warning">No hay productos en el sistema!</div>
                    }
                </div>
            </div>
        </div>
    )

}

ProductApp.propTypes = {
    title: PropTypes.string.isRequired
}
