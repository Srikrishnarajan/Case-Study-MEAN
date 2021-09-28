//cast the observable to this type which we get from http response
export interface Item {
    prodId: number;
    name: string;
    price: number;
    rating: number;
    imageUrl: string;
}