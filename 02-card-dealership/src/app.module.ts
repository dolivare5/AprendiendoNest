import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { BrandsModule } from './brands/brands.module';
import { SeedModule } from './seed/seed.module';

/* Un módulo sirve para agrupar funcionalidades y caracteristicas para poder reutilizarlas en otros modulos */
@Module({
    imports: [CarsModule, BrandsModule, SeedModule],
    controllers: [],
    providers: [],
    exports: [],
})
export class AppModule {}
