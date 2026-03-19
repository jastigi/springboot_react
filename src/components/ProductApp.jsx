import { useEffect, useState } from "react";
import { listProducts } from "../services/ProductService";
import { ProductGrid } from "./ProductGrid";
import { ProductFrom } from "./ProductFrom";
import PropTypes from 'prop-types'

export const ProductApp = ({title}) => {

    const [products, setProducts] = useState([])

    const [productSelected, setProductSelected] = useState({
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
        console.log(product);
        setProducts([...products, {...product}]);
    }

    const handlerRemoveProduct = (name) => {
        console.log(name);
        setProducts(products.filter(product => product.name !== name));
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
