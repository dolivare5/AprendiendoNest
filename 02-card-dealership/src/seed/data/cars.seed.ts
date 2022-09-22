import {Car} from "../../cars/interfaces/car.interface";
import {v4 as uuid } from "uuid";

export const CAR_SEED: Car[] = [
    {
        id: uuid(),
        brand: 'Toyota',
        model: 'Corolla',
    },
    {
        id: uuid(),
        brand: 'Ford',
        model: 'Fiesta',
    },
    {
        id: uuid(),
        brand: 'Chevrolet',
        model: 'Cruze',
    },
    {
        id: uuid(),
        brand: 'Nissan',
        model: 'Versa',
    },
    {
        id: uuid(),
        brand: 'Hyundai',
        model: 'Accent',
    },
    {
        id: uuid(),
        brand: 'Kia',
        model: 'Rio',
    },
    {
        id: uuid(),
        brand: 'Mazda',
        model: '3',
    },
    {
        id: uuid(),
        brand: 'Honda',
        model: 'Civic',
    },
    {
        id: uuid(),
        brand: 'Volkswagen',
        model: 'Jetta',
    }
];