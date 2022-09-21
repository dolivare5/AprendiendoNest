/* El propósito de un controlador es recibir solicitudes específicas para la aplicación. El mecanismo de enrutamiento
controla qué controlador recibe qué solicitudes. Con frecuencia, cada controlador tiene más de una ruta, y diferentes
rutas pueden realizar diferentes acciones.

Para crear un controlador básico, utilizamos clases y decoradores. Los decoradores asocian las clases con los metadatos
necesarios y permiten a Nest generar un mapa de enrutamiento (vincular las solicitudes a los controladores
correspondientes).*/

/* Importación de los decoradores Controller, Get, Param y ParseIntPipe del paquete @nestjs/common. */
import {
    Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe
} from '@nestjs/common';
/* Importación de la clase CarsService del archivo cars.service.ts. */
import { CarsService } from './cars.service';
import {CreateCarDto, UpdateCarDto} from "./dto/index.dto";

/* Un decorador que le dice a NestJS que esta clase es un controlador. También le dice a NestJS que este controlador
manejará las solicitudes al punto final `/cars`. */
@Controller('cars')
/* La clase CarsController es un controlador NestJS que usa la clase CarsService para manejar solicitudes HTTP */
export class CarsController {
    /**
     * La función constructora es una función especial que se llama cuando se crea una nueva instancia de la clase.
     * @param {CarsService} carsService - CochesServicio
     */
    constructor(
        /* Una inyección de dependencia. */
        private readonly carsService: CarsService,
    ) {}
    
    /* Este es un método que maneja las solicitudes GET al punto final `/cars`. */
    @Get()
    getAllCars() {
        /* Devolviendo el resultado del método `findAll()` de la clase `CarsService`. */
        return this.carsService.findAll();
    }
    
    /* Este es un método que maneja las solicitudes GET al punto final `/cars/:id`.
       El decorador `@Param()` se usa para extraer el valor del parámetro de ruta.
       El decorador `@Param()` toma dos argumentos:
          - El nombre del parámetro de ruta.
          - La tubería que se utilizará para transformar el valor del parámetro de ruta.
       El `ParseIntPipe` es un conducto integrado que convierte una cadena en un número.
       El operador `+` se utilíza para convertir el valor de la variable `id` en un número. */
    @Get(':id')
    /* Un Pipe es una clase que se utiliza para transformar los datos de entrada de una solicitud antes de que lleguen
    a un controlador. Los Pipes se pueden usar para validar la entrada de datos, transformar la entrada de datos
    y realizar otras operaciones útiles.
    Hay 4 lugares donde se pueden usar los Pipes: a nivel de parametro, a nivel de controlador, a nivel global del
    controlador y a nivel global de la aplicación. */
    getCarById( @Param('id', ParseUUIDPipe) id: string) {
        console.log(id);
        return this.carsService.findOneById(id);
    }
    
    /* Este es un método que maneja las solicitudes POST al punto final `/cars`. */
    @Post()
    /* El decorador `@Body()` se usa para extraer el cuerpo de la solicitud. */
    createCar(@Body() createCarDto: CreateCarDto ) {
        /* Creando un nuevo coche. */
        this.carsService.create(createCarDto);
        /* Devolviendo un mensaje de éxito. */
        return {
            message: 'Car created successfully'
        }
        
    }
    
    @Patch(':id')
    
    updateCar(@Param('id', ParseUUIDPipe) id: string, @Body() updateCarDto: UpdateCarDto) {
        this.carsService.update(id, updateCarDto);
        return updateCarDto;
    }
    
    @Delete(':id')
    deleteCar(@Param('id', ParseUUIDPipe) id: string) {
        this.carsService.delete(id);
        return{
            message: `Car with id ${id} deleted`
        };
    }
}
