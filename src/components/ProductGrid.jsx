import { ProductDetail } from "./ProductDetail"
import PropTypes from 'prop-types'

export const ProductGrid = ({products = []}) => {
    return (
       <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Descripción</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product) => {
                    return (<ProductDetail key={product.name} product={product} />)
                })}
            </tbody>
        </table>
    )
}

ProductGrid.propTypes = {
    products: PropTypes.array.isRequired
}
