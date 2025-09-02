export class Product {
    id!: string;
    name!: string;
    description!: string;
    subtitle!: string;
    vector?: string;
    categorie!: Categories;
    details!: string[];
    variants!: Variant[];
}

export class Variant {
    id!: string;
    name!: string;
    price!: number;
    stock!: number;
    image!: string;
    images!: string[];
}

export enum Categories{
    tableLumin = "Luminarias de mesa",
    wallLumin = "Luminarias de pared",
    footLumin = "Luminarias de pie",
    roofLumin = "Luminarias de techo",
    lightBulb = "Bombillo",
    other = "Otras"
}
