import { Variant } from "../models/Products";
import { Promotion } from "../models/promotions";

export function calculateDiscount(Product?: Variant): number {
    if (!Product) return 0;
    let varDiscount = Product?.promotions.filter(x => filterPromoByDate(x.promotion)).map(x => x.promotion.discount * 0.01).reduce((a, b) => a + b, 0) ?? 0;
    return varDiscount;
}



function filterPromoByDate(promotion: Promotion): Boolean {
    let now = new Date()
    return new Date(promotion.startDate) < now && new Date(promotion.endDate) > now;
}
