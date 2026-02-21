export class User {
    id!: string;
    name!: string;
    lastName!: string;
    email!: string;
    image?: string;
    publicId?: string
    token!: string;
    phone!: string;
    cart!: [any] | [];
}