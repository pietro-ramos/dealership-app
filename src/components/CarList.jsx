import React from 'react';
import CarItem from './CarItem';

const CarList = ({ cars, removeCar, sellCar, isSold }) => {
    return (
        <div>
            {cars.map((car, index) => (
                <CarItem
                    key={index}
                    car={car}
                    index={index}
                    removeCar={removeCar}
                    sellCar={sellCar}
                    isSold={isSold}
                />
            ))}
        </div>
    );
};

export default CarList;