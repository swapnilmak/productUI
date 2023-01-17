export class ProductDetails{
    public detailsId: number;
    public specification: string;
    public quantity: string;
    public price: number;
    public imageURL: string;

    constructor(detailsId: number,  specification: string,  quantity: string, price: number, imageURL: string){
        this.detailsId = detailsId;
        this.specification = specification;
        this.quantity = quantity;
        this.price = price;
        this.imageURL = imageURL;
    }
}

