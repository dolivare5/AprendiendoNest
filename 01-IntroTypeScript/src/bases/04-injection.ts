import {HttpAdapter, PokeApiAdapter } from "../api/pokeApi.adapter";
import {PokeApiResponse} from "../interfaces/pokeapi-response.interface";


export class Pokemon {
    
    get imageUrl(): string {
        return `https://pokemon.com/${ this.id }.jpg`;
    }
    
    constructor(
        public readonly id: number,
        public name: string,
        // Todo: inyectar dependencias
        private readonly http:HttpAdapter
    
    ) {}
    
    scream() {
        console.log(`${ this.name.toUpperCase() }!!!`);
    }
    
    speak() {
        console.log(`${ this.name }, ${ this.name }`);
    }
    
    async getMoves() {
        const data = await this.http.get<PokeApiResponse>('https://pokeapi.co/api/v2/pokemon/4');
        console.log( data.moves );
        
        return data.moves;
    }
    
}

const pockeApi = new PokeApiAdapter();
//const pokeApiFetchAdapter = new PokeApiFetchAdapter();
export const charmander = new Pokemon( 4, 'Charmander', pockeApi );

await charmander.getMoves();