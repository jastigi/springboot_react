import axios from "axios"

const initProducts = [
    { id: 1, name: 'Monitor Samsung 24"', price: 500, description: 'Monitor de 24 pulgadas con resolución Full HD' },
    { id: 2, name: 'Mouse Logitech MX Master 3', price: 100, description: 'Mouse ergonómico con sensor de alta precisión' },
    { id: 3, name: 'Teclado mecánico Corsair K95 RGB Platinum', price: 200, description: 'Teclado mecánico con retroiluminación RGB y switches Cherry MX' }
]

const BASE_URL = 'http://localhost:8080/products';

export const listProducts = () => {
    return initProducts
}

export const findAll = async () => {
    try {
        const response = await axios.get(BASE_URL);
        return response;
    } catch (error) {
        console.error(error);
    }
    return null;
}

export const create = async ({name, price, description}) => {
    try {
        const response = await axios.post(BASE_URL, {name, price, description});
        return response;
    } catch (error) {
        console.error(error);
    }
    return null;
}

export const update = async ({id, name, price, description}) => {
    try {
        const response = await axios.put(`${BASE_URL}/${id}`, {name, price, description});
        return response;
    } catch (error) {
        console.error(error);
    }
    return null;
}

export const remove = async (id) => {
    try {
        const response = await axios.delete(`${BASE_URL}/${id}`);
        return response;
    } catch (error) {
        console.error(error);
    }
    return null;
}

