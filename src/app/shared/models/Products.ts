export enum Categories {
    tableLumin = "Luminarias de mesa",
    wallLumin = "Luminarias de pared",
    footLumin = "Luminarias de pie",
    roofLumin = "Luminarias de techo",
    lightBulb = "Accesorios",
    other = "Otras"
}

export class Product {
    id!: string;
    name!: string;
    description!: string;
    subtitle!: string;
    vector?: string;
    category!: CatModel;
    typology!: Typology;
    details!: detail[];
    variants!: Variant[];
    finish!: FinishForProduct[];
}


export class Finish {
    id!: string
    image!: string
    text!: string
}
export class detail {
    id!: string
    idProd!: string
    text!: string
}

export class Color {
    id!: string;
    name!: string;
    image?: string;
}

export class Variant {
    id!: string;
    colorId!: string;
    price!: number;
    stock!: number;
    image?: string;
    images!: { link: string, id: string }[]
    color!: Color
    genericId!: string;
    genericProd?: Product;
}
export class Image {
    id!: string;
    link!: string;
};

export class FinishForProduct {
    productId!: string;
    finishId!: string;
}

export class CatModel {
    id!: string;
    nombre!: Categories
}

export enum Typology {
    simple = "Simple",
    variant = "Variante"
}
