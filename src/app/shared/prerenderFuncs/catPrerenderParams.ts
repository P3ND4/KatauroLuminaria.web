import { Categories } from "../models/Products";

export async function catPrerenderParams() {
    const cats = [
        Categories.footLumin,
        Categories.lightBulb,
        Categories.roofLumin,
        Categories.tableLumin,
        Categories.wallLumin
    ]

    return cats.map(cat => ({
        category: cat.toLowerCase()
    }));
}