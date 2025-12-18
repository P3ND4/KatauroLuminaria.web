import { OrderState } from "./Order";

export class CreateOrderDto {

    userId!: string;
    delivery!: boolean;
    state!: OrderState;
    price!: number;
    delPrice!: number;
    createdAt!: Date;
    name!: string;
    lastName!: string;
    email!: string;
    phone!: string;
    address?: string;
    province?: string;
    city?: string;
    note?: string;
    productsID!: {
        productId: string,
        count: number
    }[]
}
