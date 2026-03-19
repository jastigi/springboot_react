import { useEffect, useState } from "react";
import { listProducts } from "../services/ProductService";
import { ProductGrid } from "./ProductGrid";
import { ProductFrom } from "./ProductFrom";
import PropTypes from 'prop-types'

export const ProductApp = ({title}) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const result = listProducts();
        console.log(result);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        setProducts(result);
    }, []);

    return (
        <div>
            <h1>{title.text}</h1>
            <div>
                <ProductFrom />
            </div>
            <div>
                <ProductGrid products={products} />
            </div>
        </div>
    )

}

ProductApp.propTypes = {
    title: PropTypes.string.isRequired
}
