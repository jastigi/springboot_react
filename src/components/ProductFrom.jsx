import { useState, useEffect } from "react"
import PropTypes from 'prop-types'

const initialDataForm = {
    id: 0,
    name: '',
    price: 0,
    description: ''
}

export const ProductFrom = ({handlerAdd, productSelected}) => {
    const [form, setForm] = useState(initialDataForm);

    const {id, name, price, description} = form;
    
    useEffect(() => {
        setForm(productSelected);
    }, [productSelected]);

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if(name === '' || price <= 0 || description === ''){
                console.log('Error');
                alert('Deben completarse los datos del formulario');
                return;
            }

            console.log(form);
            handlerAdd(form);
            setForm(initialDataForm);
        }}>
            <div>
                <input className="form-control my-3 w-75" type="text" 
                    placeholder="Nombre" 
                    name="" 
                    value={name} 
                    onChange={(event) => setForm({...form, name: event.target.value})} />
            </div>
            <div>
                <input className="form-control my-3 w-75" type="text" 
                    placeholder="Descripción" 
                    name="" 
                    value={description} 
                    onChange={(event) => setForm({...form, description: event.target.value})} />
            </div>
            <div>
                <input className="form-control my-3 w-75" type="number" 
                    placeholder="Precio" 
                    name="" 
                    value={price} 
                    onChange={(event) => setForm({...form, price: event.target.value})} />
            </div>
            <div>
                <button className="btn btn-primary" type="submit">{id > 0 ? 'Actualizar' : 'Agregar'}</button>
            </div>
        </form>
    )
}

ProductFrom.propTypes = {
    handlerAdd: PropTypes.func.isRequired,
    productSelected: PropTypes.object.isRequired
}
