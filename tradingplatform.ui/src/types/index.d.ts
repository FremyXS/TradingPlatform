export type ProducType = {
    id: number;
    title: string;
    image_url: string;
    description: string;
    release_date: string;
    price: number;
    genres_name: string,
    type_products_name: string
    platforms_name: string,
    developers_name: string
};

export type CartProductData = {
    id: number;
    title: string;
    count: number;
    price: number;
}

export type AccountRegisterData = {
    name?: string,
    email?: string,
    password?: string,
    password_confirm?: string,
}

export type AccountLoginData = {
    login?: string,
    email?: string,
    password?: string,
    password_confirm?: string,
}

export type UserToken = {
    access_token: string
}