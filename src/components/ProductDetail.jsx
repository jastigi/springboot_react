import PropTypes from 'prop-types'

export const ProductDetail = ({product = {}, handlerRemove, handlerUpdate}) => {
    return (
        <tr>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.description}</td>
            <td>
                <button className="btn btn-secondary btn-sm" onClick={() => handlerUpdate(product)}>Actualizar</button>
                <button className="btn btn-danger btn-sm" onClick={() => handlerRemove(product.id)}>Eliminar</button>
            </td>
        </tr>
    )
}

ProductDetail.propTypes = {
    product: PropTypes.object.isRequired,
    handlerRemove: PropTypes.func.isRequired,
    handlerUpdate: PropTypes.func.isRequired
}