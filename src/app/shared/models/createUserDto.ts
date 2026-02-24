interface CreateUserDto {
    email: string;
    name: string;
    lastName: string;
    password: string;
    phone: string;
    image?: string;
    publicId?: string;
    deleteFromCArt?: string[];
}
interface UpdateUserDto {
    email?: string;
    name?: string;
    lastName?: string;
    password?: string;
    phone?: string;
    image?: string;
    deleteFromCArt?: string[];
}