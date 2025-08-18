export class Product {
    id!: string;
    name!: string;
    description?: string;
    price!: number;
    stock!: number;
    image?: string;
    vector? :string;
    categorie!: Categories;
}

export enum Categories{
    tableLumin = "Luminarias de mesa",
    wallLumin = "Luminarias de pared",
    footLumin = "Luminarias de pie",
    roofLumin = "Luminarias de techo",
    lightBulb = "Bombillo",
    other = "Otras"
}
