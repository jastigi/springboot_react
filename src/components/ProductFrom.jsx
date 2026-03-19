import { useState } from "react"

const initialDataForm = {
    name: '',
    price: 0,
    description: ''
}

export const ProductFrom = () => {
    const [form, setForm] = useState(initialDataForm);
react-app
    const {name, price, description} = form;
    
    return (
        <form>
            <input type="text" placeholder="Nombre" name="" value={name} onChange={(event) => setForm({...form, name: event.target.value})} />
            <input type="number" placeholder="Precio" name="" value={price} onChange={(event) => setForm({...form, price: event.target.value})} />
            <input type="text" placeholder="Descripción" name="" value={description} onChange={(event) => setForm({...form, description: event.target.value})} />
            <button type="submit">Agregar</button>
        </form>
    )
}