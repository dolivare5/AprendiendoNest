import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ValidationPipe} from "@nestjs/common";

/**
 * Cree una instancia de la clase AppModule y luego escuche las solicitudes HTTP entrantes en el puerto 4999.
 */
async function main() {
    const app = await NestFactory.create(AppModule);
    /* useGlobalPipes() es un método que se puede usar para configurar Pipes globales. */
    app.useGlobalPipes(new ValidationPipe({
        /* Whitelist es una propiedad que se utiliza para eliminar las propiedades que no están definidas en el DTO. */
        whitelist: true,
        /* ForbidNonWhitelisted es una propiedad que se utiliza para lanzar una excepción cuando se detecta una propiedad
        no permitida. */
        forbidNonWhitelisted: true,
    }));
    
    await app.listen(4999);
}
/* Una función de devolución de llamada que se ejecuta después de ejecutar la función principal. */
main().then(() => console.log('Connect to http://localhost:4999 Successfully!'));
