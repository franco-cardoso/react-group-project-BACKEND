type PromiseType = {
    data: any;
    status: number;
    error?: Error;
};
type ProductType = {
    img: string;
    title: string;
    price: number;
    category: string;
};

export { PromiseType, ProductType };
