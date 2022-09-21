/* Importación de la clase Módulo del paquete @nestjs/common. */
import { Module } from '@nestjs/common';
/* Importación de la clase CarsController del archivo cars.controller.ts. */
import { CarsController } from './cars.controller';
/* Importación de la clase CarsService del archivo cars.service.ts. */
import { CarsService } from './cars.service';

/* Creación de un módulo. Estos se componen de controladores, proveedores y módulos. Un decorador es aquel que le dice
a NestJS que esta clase es un módulo a través del decorador @Module() y a su véz una colección de componentes Nest que
se agrupan para formar una unidad funcional. Los módulos se utilizan para organizar el código de una aplicación Nest y
pueden importar otros módulos para extender la funcionalidad, se pueden exportar e importar sus componentes para ser
usados en otros módulos.*/

@Module({
    /* Los controladores son responsables de manejar las solicitudes entrantes y devolver las respuestas al cliente.
    A su vez, los controladores se utilizan para organizar el código de una aplicación Nest y pueden importar otros
    controladores para extender la funcionalidad y no son más que clases con decoradores que manejan solicitudes HTTP y
    se pueden inyectar en otros controllers al igual que se pueden declarar en un módulo, importar y exportar.
    */
    controllers: [CarsController],
    /* Los proveedores son un concepto fundamental en Nest. Muchas de las clases básicas de Nest pueden tratarse como
    un proveedor: servicios, repositorios, fábricas, ayudantes, etc. La idea principal de un proveedor es que se puede
    inyectar como una dependencia; esto significa que los objetos pueden crear varias relaciones entre sí, y la función
    de "cableado" instancias de objetos se puede delegar en gran medida al sistema de tiempo de ejecución Nest. */
    providers: [CarsService]
    
    /* En cuanto a los Servicios, son clases con decoradores que proporcionan una funcionalidad específica, se le pueden
    inyectar en otros Componentes, se pueden exportar e importar de un módulo para que puedan ser utilizados en otros
    módulos y se pueden declarar en un módulo. Además, son clases con decoradores que proporcionan una funcionalidad
    específica que se pueden inyectar en otros servicios, exportar e importar de un módulo para que otros módulos
    puedan usarlos.*/
    

    /* Con respecto a los Componentes son clases con decoradores que proporcionan una funcionalidad específica, se le
    pueden inyectar en otros Componentes, se pueden exportar e importar de un módulo para wue puedan ser utilizados en
    otros módulos y se pueden declarar en un módulo. */
})
export class CarsModule {}
