import { useState } from "react"

const initialDataForm = {
    name: '',
    price: 0,
    description: ''
}

export const ProductFrom = ({handlerAdd}) => {
    const [form, setForm] = useState(initialDataForm);

    const {name, price, description} = form;
    
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
                <input style={{'marginBottom': '4px'}} type="text" 
                    placeholder="Nombre" 
                    name="" 
                    value={name} 
                    onChange={(event) => setForm({...form, name: event.target.value})} />
            </div>
            <div>
                <input style={{'marginBottom': '4px'}} type="text" 
                    placeholder="Descripción" 
                    name="" 
                    value={description} 
                    onChange={(event) => setForm({...form, description: event.target.value})} />
            </div>
            <div>
                <input style={{'marginBottom': '4px'}} type="number" 
                    placeholder="Precio" 
                    name="" 
                    value={price} 
                    onChange={(event) => setForm({...form, price: event.target.value})} />
            </div>            
            <div>
                <button type="submit">Agregar</button>
            </div>
        </form>
    )
}