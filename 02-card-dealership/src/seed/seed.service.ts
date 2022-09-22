import { Injectable } from '@nestjs/common';
import {CAR_SEED} from "./data/cars.seed";
import {CarsService} from "../cars/cars.service";
import {BrandsService} from "../brands/brands.service";
import {BRANDS_SEED} from "./data/brands.seed";

@Injectable()
export class SeedService {
    constructor(
        private readonly carsService: CarsService,
        private readonly brandsService: BrandsService,
    ) {}
    populateDB(){
        
        this.carsService.fillCarsWithSeedSData(CAR_SEED);
        this.brandsService.fillBrandsWithSeedSData(BRANDS_SEED);
        return 'Seed executed successfully';
    }
}