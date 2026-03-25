import {Variant } from "../models/Products";

export function getAlt(Product: Variant): string {
    const text = Product.genericProd?.name + '\n' + Product.genericProd?.subtitle + '\n'
        + Product.genericProd?.description + '\n' + Product.color.name;

    return text;
}