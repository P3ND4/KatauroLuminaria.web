export class User{
    id!: string;
    name!: string;
    lastName!: string;
    email!: string;
    image?: string;
    token!: string;
    phone!: number;
    cart!: [any] | [];
}