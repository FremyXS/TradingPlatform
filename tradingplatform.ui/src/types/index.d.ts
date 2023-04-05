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

export type FilterType = {
    name: string
}

export type FiltersType = {
    developers:{name: string} [],
    genre: {name: string}[],
    platforms: {name: string}[],
    typeProducts: {name: string}[],
}

export type CatalogFiltersType = {
    price: {start: number, end: number},
    genre: string[],
    platforms: string[],
    types: string[],
    developers: string[]
}

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
    password_confirmation?: string,
    address?: string
}

export type AccountLoginData = {
    login?: string,
    email?: string,
    password?: string,
    password_confirm?: string,
}

export type UserToken = {
    access_token: string,
    role: string
}

export type UserProfileType = {
    id: number,
    name: string,
    email: string,
    email_verified_at: string,
    address: string,    
    role: string,
}

export const roles = {
    admin: "Admin",
    seller: "Seller",
    normal: "Normal"
}