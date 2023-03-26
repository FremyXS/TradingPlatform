export type ProducType = {
    id: number;
    title: string;
    description: string;
    price: number;
};

export type CartProductData = {
    id: number;
    title: string;
    count: number;
    price: number;
}

export type AccountCred = {
    login?: string,
    email?: string,
    password?: string,
    password_confirm?: string,
}