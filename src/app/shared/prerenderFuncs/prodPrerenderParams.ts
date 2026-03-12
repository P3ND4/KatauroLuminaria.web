import { inject } from "@angular/core";
import { Product } from "../models/Products";
import { HttpService } from "../services/http/http.service";
import { firstValueFrom } from "rxjs";



export async function prodPrerenderParams() {

    const http = inject(HttpService);
    const prods: Product[] = await firstValueFrom(http.getProducts()) as Product[];

    return prods.map(prod => ({
        category: prod.category.nombre.toLowerCase(),
        id: prod.id
    }));
}