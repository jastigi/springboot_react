import { useEffect, useState } from "react";
import { listProducts } from "../services/ProductService";
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

    useEffect(() => {
        const result = listProducts();
        console.log(result);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        setProducts(result);
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
        <div>
            <h1>{title.text}</h1>
            <div>
                <ProductFrom handlerAdd={handlerAddProduct} productSelected={productSelected}/>
            </div>
            <div>
                <ProductGrid products={products} handlerRemove={handlerRemoveProduct} handlerUpdate={handlerUpdateProduct}/>
            </div>
        </div>
    )

}

ProductApp.propTypes = {
    title: PropTypes.string.isRequired
}
