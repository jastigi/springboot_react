import PropTypes from 'prop-types'

export const ProductDetail = ({product = {}, handlerRemove, handlerUpdate}) => {
    return (
        <tr>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.description}</td>
            <td>
                <button className="btn btn-warning" onClick={() => handlerUpdate(product)}>Actualizar</button>
                <button className="btn btn-danger" onClick={() => handlerRemove(product.id)}>Eliminar</button>
            </td>
        </tr>
    )
}

ProductDetail.propTypes = {
    product: PropTypes.object.isRequired,
    handlerRemove: PropTypes.func.isRequired,
    handlerUpdate: PropTypes.func.isRequired
}