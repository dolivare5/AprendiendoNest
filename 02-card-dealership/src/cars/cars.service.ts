import {BadRequestException, Injectable, NotFoundException} from '@nestjs/common';
import {Car} from "./interfaces/car.interface";
import { v4 as uuid } from 'uuid';
import {CreateCarDto, UpdateCarDto} from "./dto/index.dto";

/* Es un servicio que proporciona una variedad de autos */
@Injectable()
export class CarsService {
    private cars : Car[] = [
        {
            id: uuid(),
            brand: 'Toyota',
            model: 'Corolla',
        },
        {
            id: uuid(),
            brand: 'Honda',
            model: 'Civic',
        },
        {
            id: uuid(),
            brand: 'Jeep',
            model: 'Wrangler',
        }
    ];
    
    /**
     * Devuelve la matriz de coches.
     * @returns Una serie de coches.
     */
    findAll() {
        return this.cars;
    }
    
    /**
     * La función toma una identificación como parámetro y devuelve el objeto de automóvil que tiene la misma
     * identificación que el parámetro
     * @param {number} id - number - El id del coche que queremos encontrar.
     * @returns El objeto de automóvil con la identificación coincidente.
     */
    findOneById(id: string) {
        console.log(id);
        /* Usando el método `find` para encontrar el auto con la identificación correspondiente. */
        const car : Car  = this.cars.find(car => car.id === id);
        if(!car) throw new NotFoundException(`Car with id ${id} not found`);
        return car;
    }
    
    /**
     * La función toma un objeto de automóvil como parámetro y lo agrega a la matriz de automóviles.
     * @returns El objeto de automóvil que se agregó.
     * @throws {BadRequestException} - Lanza una excepción cuando el objeto de automóvil no tiene una marca o un modelo.
     * @param createCarDto
     */
    create( createCarDto: CreateCarDto){
        const car: Car = {
            id: uuid(),
            brand: createCarDto.brand,
            model: createCarDto.model,
        };
        this.cars.push(car);
        return car;
    };
    
    /**
     * La función toma un objeto de automóvil como parámetro y lo agrega a la matriz de automóviles.
     * @returns El objeto de automóvil que se agregó.
     * @throws {BadRequestException} - Lanza una excepción cuando el objeto de automóvil no tiene una marca o un modelo.
     * @param id
     * @param updateCarDto
     */
    update(id: string, updateCarDto: UpdateCarDto) {
        let carDB : Car = this.findOneById(id);
        if( updateCarDto.id && updateCarDto.id !== id ) {
            throw new BadRequestException(`Car with id ${id} not found`);
        }
        
        this.cars = this.cars.map(car => {
            if(car.id === id) {
                // car.brand = updateCarDto.brand || car.brand;
                // car.model = updateCarDto.model || car.model;
                carDB = {...carDB, ...updateCarDto, id};
                return carDB;
            }
            return car;
        });
        return carDB;
    }
    
    delete(id: string) {
        this.findOneById(id);
        this.cars = this.cars.filter(car => car.id !== id);
    }
}
