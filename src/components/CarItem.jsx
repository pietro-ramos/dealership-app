import React, { useState } from 'react';

const CarItem = ({ car, index, removeCar, sellCar, isSold }) => {
    const [buyer, setBuyer] = useState({ nome: '', cpf: '' });
    const [showBuyerForm, setShowBuyerForm] = useState(false);

    const handleRemove = () => {
        if (window.confirm('Tem certeza que deseja remover este carro?')) {
            removeCar(index, isSold);
        }
    };

    const handleSell = () => {
        setShowBuyerForm(true);
    };

    const handleBuyerChange = (e) => {
        const { name, value } = e.target;
        if (name === 'cpf') {
            setBuyer({ ...buyer, [name]: formatCPF(value) });
        } else {
            setBuyer({ ...buyer, [name]: value });
        }
    };

    const handleBuyerSubmit = (e) => {
        e.preventDefault();
        sellCar(index, buyer);
    };

    return (
        <div className="car-item">
            <p>Marca: {car.marca}</p>
            <p>Modelo: {car.modelo}</p>
            <p>Ano: {car.ano}</p>
            <p>Cor: {car.cor}</p>
            {isSold && (
                <>
                    <p>Comprador: {car.buyer.nome}</p>
                    <p>CPF: {car.buyer.cpf}</p>
                </>
            )}
            {!isSold && (
                <>
                    <button onClick={handleSell}>Vendido</button>
                    {showBuyerForm && (
                        <form onSubmit={handleBuyerSubmit} className="buyer-form">
                            <input name="nome" value={buyer.nome} onChange={handleBuyerChange} placeholder="Nome do Comprador" required />
                            <input name="cpf" value={buyer.cpf} onChange={handleBuyerChange} placeholder="CPF do Comprador" required />
                            <button type="submit">Confirmar Venda</button>
                        </form>
                    )}
                </>
            )}
            <button onClick={handleRemove}>Remover</button>
        </div>
    );
};

const formatCPF = (value) => {
    return value
        .replace(/\D/g, '') // Remove tudo que não é dígito
        .replace(/(\d{3})(\d)/, '$1.$2') // Coloca um ponto entre o terceiro e o quarto dígitos
        .replace(/(\d{3})(\d)/, '$1.$2') // Coloca um ponto entre o sexto e o sétimo dígitos
        .replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Coloca um hífen entre o nono e o décimo dígitos
};

export default CarItem;