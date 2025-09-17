export class User{
    id!: string;
    name!: string;
    lastName!: string;
    email!: string;
    image?: string;
    token!: string;
    cart!: [any] | [];
}