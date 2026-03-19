import { ProductDetail } from "./ProductDetail"
import PropTypes from 'prop-types'

export const ProductGrid = ({products = [], handlerRemove, handlerUpdate}) => {
    return (
       <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Descripción</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product) => {
                    return (<ProductDetail key={product.name} product={product} handlerRemove={handlerRemove} handlerUpdate={handlerUpdate}/>)
                })}
            </tbody>
        </table>
    )
}

ProductGrid.propTypes = {
    products: PropTypes.array.isRequired,
    handlerRemove: PropTypes.func.isRequired,
    handlerUpdate: PropTypes.func.isRequired
}
