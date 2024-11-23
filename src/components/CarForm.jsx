import React, { useState } from 'react';

const CarForm = ({ addCar }) => {
    const [car, setCar] = useState({ marca: '', modelo: '', ano: '', cor: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCar({ ...car, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addCar(car);
        setCar({ marca: '', modelo: '', ano: '', cor: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="marca" value={car.marca} onChange={handleChange} placeholder="Marca" required />
            <input name="modelo" value={car.modelo} onChange={handleChange} placeholder="Modelo" required />
            <input name="ano" value={car.ano} onChange={handleChange} placeholder="Ano" required />
            <input name="cor" value={car.cor} onChange={handleChange} placeholder="Cor" required />
            <button type="submit">Adicionar Carro</button>
        </form>
    );
};

export default CarForm;