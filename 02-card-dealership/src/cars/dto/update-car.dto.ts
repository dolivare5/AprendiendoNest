/* Un DTO o Data Transfer Object es un objeto que se utiliza para transferir datos entre procesos de software.
Se usa para encapsular los datos que se transfieren entre procesos de software y se usa para definir
los tipos de datos que se transfieren entre procesos de software. Se diferencian de una interfaz en que
una interfaz solo define la estructura de los datos, mientras que un DTO define la estructura de los datos
y también proporciona métodos para manipular los datos. Además, un DTO es un objeto que se puede serializar
y deserializar, mientras que una interfaz no lo es.
En resumen, un DTO no es más que una clase que proporciona una estructura de datos y métodos para manipular
los datos que se evnvían a la base de datos. Además sirve para asegurar que los datos que se reciben tengan
el mismo formato que los datos que se envían a la base de datos y de esta forma evitar errores y garantizar
que los datos que se envían a la base de datos tengan el formato correcto. Des esta manera se puede saber
la data que se espera recibir y la data que se espera enviar a los diferentes componentes y servicios de la
aplicación. Esto ayuda a implementar reglas de validaciones automotizadas y a evitar errores en la aplicación.*/

import {IsOptional, IsString, MinLength} from 'class-validator';
export class UpdateCarDto {
    @IsString({ message: 'El campo id debe ser un string.' })
    @MinLength(3, { message: 'El campo id debe tener al menos 3 caracteres.' })
    @IsOptional()
    readonly id?: string;
    
    
    @IsString({ message: 'El campo marca debe ser un string.' })
    @MinLength(3, { message: 'El campo marca debe tener al menos 3 caracteres.' })
    @IsOptional()
    readonly brand?: string;
    
    @IsString({ message: 'El campo modelo debe ser un string.' })
    @IsOptional()
    readonly model?: string;
    
}