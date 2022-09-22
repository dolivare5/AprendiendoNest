import {Injectable, NotFoundException} from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { v4 as uuid} from "uuid";
import {Brand} from "./entities/brand.entity";

@Injectable()
export class BrandsService {
    
    private brands: Brand[] = [
        {
            id: uuid(),
            name: 'Toyota',
            createdAt: new Date().getTime(),
            updatedAt: new Date().getTime(),
        }
    ];
    
    create(createBrandDto: CreateBrandDto) {
        const brand: Brand = {
            id: uuid(),
            name: createBrandDto.name.toLowerCase(),
            createdAt: new Date().getTime(),
            updatedAt: new Date().getTime(),
        }
        this.brands.push(brand);
        return brand;
    }
    
    findAll() {
        return this.brands;
    }
    
    findOne(id: string) {
        const brand = this.brands.find(brand => brand.id === id);
        if (!brand) {
            throw new NotFoundException('Brand not found');
        }
        return brand;
    }
    
    update(id: string, updateBrandDto: UpdateBrandDto) {
        let brandDB = this.findOne(id);
        if (brandDB){
            this.brands = this.brands.map(brand => {
                if (brand.id === brandDB.id) {
                    //brand.name = updateBrandDto.name;
                    brand.updatedAt = new Date().getTime();
                    brandDB = {...brand, ...updateBrandDto};
                    return brandDB;
                }
                return brand;
            });
            return { message: 'Brand updated successfully', brand: brandDB };
        }
        
    }
    
    remove(id: string) {
        this.brands = this.brands.filter(brand => brand.id !== id);
        return { message: 'Brand deleted successfully' };
    }
    
    fillBrandsWithSeedSData(brands: Brand[]) {
        this.brands = brands;
    }
}
