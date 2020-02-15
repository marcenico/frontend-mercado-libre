export interface ISearchResult {
    author: IAuthor;
    categories: string[];
    items: IItem[];
}

export interface IAuthor {
    name: string;
    lastname: string;
}

export interface IPrice {
    currency: string;
    amount: number;
    decimals: number;
}

export interface IItem {
    id: string;
    title: string;
    price: IPrice;
    picture: string;
    condition: string;
    free_shipping: boolean;
    address: string;
    sold_quantity?: number;
    description?: string;
}
