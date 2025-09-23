export class Product {
    id!: string;
    name!: string;
    description!: string;
    subtitle!: string;
    vector?: string;
    category!: CatModel;
    details!: detail[];
    variants!: Variant[];
    finish!: Finish[];
}


export class Finish {
    id!: string
    productId!: string
    text!: string
}
export class detail {
    id!: string
    idProd!: string
    text!: string
}

export class Variant {
    id!: string;
    name!: string;
    price!: number;
    stock!: number;
    image!: string;
    images!: string[];
}

export class CatModel {
    id!: string;
    nombre!: Categories
}

export enum Categories {
    tableLumin = "Luminarias de mesa",
    wallLumin = "Luminarias de pared",
    footLumin = "Luminarias de pie",
    roofLumin = "Luminarias de techo",
    lightBulb = "Bombillo",
    other = "Otras"
}
