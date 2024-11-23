import { useState } from 'react';
import CarForm from './components/CarForm';
import CarList from './components/CarList';
import './App.css';

const App = () => {
    const [cars, setCars] = useState([]);
    const [soldCars, setSoldCars] = useState([]);

    const addCar = (car) => {
        setCars([...cars, car]);
    };

    const removeCar = (index, isSold) => {
        if (isSold) {
            setSoldCars(soldCars.filter((_, i) => i !== index));
        } else {
            setCars(cars.filter((_, i) => i !== index));
        }
    };

    const sellCar = (index, buyer) => {
        const car = cars[index];
        setSoldCars([...soldCars, { ...car, buyer }]);
        removeCar(index, false);
    };

    return (
        <div>
            <h1>Cadastro de Carros</h1>
            <CarForm addCar={addCar} />
            <h2>Carros à Venda</h2>
            <CarList cars={cars} removeCar={removeCar} sellCar={sellCar} isSold={false} />
            <h2>Carros Vendidos</h2>
            <CarList cars={soldCars} removeCar={removeCar} isSold={true} />
        </div>
    );
};

export default App;