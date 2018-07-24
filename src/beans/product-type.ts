export class ProductType {
    type:string;
    retired:boolean;
    constructor(type:string, retired:boolean) {
        this.type = type;
        this.retired = retired;
    }
}
